# 🔭 Eukosmos — A Researcher's Notebook

> A self-contained, browser-based research notebook for astronomers.  
> Everything runs locally on your machine — no cloud, no account, no installation beyond Python 3.

---

## What is this?

Eukosmos is a single-page web application (`index.html`) that acts as a personal research hub. It keeps your literature notes, ideas, proposals, job applications, code, conference notes, tasks, and more — all in one place, searchable, tagged, and stored as plain JSON files on your own computer.

It is designed to be shared within a research group: everyone runs their own local copy, and data can be exported/imported between members as JSON files.

---

## Sections at a glance

| Section | What you store there |
|---------|---------------------|
| **Research Notes** | Free-form notes (Markdown + LaTeX, image paste) |
| **Literature Papers** | Papers you have read, with NASA ADS auto-fill |
| **My Papers** | Your own publications and drafts |
| **Research Ideas** | Hypotheses with kanban stages and feasibility ratings |
| **Proposals** | Observational and funding proposals with deadline tracking |
| **Job Register** | Job applications, referee tracking, status pipeline |
| **Conference Notes** | Talk notes from conferences and seminars |
| **Code Snippets** | Reusable one-liners and short scripts |
| **Code Library** | Register full scripts/packages with paths and dependencies |
| **TODO List** | Tasks with priority, status, and due dates |
| **Contacts** | Collaborator contact list |
| **Useful Links** | Bookmarks for archives, tools, and journals (16 pre-seeded) |
| **Photo Gallery** | Conference photos, fieldwork, milestones |
| **My CV** | Link your CV PDF for quick access |

---

## Quick start

### Requirements

- **Python 3** (any version ≥ 3.6) — pre-installed on macOS and most Linux systems
- **Google Chrome**, doesn't work on Safari and Firefox due to a local file write permission issue.
- No other packages or installations needed

### Running the notebook

```bash
# 1. Clone or download this repository, and make sure it has read/write access (chmod -R 777 eukosmos). You can place the directory in [Dropbox](https://www.dropbox.com/referrals/AAAZAqQ3u_3TrKQd4h7IGmkW1P-o6tEifJs?src=global9) for data backup and use this notebook over multiple machines.

git clone https://github.com/rmajidul/eukosmos.git
cd eukosmos

# 2. Start the local server
python3 serve.py

# 3. Open Chrome and go to:
 http://localhost:8080
```

Your data is saved automatically as `data_*.json` files in the same folder.

> **Why not just open index.html directly?**  
> Chrome blocks folder read/write access for `file://` pages. The server also proxies NASA ADS API calls, which browsers block due to CORS restrictions.

### Changing the port

```bash
python3 serve.py 9090
# Then open:
http://localhost:9090
```

---

## Files in this repository

```
eukosmos/
├── index.html      ← The entire application (~190 KB, one file)
├── serve.py        ← Local web server + NASA ADS API proxy
├── data.js         ← Optional: pre-seed starter data (for GitHub Pages)
├── data_*.json     ← Your saved data (created automatically, git-ignored)
├── pdf/            ← Downloaded PDFs (created automatically, git-ignored)
└── lib/            ← Offline KaTeX assets (downloaded on first run)
```

> `data_*.json` files and the `pdf/` folder are personal and created when you use the notebook.
---

## Key features

**NASA ADS / arXiv / SciX auto-fill**  
Paste any ADS URL, bibcode, or arXiv link into Literature Papers or My Papers and click ⚡ Auto-fill. Title, authors, abstract, journal, and BibTeX are fetched automatically. Requires a free [NASA ADS API token](https://ui.adsabs.harvard.edu/user/settings/token) (enter it once — saved automatically).

**Markdown + LaTeX rendering**  
Note and summary fields support full Markdown and LaTeX equations (`$E=mc^2$`, `$$\int_0^\infty$$`). Rendered via KaTeX, which works offline after the first run.

**Research Ideas with kanban**  
Track ideas through stages (Backlog → Active → Parked → Done) with feasibility ratings and links to related papers in your library.

**Proposal and job tracking**  
Dedicated sections for observational/funding proposals and job applications, each with status pipelines, deadlines, and document attachments.

**Global search**  
Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) to search across all sections instantly.

**Pinboard**  
Pin any entry from any section to a visual dashboard on the Home screen.

**Import / Export**  
Every section has Export (JSON) and Import buttons. Share a reading list or snippet collection with a colleague and they can import it into their own notebook.

**PDF management**  
Link local PDF paths or URLs to papers. The ⬇ Download & Save PDF button fetches and saves PDFs to `./pdf/` automatically.

**Master BibTeX export**  
Export a combined `.bib` file from all your Literature Papers and My Papers in one click from the sidebar.

**Dark and light theme**, compact view, fullscreen mode, and a live deadline ticker on the dashboard.

---

## Setting up your ADS API token

1. Go to [https://ui.adsabs.harvard.edu/user/settings/token](https://ui.adsabs.harvard.edu/user/settings/token) and log in
2. Copy your personal API token
3. Open **Literature Papers** → **＋ Add Paper**
4. Paste your token into the token field — it saves automatically and applies to My Papers too

---

## Sharing data within the group

Eukosmos has no database or sync server. The recommended workflow:

- **Export** a section as JSON (e.g. a curated reading list or shared link collection)
- Share the file via email, Slack, or a shared drive
- Teammates **Import** the JSON into their own notebook

For read-only shared reference data (e.g. a group link list), pre-populate `data.js` and commit it to the repository. Everyone who clones and opens the notebook for the first time will have those entries seeded automatically.

<!--
---

 ## GitHub Pages deployment (optional)

For a read-only, shareable version hosted online:

1. Enable GitHub Pages on the repository (Settings → Pages → `main` branch, root folder)
2. Edit `data.js` to include the entries you want pre-populated
3. Push to `main` — the notebook will be available at `https://YOUR-ORG.github.io/eukosmos/` 

Note: GitHub Pages does not support local file saving or the ADS proxy. It is useful for sharing a static, pre-populated reference notebook. 

---

-->

## Customisation

All colours, fonts, and panel widths are CSS variables in the `:root { }` block near the top of `index.html` (around line 50). Comments explain each variable.

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
| Page looks wrong / old version | Hard-refresh: `Cmd+Shift+R` / `Ctrl+Shift+R` | delete browsing history and cache for last 24 hrs or 7 days
| Port 8080 already in use, `lsof -ti tcp:8080 | xargs kill` or | `python3 serve.py 9090`, then open `http://localhost:9090` |
| ADS auto-fill not working | Check your token is entered in the Lit. Papers form |
| Equations not rendering | Needs internet on first run to download KaTeX; offline after that |
| Data not saving | Open via `http://localhost:8080`, not `file://` |

---

## See also

📖 **[TUTORIAL.md](TUTORIAL.md)** — step-by-step walkthrough for new users covering every section in detail.

---

*Built by [Dr. Majidul Rahaman](https://astr.site.nthu.edu.tw/p/406-1336-223724,r2561.php?Lang=en), Institute of Astronomy, NTHU, Taiwan. MIT License.*
