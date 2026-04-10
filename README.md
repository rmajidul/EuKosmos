# 🔭 Eukosmos — A Researcher's Notebook

> A self-contained, browser-based research notebook for astronomers and researchers.  
> Everything runs locally on your machine — no cloud, no account, no subscription, no installation beyond Python 3.

---

## Motivation

Research workflows are fragmented. Literature lives in Zotero, notes scatter across Google Docs, ideas disappear into paper notebooks, proposals have their own folders, and job applications their own spreadsheets — none of which talk to each other.

Eukosmos was built to fix this. One portable folder, one file, everything in one place — literature, notes, ideas, proposals, job tracking, code, contacts, and photos — all searchable, all yours, entirely offline.

Click [here](https://rmajidul.github.io/EuKosmos/) for a live preview.

---

## Sections at a glance

| Section | What you store there |
|---------|---------------------|
| **Literature Papers** | Papers you have read, with NASA ADS / arXiv / InspireHEP auto-fill and BibTeX import |
| **My Papers** | Your own publications and drafts |
| **Research Notes** | Free-form notes (Markdown + LaTeX, image paste) |
| **Research Ideas** | Hypotheses with kanban stages and feasibility ratings |
| **Proposals** | Observational and funding proposals with deadline tracking |
| **Job Register** | Job applications, referee tracking, status pipeline |
| **Conference Notes** | Talk notes from conferences and seminars |
| **Code Snippets** | Reusable one-liners and short scripts |
| **Code Library** | Full scripts/packages with paths and dependencies |
| **TODO List** | Tasks with priority, status, and due dates |
| **Contacts** | Collaborator contact list |
| **Useful Links** | Bookmarks for archives, tools, and journals |
| **Photo Gallery** | Conference photos, fieldwork, milestones |
| **Calendar** | Unified deadline and event view across all sections, with iCalendar export |

---

## Quick Start

### Requirements

- **Python 3.6+** — pre-installed on macOS and most Linux systems
- **Google Chrome** — required for local file read/write. Safari and Firefox block the necessary file permissions.
- **iCalendar** Python package — required for iCalendar (`.ics`) export

---

### Step 1 — Clone the repository

```bash
git clone https://github.com/rmajidul/eukosmos.git
cd eukosmos
```

---

### Step 2 — Grant write permissions

The notebook writes data files, downloads PDFs, and caches assets inside its own folder. Give it full read/write access before doing anything else:

```bash
chmod -R 777 .
```

> **Why?** Without this, the server cannot create `data_*.json` files, save PDFs to `./pdf/`, or cache KaTeX assets to `./lib/`. You will see silent save failures if you skip this step.

---

### Step 3 — Create a virtual environment

Using a virtual environment keeps the notebook's Python dependencies isolated from your system Python. Name it `vnotebook` so it is easy to identify:

```bash
python3 -m venv vnotebook
source vnotebook/bin/activate      # macOS / Linux
# vnotebook\Scripts\activate       # Windows
```

Your prompt will change to show `(vnotebook)` when the environment is active.

---

### Step 4 — Install dependencies

With the virtual environment active, install the required package:

```bash
pip install icalendar python-dateutil
```

The `icalendar` library enables the Calendar section to export deadlines and events as standard `.ics` files that import directly into Apple Calendar, Google Calendar, Outlook, and any other iCalendar-compatible app.

> No other packages are needed. All other functionality runs in the browser.

---

### Step 5 — Start the notebook

```bash
python3 serve.py
```

Then open Chrome and go to:

```
http://localhost:8080
```

Your data is saved automatically as `data_*.json` files in the same folder every time you add or edit an entry.

---

### Stopping the notebook

Press `Ctrl+C` in the terminal to stop the server. To deactivate the virtual environment afterwards:

```bash
deactivate
```

---

### Changing the port

```bash
python3 serve.py 9090
# Then open: http://localhost:9090
```

---

## Every-time startup (after initial setup)

```bash
cd eukosmos
chmod -R 777 .                     # only needed if permissions reset (e.g. after git pull)
source vnotebook/bin/activate
python3 serve.py
```

Open `http://localhost:8080` in Chrome.

---

## Multi-Device Sync

Eukosmos is designed to be location-agnostic. By placing your workspace inside a synced folder, your research follows you between machines without manual exports.

Any sync service works — **Dropbox**, **Google Drive**, **iCloud Drive**, **OneDrive**, **Syncthing**, or even **Git**. All data is plain JSON, so any tool that syncs files will work.

### Setup

**1. Move the folder into your sync service:**

```bash
# Example with Dropbox
mv ~/eukosmos ~/Dropbox/eukosmos

# Example with Google Drive (macOS)
mv ~/eukosmos ~/Library/CloudStorage/GoogleDrive-you@gmail.com/My\ Drive/eukosmos
```

**2. Grant permissions again after moving:**

```bash
cd ~/Dropbox/eukosmos        # or wherever you moved it
chmod -R 777 .
```

**3. Create the virtual environment inside the folder:**

```bash
python3 -m venv vnotebook
source vnotebook/bin/activate
pip install icalendar python-dateutil
```

**4. Start the server and connect:**

```bash
python3 serve.py
```

Open Chrome → `http://localhost:8080` → click **📂 Connect Folder** in the sidebar → select the eukosmos folder. The app will now read and write JSON files directly to that folder, which your sync service will pick up automatically.

---

### Accessing from a second computer

**1.** Install your sync service on the second machine and wait for it to finish syncing.

**2.** Open a terminal, navigate to the synced folder, and run:

```bash
cd ~/Dropbox/eukosmos          # adjust path for your service
chmod -R 777 .
source vnotebook/bin/activate  # or recreate venv if not synced: python3 -m venv vnotebook && source vnotebook/bin/activate && pip install icalendar python-dateutil
python3 serve.py
```

**3.** Open `http://localhost:8080` in Chrome → click **📂 Connect Folder** → select the same folder.

All your papers, notes, and data load immediately from the synced JSON files.

> **Tip:** Add `vnotebook/` to your sync service's ignore list (`.dropboxignore`, `.gitignore`, etc.) to avoid syncing the virtual environment itself — it's large and machine-specific. Recreate it with `python3 -m venv vnotebook && source vnotebook/bin/activate && pip install icalendar python-dateutil` on each machine.

---

### How syncing works

Every time you add or edit an entry, the app writes the corresponding `data_*.json` file to disk. Your sync service detects the change and propagates it to all connected devices. When you open the notebook on another machine, the files are already up to date — no manual export or import needed.

> **Avoid editing on two machines simultaneously.** Since JSON files are overwritten wholesale (not merged line by line), simultaneous edits from two machines can cause one set of changes to overwrite the other. Edit on one machine at a time, or use a sync service with conflict detection (Dropbox and iCloud both flag conflicts automatically).

---

## Key Features

### NASA ADS / SciX / arXiv / InspireHEP auto-fill

Paste any ADS URL, bibcode, arXiv ID, or InspireHEP link into Literature Papers or My Papers and click **⚡ Auto-fill**. Title, authors, abstract, journal, and BibTeX are fetched automatically.

Requires a free [NASA ADS API token](https://ui.adsabs.harvard.edu/user/settings/token) — enter it once, saved automatically.

### BibTeX bulk import

Import an entire `.bib` file at once using the **↑ BibTeX** button in Literature Papers. The importer:

- Parses all entry types (`@article`, `@inproceedings`, `@misc`, etc.)
- Detects and skips duplicates (by arXiv ID, ADS URL, or title)
- Optionally fetches abstracts in the background via ADS or InspireHEP (one paper every 10 seconds to respect rate limits)
- Shows a live progress banner with pause, resume, and cancel controls

For papers already indexed in ADS (with a bibcode URL but no arXiv ID), the smart sync uses a fallback chain: arXiv ID → ADS bibcode → DOI → InspireHEP key — so abstract fetch works even for journal-only papers.

### iCalendar export

The **Calendar** section shows a unified deadline view across all sections (proposals, conferences, todos, job applications, etc.). Deadlines can be exported as standard `.ics` files and imported into Apple Calendar, Google Calendar, or Outlook. Requires the `ics` Python package installed in your virtual environment.

### Markdown + LaTeX rendering

Note and summary fields support full Markdown and LaTeX equations (`$E=mc^2$`, `$$\int_0^\infty$$`). Rendered via KaTeX, which works offline after the first run.

### Master BibTeX export

One click exports a combined `master_library.bib` from all your Literature Papers and My Papers, with correct cite keys:

- ADS/SciX papers → `FirstAuthor_Bibcode` format
- InspireHEP papers → InspireHEP texkey format
- Papers without stored BibTeX → auto-generated minimal entry

### Global search

Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) to search across all sections instantly.

### Research Ideas kanban

Track ideas through stages (Backlog → Active → Parked → Done) with feasibility ratings and links to related papers.

### PDF management

Link local PDF paths or URLs to papers. The **⬇ Download & Save PDF** button fetches and saves PDFs to `./pdf/` automatically.

### Import / Export

Every section has **↓ Export** (JSON) and **↑ Import** buttons. Share a reading list, snippet collection, or link library with colleagues — they import the JSON into their own notebook.

### Pinboard

Pin any entry from any section to a visual dashboard on the Home screen.

### Themes and views

Dark and light theme, compact view, fullscreen mode, and a live deadline ticker on the dashboard.

---

## Setting up your ADS API token

1. Go to [https://ui.adsabs.harvard.edu/user/settings/token](https://ui.adsabs.harvard.edu/user/settings/token) and log in
2. Copy your personal API token
3. Open **Literature Papers** → **＋ Add Paper**
4. Paste your token into the token field — it saves automatically and applies to all sections

---

## Files in this repository

```
eukosmos/
├── index.html        ← The entire application (one file, ~500 KB)
├── serve.py          ← Local web server + NASA ADS / InspireHEP API proxy
├── data.js           ← Optional: pre-seed starter data (for GitHub Pages)
├── data_*.json       ← Your saved data (created automatically, git-ignored)
├── pdf/              ← Downloaded PDFs (created automatically, git-ignored)
├── lib/              ← Offline KaTeX assets (downloaded on first run)
└── vnotebook/        ← Python virtual environment (create locally, not synced)
```

> `data_*.json` files and the `pdf/` folder are personal and created when you use the notebook. They are git-ignored by default.

---

## Sharing data within a group

Eukosmos has no database or sync server. The recommended workflow for group sharing:

- **Export** a section as JSON (e.g. a curated reading list or shared link collection)
- Share the file via email, Slack, or a shared drive
- Teammates **Import** the JSON into their own notebook

For read-only shared reference data (e.g. a group link list), pre-populate `data.js` and commit it to the repository. Everyone who clones the notebook will have those entries seeded on first run.

---

## Customisation

All colours, fonts, and panel widths are CSS variables in the `:root {}` block near the top of `index.html` (around line 50):

```css
:root {
  --fs-body: 32px;      /* main text size */
  --sidebar: 220px;     /* sidebar width */
  --glow: #33d9ff;      /* primary accent colour (cyan) */
  --bg: #050a12;        /* page background */
}
```

After editing, hard-refresh Chrome: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows).

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Page looks wrong / old version | Hard-refresh: `Cmd+Shift+R` / `Ctrl+Shift+R`, or clear browsing history for the last 7 days |
| Data not saving | Open via `http://localhost:8080`, not `file://`. Run `chmod -R 777 .` in the eukosmos folder. |
| Port 8080 already in use | `lsof -ti tcp:8080 \| xargs kill` or run `python3 serve.py 9090` and open `http://localhost:9090` |
| ADS auto-fill not working | Check your token is entered in the Literature Papers form |
| BibTeX sync fails with "not found" | The paper may be journal-only (no arXiv ID). Use **Sync to [ADS]** from the detail panel — it will try the ADS bibcode automatically. |
| Calendar `.ics` export fails | Make sure `ics` is installed: `pip install icalendar python-dateutil` with your virtual environment active |
| Equations not rendering | Needs internet on first run to download KaTeX; works offline after that |
| `ics` module not found | Activate your virtual environment first: `source vnotebook/bin/activate` |
| Permission denied errors | Run `chmod -R 777 .` in the eukosmos folder |

---

## Why not just open index.html directly?

Chrome blocks folder read/write access for `file://` pages. The local server (`serve.py`) both serves the file over `http://` and proxies NASA ADS and InspireHEP API calls, which browsers block directly due to CORS restrictions. Always use `http://localhost:8080`.

---

## See also

📖 **[TUTORIAL.md](TUTORIAL.md)** — step-by-step walkthrough for new users covering every section in detail.

---

*Built by [Dr. Majidul Rahaman](https://astr.site.nthu.edu.tw/p/406-1336-223724,r2561.php?Lang=en), Institute of Astronomy, NTHU, Taiwan. MIT License.*
