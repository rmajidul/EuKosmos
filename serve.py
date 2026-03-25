#!/usr/bin/env python3
# ══════════════════════════════════════════════════════════════════════
#  serve.py  —  Astronomer's Notebook Local Server
#
#  WHAT THIS FILE IS:
#    A small web server you run on your own computer. It does two jobs:
#      1. Serves your notebook files (index.html, data_*.json etc.)
#         so Chrome can open them at http://localhost:8080
#      2. Acts as a "middleman" (proxy) between the browser and the
#         NASA ADS API, because browsers block direct calls to external
#         APIs from localhost (a security restriction called CORS).
#
#  HOW TO START IT:
#    Open Terminal and type:   python3 serve.py
#    Then open Chrome and go to:  http://localhost:8080
#
#  HOW TO STOP IT:
#    Press Ctrl+C in the Terminal window, or just close the window.
#
#  HOW TO CHANGE THE PORT (if 8080 is already in use):
#    python3 serve.py 9090    ← uses port 9090 instead
#    Then open:  http://localhost:9090
#
#  YOU SHOULD NOT NEED TO EDIT THIS FILE unless you want to change
#  the port number below or the ADS API base URL.
# ══════════════════════════════════════════════════════════════════════

# ── Standard Python libraries — nothing to install ──
# sys:      reads command-line arguments (e.g. the port number)
# os:       works with file paths and directories
# json:     converts Python data to JSON text and back
# subprocess: runs external programs (e.g. "open file.pdf" on macOS)
# platform: detects the operating system (macOS / Linux / Windows)
# urllib:   makes HTTP requests to the ADS API
import sys, os, json, subprocess, platform, urllib.request, urllib.error, urllib.parse

# http.server is Python's built-in web server — no installation needed
from http.server import HTTPServer, SimpleHTTPRequestHandler


# ══════════════════════════════════════════════════════════════════════
#  CONFIGURATION
#  These are the only values you might ever want to change.
# ══════════════════════════════════════════════════════════════════════

# PORT — the number in the URL: http://localhost:8080
#   If another program is already using 8080, change this to any number
#   between 1024 and 65535, e.g. 8090 or 3000.
#   You can also override it by running:  python3 serve.py 9090
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
#         ↑ sys.argv[1] means "the first argument you typed after serve.py"
#           If no argument is given, use 8080 as the default.

# ADS_BASE — the root URL of the NASA ADS API.
#   You should never need to change this unless NASA changes their API URL.
ADS_BASE = "https://api.adsabs.harvard.edu/v1"

# NOTEBOOK_DIR — the folder where this serve.py file lives.
#   This is calculated automatically so the server always serves files
#   from the correct folder, regardless of where you run it from.
#   __file__ means "the path to this script file itself".
NOTEBOOK_DIR = os.path.dirname(os.path.abspath(__file__))


# ══════════════════════════════════════════════════════════════════════
#  Handler — the class that processes every incoming browser request
#
#  WHAT IS A CLASS?
#    Think of it as a blueprint. Every time the browser asks for
#    something (a file, an API call), Python creates a Handler
#    from this blueprint to deal with it.
#
#  SimpleHTTPRequestHandler is Python's built-in handler that already
#  knows how to serve files from a directory. We extend it (add to it)
#  to also handle our custom /api/* endpoints.
# ══════════════════════════════════════════════════════════════════════
class Handler(SimpleHTTPRequestHandler):

    def log_message(self, fmt, *args):
        # ── WHAT THIS DOES:
        #    Controls what gets printed to the Terminal while the server runs.
        #    By default Python prints EVERY request (hundreds of lines).
        #    We only print /api/ requests so the terminal stays readable.
        #
        # ── HOW TO CHANGE:
        #    To see ALL requests (useful for debugging), replace the whole
        #    function with just:   pass  ← which means "do nothing"
        #    Or to print everything:  super().log_message(fmt, *args)
        msg = str(args[0]) if args else ''
        if '/api/' in msg:
            print(f"  [{str(args[1]) if len(args)>1 else '?'}] {msg}")


    # ── do_GET: handles all GET requests (browser asking for something) ──
    #
    #    A GET request is what happens when you type a URL or click a link.
    #    self.path is the URL path, e.g. "/index.html" or "/api/ads/search"
    #
    #    We check what path was requested and route it to the right handler:
    #      /api/ads/*       → proxy to ADS API
    #      /api/open-pdf    → open a PDF in Preview/system viewer
    #      /api/serve-pdf   → send PDF bytes to the browser
    #      /api/open-path   → open a file/folder in Finder
    #      anything else    → serve the file normally (HTML, JSON, etc.)
    def do_GET(self):
        if   self.path.startswith('/api/ads/'):        self._proxy_ads('GET')
        elif self.path.startswith('/api/open-pdf'):    self._open_pdf()
        elif self.path.startswith('/api/serve-pdf'):   self._serve_pdf()
        elif self.path.startswith('/api/open-path'):   self._open_path()
        elif self.path.startswith('/api/arxiv'):         self._proxy_arxiv()
        elif self.path.startswith('/api/scix'):          self._proxy_scix()
        elif self.path.startswith('/api/download-lib'):    self._download_lib()
        else: super().do_GET()
        # super().do_GET() means "use the parent class's normal file-serving"


    # ── do_POST: handles POST requests (browser sending data) ──
    #
    #    POST is used when sending data to a server, e.g. when the notebook
    #    sends a bibcode to ADS and asks for the BibTeX export.
    #    Only /api/ads/ accepts POST; anything else gets a 405 error.
    def do_POST(self):
        if   self.path.startswith('/api/scix'):           self._proxy_scix()
        elif self.path.startswith('/api/ads/'):          self._proxy_ads('POST')
        elif self.path.startswith('/api/download-pdf'):  self._download_pdf()
        else: self.send_error(405)
        # 405 = "Method Not Allowed" — standard HTTP error code


    # ── do_OPTIONS: handles preflight CORS checks ──
    #
    #    WHAT IS CORS?
    #      When a browser makes a request to a different domain (e.g. from
    #      localhost to api.adsabs.harvard.edu), it first sends an "OPTIONS"
    #      preflight request asking "are you allowed to receive this?".
    #      Without proper CORS headers, the browser blocks the request.
    #
    #    We respond to OPTIONS with "yes, allow everything" so the browser
    #    is satisfied and makes the real request.
    #
    #    This mainly matters for the ADS proxy — the browser asks our
    #    local server if it's OK to send requests, and we say yes.
    def do_OPTIONS(self):
        self.send_response(200)   # 200 = OK
        self._cors()              # add CORS headers (see _cors below)
        self.end_headers()


    def _cors(self):
        # ── WHAT THIS DOES:
        #    Adds HTTP headers that tell the browser "cross-origin requests
        #    are allowed from anywhere". These three headers are the standard
        #    CORS permission headers.
        #
        # ── WHY IT'S NEEDED:
        #    Without these, the browser would block the ADS API responses
        #    because they come from a different domain (adsabs.harvard.edu)
        #    than where the notebook is served (localhost).
        #
        # ── DO NOT CHANGE these unless you know what you're doing.
        self.send_header('Access-Control-Allow-Origin', '*')
        # '*' means "allow requests from any origin" — safe here because
        # this server only runs locally on your own machine.
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Authorization, Content-Type')
        # Authorization is needed to pass the ADS API token through.


    def _resolve(self, raw):
        # ── WHAT THIS DOES:
        #    Converts a file path from the browser into a real path on disk.
        #    The browser might send "./pdf/paper.pdf" or a full absolute path
        #    like "/Users/majidul/mypage/pdf/paper.pdf".
        #    This function normalises both formats into a real absolute path.
        #
        # ── EXAMPLE:
        #    raw = "./pdf/paper.pdf"
        #    → returns "/Users/majidul/mypage/pdf/paper.pdf"
        #
        #    raw = "/Users/majidul/mypage/pdf/paper.pdf"
        #    → returns "/Users/majidul/mypage/pdf/paper.pdf" (unchanged)
        raw = raw.strip()
        if os.path.isabs(raw):
            # os.path.isabs checks if the path starts with / (absolute path)
            return os.path.normpath(raw)
            # normpath cleans up redundant slashes or ".." in the path
        # Otherwise it's a relative path — join it with the notebook folder
        return os.path.normpath(os.path.join(NOTEBOOK_DIR, raw.lstrip('./').lstrip('/')))
        # lstrip('./') removes leading "./" from paths like "./pdf/paper.pdf"


    def _open_pdf(self):
        # ── WHAT THIS DOES:
        #    Opens a local PDF file in the operating system's default PDF viewer
        #    (Preview on macOS, the default PDF app on Windows/Linux).
        #    This is called when you click "📄 PDF" on a paper card.
        #
        # ── HOW IT WORKS:
        #    1. Browser calls: GET /api/open-pdf?path=./pdf/paper.pdf
        #    2. This function reads the "path" from the URL
        #    3. Converts it to a real disk path using _resolve()
        #    4. Checks the file actually exists
        #    5. Runs the OS command to open it (same as double-clicking in Finder)
        #    6. Sends back {"ok": true} to tell the browser it worked

        # Parse the URL to extract the query string (?path=...)
        qs  = urllib.parse.urlparse(self.path).query
        # parse_qs converts "path=./pdf/paper.pdf" into {'path': ['./pdf/paper.pdf']}
        raw = urllib.parse.parse_qs(qs).get('path', [''])[0]
        # [0] gets the first value (there's only one)

        if not raw:
            self._json(400, {'error': 'No path'})
            return
            # 400 = Bad Request — the browser didn't send a path

        path = self._resolve(raw)   # convert to real disk path

        if not os.path.isfile(path):
            self._json(404, {'error': f'Not found: {path}'})
            return
            # 404 = Not Found — the file doesn't exist at that path
            # TO FIX: check the path you entered in the PDF field is correct

        try:
            sys_ = platform.system()
            # platform.system() returns 'Darwin' (macOS), 'Linux', or 'Windows'

            if   sys_ == 'Darwin':  subprocess.Popen(['open', path])
            # 'open' is the macOS command that opens a file in its default app.
            # It's exactly like double-clicking the file in Finder.

            elif sys_ == 'Linux':   subprocess.Popen(['xdg-open', path])
            # xdg-open is the Linux equivalent of macOS's 'open' command.
            # It opens the file in whatever app is registered for that file type.

            elif sys_ == 'Windows': os.startfile(path)
            # os.startfile is the Windows equivalent — opens in the default app.

            self._json(200, {'ok': True, 'path': path})
            print(f"  [PDF] Opened in system viewer: {path}")
        except Exception as e:
            self._json(500, {'error': str(e)})
            # 500 = Internal Server Error — something went wrong on our side
            # The error message will appear in the browser's toast notification


    def _open_path(self):
        # ── WHAT THIS DOES:
        #    Opens a file or FOLDER in the system file manager.
        #    Used by the Code Library section's "↗ Open" button to reveal
        #    the location of a script in Finder (macOS) or File Explorer.
        #
        #    On macOS, 'open /path/to/folder' opens that folder in Finder.
        #    On macOS, 'open /path/to/file.py' opens the file in its default app.
        #
        # ── HOW TO ADD MORE "open in Finder" BUTTONS:
        #    In index.html, add this button pattern anywhere you have a file path:
        #    onclick="openInFinder('./your/path')"
        #    The JavaScript function openInFinder() calls this endpoint.
        qs   = urllib.parse.urlparse(self.path).query
        raw  = urllib.parse.parse_qs(qs).get('path', [''])[0]
        if not raw: self._json(400, {'error': 'No path'}); return
        path = self._resolve(raw)
        try:
            sys_ = platform.system()
            if sys_ == 'Darwin':
                subprocess.Popen(['open', path])
                # Works for both files AND directories on macOS
            elif sys_ == 'Linux':
                subprocess.Popen(['xdg-open', path])
            elif sys_ == 'Windows':
                os.startfile(path)
            self._json(200, {'ok': True, 'path': path})
            print(f"  [PATH] Opened: {path}")
        except Exception as e:
            self._json(500, {'error': str(e)})


    def _serve_pdf(self):
        # ── WHAT THIS DOES:
        #    A fallback for when _open_pdf() doesn't work.
        #    Instead of opening Preview, it reads the PDF bytes from disk
        #    and sends them to the browser so Chrome can display it inline
        #    in a new tab using its built-in PDF viewer.
        #
        # ── WHEN IS THIS USED?
        #    If the system viewer fails (e.g. on some Linux configs), the
        #    JavaScript in index.html automatically falls back to this endpoint.
        #    You can also use it directly: /api/serve-pdf?path=./pdf/paper.pdf
        qs  = urllib.parse.urlparse(self.path).query
        raw = urllib.parse.parse_qs(qs).get('path', [''])[0]
        if not raw: self.send_error(400); return
        path = self._resolve(raw)
        if not os.path.isfile(path): self.send_error(404); return
        try:
            with open(path, 'rb') as f: data = f.read()
            # 'rb' = read in binary mode — PDFs are binary files, not text
            self.send_response(200); self._cors()
            self.send_header('Content-Type', 'application/pdf')
            # Content-Type tells the browser this is a PDF so it renders it
            self.send_header('Content-Length', str(len(data)))
            self.send_header('Content-Disposition', 'inline')
            # 'inline' = display in browser (vs 'attachment' which would download)
            self.end_headers(); self.wfile.write(data)
        except Exception as e: self.send_error(500, str(e))


    def _download_pdf(self):
        # ── /api/download-pdf — download a remote PDF and save to ./pdf/ ──
        # Called by the JavaScript downloadPDF() function.
        # Expects POST body: {"url": "https://arxiv.org/pdf/...", "filename": "Smith_2024_..."}
        # Downloads the PDF using Python urllib, saves to ./pdf/filename.pdf
        # Returns: {"ok": true, "path": "./pdf/filename.pdf"}
        n = int(self.headers.get('Content-Length', 0))
        body = json.loads(self.rfile.read(n)) if n else {}
        url      = body.get('url', '').strip()
        filename = body.get('filename', 'paper').strip()
        if not url:
            self._json(400, {'error': 'No URL provided'}); return
        # Sanitise filename: keep only safe characters, add .pdf
        safe_name = ''.join(c if c.isalnum() or c in '-_.' else '_' for c in filename)
        if not safe_name.endswith('.pdf'):
            safe_name += '.pdf'
        # Create ./pdf/ directory if it doesn't exist
        pdf_dir = os.path.join(NOTEBOOK_DIR, 'pdf')
        os.makedirs(pdf_dir, exist_ok=True)
        dest = os.path.join(pdf_dir, safe_name)
        try:
            # Download the PDF bytes using Python's built-in urllib
            # This runs server-side: no CORS, no browser restrictions.
            req = urllib.request.Request(url)
            req.add_header('User-Agent', 'AstroNotebook/1.0')
            with urllib.request.urlopen(req, timeout=30) as r:
                data = r.read()
            if len(data) < 1000:
                self._json(400, {'error': 'Downloaded file too small — may not be a valid PDF'}); return
            with open(dest, 'wb') as f:
                f.write(data)
            # Return the relative path that the notebook can store in the pdf field
            rel_path = './pdf/' + safe_name
            self._json(200, {'ok': True, 'path': rel_path, 'bytes': len(data)})
            print(f"  [PDF] Downloaded {len(data)//1024} KB → {dest}")
        except urllib.error.HTTPError as e:
            self._json(e.code, {'error': f'HTTP {e.code}: server rejected the request (publisher PDFs may require institutional access)'})
        except Exception as e:
            self._json(500, {'error': str(e)})

    def _proxy_arxiv(self):
        # ── /api/arxiv?id=2603.09562 — proxy to arXiv Atom/XML API ──────────
        #
        # WHY THIS IS NEEDED:
        #   The arXiv API (export.arxiv.org) does NOT send CORS headers.
        #   Browsers block direct fetch() calls to non-CORS origins.
        #   This is the same problem as ADS — we solve it the same way:
        #   Python fetches the URL server-side (no CORS restrictions),
        #   then returns the response to the browser with our own CORS headers.
        #
        # ENDPOINT:   GET /api/arxiv?id=2603.09562
        # PROXIES TO: https://export.arxiv.org/api/query?id_list=2603.09562
        # RETURNS:    Atom XML text with Access-Control-Allow-Origin: *
        qs  = urllib.parse.urlparse(self.path).query
        arxiv_id = urllib.parse.parse_qs(qs).get('id', [''])[0].strip()
        if not arxiv_id:
            self._json(400, {'error': 'No arXiv ID provided'}); return
        # Strip version suffix (v1, v2) for the query — arXiv returns all versions
        clean_id = arxiv_id.split('v')[0] if 'v' in arxiv_id else arxiv_id
        arxiv_url = 'https://export.arxiv.org/api/query?id_list=' + urllib.parse.quote(clean_id)
        try:
            req = urllib.request.Request(arxiv_url)
            req.add_header('User-Agent', 'AstroNotebook/1.0 (mailto:your@email.com)')
            # arXiv's fair-use policy asks for a User-Agent with contact info
            with urllib.request.urlopen(req, timeout=15) as r:
                data = r.read()
            # Return the XML to the browser with CORS headers
            self.send_response(200)
            self._cors()
            self.send_header('Content-Type', 'application/xml; charset=utf-8')
            self.send_header('Content-Length', str(len(data)))
            self.end_headers()
            self.wfile.write(data)
            print(f"  [arXiv] Fetched metadata for: {clean_id}")
        except urllib.error.HTTPError as e:
            self._json(e.code, {'error': f'arXiv API returned HTTP {e.code}'})
        except Exception as e:
            self._json(502, {'error': str(e)})

    def _download_lib(self):
        # ── /api/download-lib — download KaTeX files to ./lib/ ────────────
        #
        # Called once (on first use) to cache KaTeX locally so the app works
        # fully offline afterwards.  Downloads:
        #   ./lib/katex.min.js   (~280 KB)
        #   ./lib/katex.min.css  (~30 KB)
        #   ./lib/fonts/         (~900 KB — only the subset needed for science)
        #
        # After this runs, index.html loads KaTeX from ./lib/ with no internet.
        # The CDN fallback in index.html handles the case where this hasn't run yet.
        import os, json

        KATEX_VERSION = '0.16.9'
        BASE_URL = f'https://cdn.jsdelivr.net/npm/katex@{KATEX_VERSION}/dist/'

        # Files to download — katex.min.js, katex.min.css, and the essential fonts
        # (full font list: https://katex.org/docs/font.html)
        # We download all woff2 fonts which cover all standard math symbols.
        FILES = [
            'katex.min.js',
            'katex.min.css',
        ]
        # Font files needed for complete symbol coverage
        FONTS = [
            'KaTeX_AMS-Regular.woff2',
            'KaTeX_Caligraphic-Bold.woff2',
            'KaTeX_Caligraphic-Regular.woff2',
            'KaTeX_Fraktur-Bold.woff2',
            'KaTeX_Fraktur-Regular.woff2',
            'KaTeX_Main-Bold.woff2',
            'KaTeX_Main-BoldItalic.woff2',
            'KaTeX_Main-Italic.woff2',
            'KaTeX_Main-Regular.woff2',
            'KaTeX_Math-BoldItalic.woff2',
            'KaTeX_Math-Italic.woff2',
            'KaTeX_SansSerif-Bold.woff2',
            'KaTeX_SansSerif-Italic.woff2',
            'KaTeX_SansSerif-Regular.woff2',
            'KaTeX_Script-Regular.woff2',
            'KaTeX_Size1-Regular.woff2',
            'KaTeX_Size2-Regular.woff2',
            'KaTeX_Size3-Regular.woff2',
            'KaTeX_Size4-Regular.woff2',
            'KaTeX_Typewriter-Regular.woff2',
        ]

        lib_dir   = os.path.join(NOTEBOOK_DIR, 'lib')
        fonts_dir = os.path.join(lib_dir, 'fonts')
        os.makedirs(lib_dir,   exist_ok=True)
        os.makedirs(fonts_dir, exist_ok=True)

        downloaded, skipped, errors = [], [], []

        def _fetch(url, dest):
            if os.path.exists(dest):
                skipped.append(os.path.basename(dest)); return
            try:
                req = urllib.request.Request(url)
                req.add_header('User-Agent', 'AstroNotebook/1.0')
                with urllib.request.urlopen(req, timeout=30) as r:
                    data = r.read()
                with open(dest, 'wb') as f:
                    f.write(data)
                downloaded.append(os.path.basename(dest))
                print(f"  [LIB] Downloaded {os.path.basename(dest)} ({len(data)//1024} KB)")
            except Exception as e:
                errors.append(f"{os.path.basename(dest)}: {e}")
                print(f"  [LIB] Error {os.path.basename(dest)}: {e}")

        # Download JS and CSS
        for fname in FILES:
            _fetch(BASE_URL + fname, os.path.join(lib_dir, fname))

        # Download fonts
        for fname in FONTS:
            _fetch(BASE_URL + 'fonts/' + fname, os.path.join(fonts_dir, fname))

        result = {
            'ok'        : len(errors) == 0,
            'downloaded': downloaded,
            'skipped'   : skipped,
            'errors'    : errors,
            'lib_dir'   : lib_dir,
            'katex_version': KATEX_VERSION,
        }
        self._json(200 if result['ok'] else 207, result)

    def _proxy_scix(self):
        # ── /api/scix/* — proxy to SciX API (scixplorer.org) ────────────────
        #
        # SciX is the next-generation NASA ADS — extended to heliophysics,
        # planetary science, and Earth science. Same API endpoints as ADS,
        # same Bearer token. We try SciX first in sync operations because it
        # is more up-to-date and broader in coverage.
        #
        # Usage: GET /api/scix/search/query?q=...&fl=...
        #   → proxies to https://api.scixplorer.org/v1/search/query?q=...
        #
        # The path /api/scix is stripped and /v1 base is prepended.
        SCIX_BASE = "https://api.scixplorer.org/v1"
        scix_path = self.path[len('/api/scix'):]   # e.g. /search/query?q=...
        scix_url  = SCIX_BASE + scix_path
        auth  = self.headers.get('Authorization', '')
        ctype = self.headers.get('Content-Type', 'application/json')
        body  = None
        method = self.command   # 'GET' or 'POST' (actual HTTP method)
        if method == 'POST':
            n = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(n) if n else b''
        req = urllib.request.Request(scix_url, data=body, method=method)
        req.add_header('Authorization', auth)
        req.add_header('Content-Type', ctype)
        req.add_header('User-Agent', 'AstroNotebook/1.0')
        try:
            with urllib.request.urlopen(req, timeout=15) as r:
                data = r.read()
            self.send_response(r.status); self._cors()
            self.send_header('Content-Type', r.headers.get('Content-Type','application/json'))
            self.send_header('Content-Length', str(len(data)))
            self.end_headers(); self.wfile.write(data)
            print(f"  [SciX] {scix_path[:60]}")
        except urllib.error.HTTPError as e:
            data = e.read(); self.send_response(e.code); self._cors()
            self.send_header('Content-Type','application/json')
            self.send_header('Content-Length', str(len(data)))
            self.end_headers(); self.wfile.write(data)
        except Exception as e:
            err = json.dumps({'error': str(e)}).encode()
            self.send_response(502); self._cors()
            self.send_header('Content-Type','application/json')
            self.send_header('Content-Length', str(len(err)))
            self.end_headers(); self.wfile.write(err)

    def _proxy_ads(self, method):
        # ── WHAT THIS DOES:
        #    This is the most important function in serve.py.
        #    It acts as a "middleman" (reverse proxy) between the browser
        #    and the NASA ADS API, solving the CORS problem.
        #
        # ── THE CORS PROBLEM (explained simply):
        #    Browser security rules say: "a page served from localhost:8080
        #    cannot directly call api.adsabs.harvard.edu".
        #    This is a browser restriction, not an ADS restriction.
        #
        #    The solution: the browser calls OUR server (/api/ads/...).
        #    Our server (Python, running on your machine) calls ADS directly.
        #    Python has no CORS restrictions — it's not a browser.
        #    Our server sends ADS's response back to the browser.
        #    The browser thinks it's talking to localhost. Problem solved.
        #
        # ── HOW IT WORKS STEP BY STEP:
        #    1. Browser calls: GET /api/ads/search/query?q=bibcode:"2024ApJ..."
        #    2. We strip "/api/ads" from the front → "/search/query?q=..."
        #    3. Prepend ADS_BASE → "https://api.adsabs.harvard.edu/v1/search/query?q=..."
        #    4. Copy the Authorization header (your API token) from the request
        #    5. Make the same request to ADS using Python's urllib
        #    6. Copy ADS's response back to the browser

        # Build the real ADS URL by replacing /api/ads with the ADS base URL
        ads_url = ADS_BASE + self.path[len('/api/ads'):]
        # Example: self.path = "/api/ads/search/query?q=..."
        #   → self.path[len('/api/ads'):] = "/search/query?q=..."
        #   → ads_url = "https://api.adsabs.harvard.edu/v1/search/query?q=..."

        # Copy authentication and content-type headers from the browser's request
        auth  = self.headers.get('Authorization', '')
        # This is the "Bearer YOUR_TOKEN" header that authenticates with ADS.
        # The JavaScript in index.html adds this header automatically.
        ctype = self.headers.get('Content-Type', 'application/json')

        # For POST requests (e.g. BibTeX export), read the request body
        body = None
        if method == 'POST':
            n = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(n) if n else b''
            # rfile is the incoming data stream; we read exactly n bytes

        # Build the outgoing request to ADS
        req = urllib.request.Request(ads_url, data=body, method=method)
        req.add_header('Authorization', auth)
        req.add_header('Content-Type', ctype)
        req.add_header('User-Agent', 'AstroNotebook/1.0')
        # User-Agent identifies our software to ADS. Good practice.

        try:
            # Make the request to ADS and forward the response back to the browser
            with urllib.request.urlopen(req, timeout=15) as r:
                # timeout=15 means: if ADS doesn't respond in 15 seconds, give up
                data = r.read()   # read the full response body
                self.send_response(r.status)   # forward ADS's status code (200, 404, etc.)
                self._cors()                    # add CORS headers so browser accepts it
                self.send_header('Content-Type', r.headers.get('Content-Type','application/json'))
                self.send_header('Content-Length', str(len(data)))
                self.end_headers()
                self.wfile.write(data)  # send ADS's response bytes to the browser

        except urllib.error.HTTPError as e:
            # ADS returned an error (e.g. 401 Unauthorized, 429 Rate Limited)
            # We forward the error response so the browser can show a helpful message
            data = e.read(); self.send_response(e.code); self._cors()
            self.send_header('Content-Type','application/json')
            self.send_header('Content-Length', str(len(data)))
            self.end_headers(); self.wfile.write(data)

        except Exception as e:
            # Something else went wrong (network error, timeout, etc.)
            # Return a 502 Bad Gateway with the error message
            err = json.dumps({'error': str(e)}).encode()
            # .encode() converts the string to bytes, which HTTP requires
            self.send_response(502); self._cors()
            self.send_header('Content-Type','application/json')
            self.send_header('Content-Length', str(len(err)))
            self.end_headers(); self.wfile.write(err)


    def _json(self, code, obj):
        # ── WHAT THIS DOES:
        #    A helper function to send a simple JSON response.
        #    Used by _open_pdf, _open_path, etc. to return {"ok": true}
        #    or {"error": "message"} to the browser.
        #
        # ── PARAMETERS:
        #    code: HTTP status code (200 = OK, 404 = Not Found, 500 = Error)
        #    obj:  a Python dictionary that gets converted to JSON
        #
        # ── EXAMPLE:
        #    self._json(200, {'ok': True})
        #    → sends HTTP 200 with body: {"ok": true}
        data = json.dumps(obj).encode()
        # json.dumps converts {'ok': True} to the string '{"ok": true}'
        # .encode() converts the string to bytes
        self.send_response(code); self._cors()
        self.send_header('Content-Type','application/json')
        self.send_header('Content-Length', str(len(data)))
        self.end_headers(); self.wfile.write(data)


# ══════════════════════════════════════════════════════════════════════
#  MAIN — this runs when you type: python3 serve.py
#
#  if __name__ == '__main__' is a Python convention meaning:
#  "only run this code if this file is run directly, not if it's
#   imported by another Python file".
# ══════════════════════════════════════════════════════════════════════
if __name__ == '__main__':

    # Change the working directory to the notebook folder.
    # This is what makes SimpleHTTPRequestHandler serve files from
    # the right place — it serves files from the current directory.
    os.chdir(NOTEBOOK_DIR)

    # Create the HTTP server.
    # ('', PORT) means "listen on all network interfaces on this port".
    # '' is shorthand for 0.0.0.0 = "any IP address on this machine".
    # Handler is the class defined above that processes each request.
    httpd = HTTPServer(('', PORT), Handler)

    # Print the startup banner so you know it's running.
    # f"..." strings let you embed variables with {variable_name}.
    print(f"\n  ╔══════════════════════════════════════════╗")
    print(f"  ║         EUKOSMOS  SERVER                 ║")
    print(f"  ╠══════════════════════════════════════════╣")
    print(f"  ║  URL:    http://localhost:{PORT}              ║")
    print(f"  ║  Folder: {os.getcwd():<33}║")
    # :<33 means "pad with spaces to 33 characters wide" (for alignment)
    print(f"  ║  ADS proxy:  /api/ads/*                  ║")
    print(f"  ║  PDF open:   /api/open-pdf?path=...      ║")
    print(f"  ║  PDF serve:  /api/serve-pdf?path=...     ║")
    print(f"  ║  Close this window to stop.              ║")
    print(f"  ╚══════════════════════════════════════════╝\n")

    try:
        httpd.serve_forever()
        # serve_forever() starts an infinite loop that waits for browser
        # requests and handles them one by one. It runs until you stop it.
    except KeyboardInterrupt:
        # KeyboardInterrupt is raised when you press Ctrl+C
        print("\n  Server stopped.")
