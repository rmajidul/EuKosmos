# 📖 Eukosmos Tutorial

A step-by-step walkthrough for new users. Read this once and you will know everything the notebook can do.

---

## Table of Contents

1. [Installation & First Run](#1-installation--first-run)
2. [Dashboard](#2-dashboard)
3. [Global Search & Keyboard Shortcuts](#3-global-search--keyboard-shortcuts)
4. [Literature Papers](#4-literature-papers)
5. [My Papers](#5-my-papers)
6. [Research Notes](#6-research-notes)
7. [Research Ideas](#7-research-ideas)
8. [Proposals](#8-proposals)
9. [Job Register](#9-job-register)
10. [Conference Notes](#10-conference-notes)
11. [Code Snippets](#11-code-snippets)
12. [Code Library](#12-code-library)
13. [TODO List](#13-todo-list)
14. [Contacts](#14-contacts)
15. [Useful Links](#15-useful-links)
16. [Photo Gallery](#16-photo-gallery)
17. [My CV](#17-my-cv)
18. [Calendar](#18-calendar)
19. [Import & Export](#19-import--export)
20. [Multi-Device Sync](#20-multi-device-sync)
21. [Customisation](#21-customisation)
22. [Troubleshooting](#22-troubleshooting)

---

## 1. Installation & First Run

### 1.1 Requirements

- **Python 3.6 or later** — already installed on macOS and most Linux systems. Check with:
  ```bash
  python3 --version
  ```
- **Google Chrome** — required. Safari and Firefox block the local file read/write permissions that the notebook needs.

---

### 1.2 Clone the repository

```bash
git clone https://github.com/rmajidul/eukosmos.git
cd eukosmos
```

---

### 1.3 Grant write permissions

The notebook writes your data files, downloads PDFs, and caches assets inside its own folder. Run this once before anything else:

```bash
chmod -R 777 .
```

> **Why?** Without write permissions, the server cannot create `data_*.json` files or save PDFs. You will see silent failures when trying to add entries. If you pull an update from git later, run this again.

---

### 1.4 Create a virtual environment

Create the virtual environment **outside** the notebook folder so it is not accidentally deleted when you update the notebook, and not synced to your cloud drive alongside your data.

Choose any location you prefer. Some good options:

```bash
# Option A — in your home directory (recommended)
python3 -m venv ~/vnotebook

# Option B — in a central envs folder
mkdir -p ~/.venvs
python3 -m venv ~/.venvs/vnotebook

# Option C — anywhere you like
python3 -m venv /path/to/your/choice/vnotebook
```

> The name `vnotebook` is just a suggestion — call it whatever you like. The location is what matters: keep it outside the `eukosmos/` folder.

---

### 1.5 Activate the virtual environment

```bash
# macOS / Linux
source ~/vnotebook/bin/activate

# Windows (Command Prompt)
%USERPROFILE%\vnotebook\Scripts\activate.bat

# Windows (PowerShell)
~\vnotebook\Scripts\Activate.ps1
```

Your prompt will change to show `(vnotebook)` when the environment is active. You must activate it every time you open a new terminal before running `serve.py`.

---

### 1.6 Install dependencies

With the virtual environment active:

```bash
pip install icalendar python-dateutil
```

- **`icalendar`** — enables the Calendar section to sync public iCal feeds (Google Calendar, Apple Calendar, etc.) and export events as `.ics` files.
- **`python-dateutil`** — handles recurring event rules (daily, weekly, monthly) in synced calendars.

> These packages are **optional** — if you skip this step, all notebook features except external iCal sync will still work normally. The server detects their absence and disables only the iCal-dependent features gracefully.

---

### 1.7 Start the notebook

Make sure you are inside the `eukosmos` folder and your virtual environment is active:

```bash
cd eukosmos
source ~/vnotebook/bin/activate   # adjust path if you used a different location
python3 serve.py
```

Open **Google Chrome** and go to:

```
http://localhost:8080
```

You should see the Eukosmos dashboard. The terminal will show a log of requests — this is normal.

---

### 1.8 Connect your data folder (important)

On first run, click the **📂 Connect Folder** button in the left sidebar and select the `eukosmos` folder (the one containing `index.html` and `serve.py`). This tells the app where to read and write your JSON data files.

> Without connecting a folder, the app runs in localStorage-only mode. Your data is saved in the browser but **not** written to disk as JSON files. Connect the folder to enable full persistence and multi-device sync.

---

### 1.9 Every-time startup

Once set up, your daily startup sequence is:

```bash
cd eukosmos
source ~/vnotebook/bin/activate     # activate the virtual environment
python3 serve.py                    # start the server
```

Then open `http://localhost:8080` in Chrome.

To stop the server: press `Ctrl+C` in the terminal.
To deactivate the virtual environment: type `deactivate`.

---

### 1.10 Changing the port

If port 8080 is already in use by another application:

```bash
python3 serve.py 9090
```

Then open `http://localhost:9090` in Chrome.

---

## 2. Dashboard

The **Dashboard** (`00 // Dashboard`) is the home screen. It shows:

- **Deadline ticker** — a scrolling strip across the top listing upcoming deadlines from all sections (proposals, todos, conferences, job applications). Deadlines within 7 days are highlighted in amber; overdue items appear in red.
- **Pinboard** — a visual grid of entries you have pinned from any section. Click **📌 Pin Entry** to search across all sections and pin something. Hover a pinned card and click **✕** to unpin.
- **Calendar widget** — a mini calendar showing today and upcoming events. Click any date to see what is due.
- **Quick stats** — counts of entries in each section.

### Pinning entries

1. Click **📌 Pin Entry** (top right of the Dashboard)
2. Start typing to search across all sections
3. Click any result to pin it
4. Pinned entries appear as cards on the Dashboard with their key details

---

## 3. Global Search & Keyboard Shortcuts

### Global search

Press **`Cmd+K`** (Mac) or **`Ctrl+K`** (Windows/Linux) from anywhere in the app to open the global search bar. It searches across all sections — titles, authors, tags, notes, abstracts, and more. Results are grouped by section. Click any result to jump directly to that entry's detail view.

You can also press **`/`** when the page body is focused (no text field active) to open search.

### Within-section search

Each section has its own search bar at the top of the list. It filters entries in real time as you type.

### Keyboard shortcuts summary

| Shortcut | Action |
|----------|--------|
| `Cmd+K` / `Ctrl+K` | Open global search |
| `/` | Open global search (when no input is focused) |
| `Escape` | Close any open modal or detail panel |
| `Cmd+Shift+R` / `Ctrl+Shift+R` | Hard-refresh Chrome (clears cache) |

---

## 4. Literature Papers

The most feature-rich section. Use it to track papers you have read or want to read.

### 4.1 Adding a paper via Auto-fill (recommended)

The fastest way to add a paper is Auto-fill — it fetches all metadata in one click.

1. Click **＋ Add Paper** to expand the form
2. In the **ADS / SciX / arXiv / InspireHEP URL** bar at the top, paste any of:
   - An ADS URL: `https://ui.adsabs.harvard.edu/abs/2024ApJ...961..173H`
   - A SciX URL: `https://www.scixplorer.org/abs/2024ApJ...961..173H`
   - An arXiv ID: `2312.01234` or `https://arxiv.org/abs/2312.01234`
   - An ADS bibcode: `2024ApJ...961..173H`
   - An InspireHEP URL or record ID
3. Click **⚡ Auto-fill**
4. Title, authors, journal, abstract, BibTeX, and links are filled automatically
5. Add your own tags, rating, and notes, then click **Save Paper**

> **ADS API token required** for ADS/SciX auto-fill. Paste your token into the token field — it is saved automatically and never needs to be entered again. Get a free token at [https://ui.adsabs.harvard.edu/user/settings/token](https://ui.adsabs.harvard.edu/user/settings/token). InspireHEP auto-fill is free and needs no token.

### 4.2 Adding a paper manually

1. Click **＋ Add Paper**
2. Fill in the fields directly (Title, Authors, Journal, Abstract, BibTeX, etc.)
3. Click **Save Paper**

### 4.3 Importing papers from a .bib file

If you have an existing BibTeX library (e.g. from Zotero, Mendeley, or ADS), you can import it all at once:

1. Click **↑ BibTeX** in the section action bar
2. Click **Select .bib file** and choose your `.bib` file
3. The parser shows a summary: how many entries were found, how many are new, and how many are duplicates (already in your library — they will be skipped)
4. Choose an **Abstract fetch option**:
   - **Fetch from ADS / SciX** — fetches abstracts, full metadata, and BibTeX for each paper via the ADS API (requires your token). Rate-limited to 1 paper every 10 seconds.
   - **Fetch from InspireHEP** — free, no token needed. Best for HEP and theory papers.
   - **Import metadata only** — imports what is in the .bib file immediately. Papers are marked as source `bibtex`. You can sync them individually later using the ⚡ button on each card.
5. Click **Import →**

The importer runs in the background while you continue using the notebook. A **progress banner** appears above the paper list showing the live count, a progress bar, and pause/resume/cancel controls.

> **Duplicate detection** checks three things: arXiv ID, ADS URL, and title (case-insensitive). If any match an existing paper, the entry is skipped.

### 4.4 Syncing an existing paper to fetch its abstract

Papers imported from a .bib file (or added manually) may be missing their abstract. Open the paper's **detail panel** by clicking its card, and use the sync banner:

- **Sync to [ADS]** — queries ADS. Works for papers with an arXiv ID, ADS bibcode URL, or DOI.
- **Sync to [SciX]** — same as ADS but via the SciX API.
- **Sync to [InspireHEP]** — queries InspireHEP. Works for papers with an arXiv ID, DOI, or InspireHEP texkey.

The smart sync uses a fallback chain: `arXiv ID → ADS bibcode → DOI → InspireHEP key`. This means even journal-only papers (no arXiv preprint) can have their abstract fetched, as long as the `.bib` entry contains an `adsurl` or `doi`.

You can also use the **⚡ Fetch abstract** button on the paper card (card view only) — it opens a small popover with ADS/SciX and InspireHEP options.

### 4.5 Reading workflow

Each paper card shows a **read status badge** that cycles through three states when clicked:

- `○ Unread` — not yet read
- `◑ Reading` — currently reading
- `✓ Done` — finished

Click the badge directly on the card to cycle through states without opening the detail panel.

### 4.6 Card vs List view

Use the **☰ List View / ▦ Card View** toggle to switch between a compact list (one line per paper with author, year, and title) and full cards with abstract previews and links.

### 4.7 Rating papers

Use the **Rating** field when adding or editing a paper:

- `★ Interesting` — worth knowing about
- `★★ Very relevant` — directly related to your work
- `★★★ Essential` — core reference

### 4.8 Tags

Enter comma-separated tags in the **Tags** field. Tags are autocompleted from your existing tags as you type. Use the section search bar to filter by tag.

### 4.9 BibTeX view

Click **{ } BibTeX** on any card or in the detail panel to expand the stored BibTeX entry. Click **⎘ Copy BibTeX** to copy it to the clipboard.

### 4.10 Master BibTeX export

Click **{ } .bib** in the top sidebar (under the section list) to download `master_library.bib` — a combined BibTeX file of all Literature Papers and My Papers with correct cite keys:

- ADS/SciX papers → `FirstAuthor_Bibcode` format (e.g. `Smith_2024ApJ_961_173H`)
- InspireHEP papers → InspireHEP texkey format (e.g. `Rahaman:2022xkj`)
- Papers without stored BibTeX → auto-generated minimal entry using available fields

### 4.11 PDF management

- **PDF File Path or URL** field: enter a local path like `./pdf/smith2024.pdf` or a direct URL
- **⬇ Download & Save PDF**: click to fetch the PDF from the arXiv URL and save it to `./pdf/` automatically. The path is filled in for you.
- Click **📄 PDF** on a card to open the linked PDF

---

## 5. My Papers

Track your own publications, preprints, and works in progress.

### Adding your paper

1. Click **＋ Add My Paper**
2. Use **⚡ Auto-fill** to pull metadata from ADS/arXiv/InspireHEP, or fill fields manually
3. Set the **Status**: `In preparation`, `Submitted`, or `Published`
4. Add citation count, co-authors, links, and notes
5. Click **Save My Paper**

### Sync to ADS / InspireHEP

Once your paper is on arXiv or published, click its card to open the detail panel. The sync banner offers:

- **Sync to [ADS]** — updates metadata and BibTeX from ADS
- **Sync to [SciX]** — same via SciX
- **Sync to [InspireHEP]** — fetches InspireHEP record with texkey

This is useful when a preprint gets published and the journal metadata becomes available.

---

## 6. Research Notes

Free-form notes with full Markdown and LaTeX support. Use this section for meeting notes, reading summaries, observation logs, and anything else that does not fit a structured form.

### Writing a note

1. Click **＋ Add Note**
2. Enter a **Title**
3. Write in the **Content** area — full Markdown is supported:
   - `**bold**`, `*italic*`, `# Heading`, `- list`, `[link](url)`
   - Inline LaTeX: `$E = mc^2$`
   - Display LaTeX: `$$\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$$`
4. Use the **toolbar** above the text area for quick formatting (bold, italic, headers, LaTeX blocks, checkboxes, links)
5. Add **Tags** and an optional **Reference link**
6. Click **Save Note**

### Markdown toolbar

The toolbar buttons insert formatted text at the cursor position:

| Button | Inserts |
|--------|---------|
| **B** | `**bold**` |
| *I* | `*italic*` |
| ~~S~~ | `~~strikethrough~~` |
| # H | `## Heading` |
| $$ | `$$equation$$` block |
| [ ] | `- [ ] checkbox` |
| 🔗 | `[text](url)` |

### Rendered preview

Click the card to open the detail panel, which shows the note rendered — Markdown formatted and LaTeX equations displayed via KaTeX.

> **KaTeX needs internet on first run** to download its fonts and CSS to `./lib/`. After that it works completely offline.

### Printing notes

Click **🖨 Print** in the section action bar to open a print dialog. You can filter by date range and tag before printing. The output is a clean, paginated document suitable for PDF export via the browser's print-to-PDF function.

---

## 7. Research Ideas

Track hypotheses, experiments, and speculative concepts through a kanban workflow.

### Adding an idea

1. Click **＋ Add Idea**
2. Fill in **Title** and **Description**
3. Set **Feasibility**: Low / Medium / High
4. Set **Stage**: Backlog / Active / Parked / Done
5. Optionally link to related papers in your library using the **Links** field
6. Click **Save Idea**

### Kanban stages

Move ideas between stages by editing them (click ✎ on the card):

- **Backlog** — speculative, not yet started
- **Active** — currently exploring
- **Parked** — paused for now, revisit later
- **Done** — explored, concluded, or published

### Linking to papers

In the **Links** field, you can reference specific papers in your Literature Papers section. This creates a connection between your hypothesis and the evidence supporting it.

---

## 8. Proposals

Track observational and funding proposals with status pipelines and deadline tracking.

### Adding a proposal

1. Click **＋ Add Proposal**
2. Fill in **Title**, **Facility / Agency**, and **Description**
3. Set the **Status**:
   - `Drafting` → `Submitted` → `Accepted` / `Rejected`
4. Add a **Deadline** date — it will appear in the Dashboard ticker and Calendar
5. Add collaborators, telescope/instrument details, and links to the draft document
6. Click **Save Proposal**

### Deadline tracking

Proposal deadlines appear:
- In the **Dashboard ticker** (scrolling strip at the top)
- In the **Calendar** section
- Highlighted in amber (within 7 days) or red (overdue)

---

## 9. Job Register

Track job applications, fellowships, and postdoc positions.

### Adding an application

1. Click **＋ Add Job**
2. Fill in **Position**, **Institution**, and **Location**
3. Set **Status**: `Watching` → `Applied` → `Shortlisted` → `Interview` → `Offer` / `Rejected`
4. Add the **Deadline**, referee names, required documents, and a link to the advertisement
5. Click **Save Job**

### Application pipeline

The status field creates a visual pipeline. Entries move from left to right as your application progresses. Use the search bar to filter by status or institution.

---

## 10. Conference Notes

Store notes from talks, workshops, and seminars — organised by event.

### Adding conference notes

1. Click **＋ Add Conference Note**
2. Fill in **Talk Title**, **Speaker**, and **Conference / Event** name
3. Set the **Date**
4. Write your notes in the **Content** field (Markdown + LaTeX supported)
5. Add a link to the slides or recording if available
6. Click **Save**

### Printing conference notes

Click **🖨 Print** to generate a printable version of your conference notes, filterable by conference name and date range.

---

## 11. Code Snippets

Store short, reusable code pieces — one-liners, useful commands, quick scripts.

### Adding a snippet

1. Click **＋ Add Snippet**
2. Enter a **Title** and select the **Language** (Python, Bash, Julia, IDL, etc.)
3. Paste your code in the **Code** field — it is displayed in a monospace block with a copy button
4. Add **Tags** for easy retrieval
5. Click **Save Snippet**

The **⎘ Copy** button on each snippet card copies the code to your clipboard instantly.

---

## 12. Code Library

Register full scripts, packages, and pipelines — not just snippets. Use this when you have a script file on disk that you use regularly.

### Adding a library entry

1. Click **＋ Add Code**
2. Enter **Name**, **Language**, and a brief **Description**
3. Add the **File path** (e.g. `~/scripts/reduce_xray.py`) or repository URL
4. List **Dependencies** (e.g. `astropy, numpy, scipy`)
5. Add **Usage notes** — how to call it, what arguments it takes
6. Click **Save**

---

## 13. TODO List

A task list with priorities, deadlines, and status tracking.

### Adding a task

1. Click **＋ Add Todo**
2. Enter the **Task** description
3. Set **Priority**: Low / Medium / High / Urgent
4. Set **Status**: To Do / In Progress / Done
5. Add a **Due date** — it appears in the Dashboard ticker and Calendar
6. Add **Tags** and **Notes**
7. Click **Save Todo**

### Completing tasks

Click the status badge on any todo card to cycle it from `To Do → In Progress → Done`. Completed tasks can be filtered out using the search bar.

---

## 14. Contacts

A simple collaborator and contact list.

### Adding a contact

1. Click **＋ Add Contact**
2. Fill in **Name**, **Institution**, **Email**, and **Role** (e.g. Collaborator, Advisor, Referee)
3. Add a **Website** or ORCID link
4. Add **Notes** (e.g. expertise, how you met, ongoing projects)
5. Click **Save**

---

## 15. Useful Links

A bookmarks section pre-seeded with 16 astronomy resources (ADS, arXiv, InspireHEP, SciX, Astroquery, Vizier, NED, SIMBAD, and more).

### Adding a link

1. Click **＋ Add Link**
2. Enter **Name**, **URL**, and **Description**
3. Set the **Category**:
   - Archives & Databases
   - Tools & Software
   - Journals & Preprints
   - Image Cutout Services
   - Ephemeris & Observing
   - Other
4. Click **Save**

Links are grouped by category. Click any link to open it in a new tab.

---

## 16. Photo Gallery

Store and organise photos — conference pictures, group photos, observation runs, milestones.

### Adding photos

1. Click **＋ Add Photos**
2. Drag and drop image files onto the drop zone, or click to browse
3. Multiple files can be added at once
4. Add a **Caption** and **Date** for each photo
5. Click **Save Photos**

Click any photo to open a full-screen lightbox. Use the arrow keys or the left/right buttons to navigate between photos.

---

## 17. My CV

Link your CV PDF for quick access. This section stores a URL or local path to your CV — it does not upload or store the file itself.

1. Click **＋ Edit CV Link**
2. Paste the URL or local path to your CV PDF (e.g. `./cv/rahaman_cv.pdf` or a Google Drive share link)
3. Click **Save**

A **View CV** button appears, opening the PDF directly.

---

## 18. Calendar

A unified deadline and event view that aggregates dates from all sections, plus any external iCal feeds you subscribe to.

### What appears in the Calendar

The Calendar automatically pulls dates from:

| Source | What is shown |
|--------|--------------|
| Proposals | Submission deadlines |
| Job Register | Application deadlines |
| TODO List | Task due dates |
| Conferences | Conference dates |
| Calendar events | Manual events and iCal feed events |

### Views

- **Month view** — click any date to see events for that day
- **Week timeline** — a detailed hourly view for the selected week
- **Day timeline** — an hourly view for a single day

### Adding a manual event

1. Click any date in the calendar grid
2. Click **＋ Add Event**
3. Fill in **Title**, **Start time**, **End time**, **Location**, and **Notes**
4. Click **Save**

### Syncing an external iCal feed

Subscribe to a public calendar (Google Calendar, Apple Calendar, institutional calendars, conference schedules) and have its events appear in your notebook automatically:

1. **Get the iCal URL** from your calendar app:
   - **Google Calendar**: Settings → your calendar → Integrate calendar → copy the *Public address in iCal format* URL (your calendar must be set to public)
   - **Apple Calendar**: right-click the calendar → Share Calendar → copy the URL
   - **Other**: any standard `.ics` feed URL works
2. Click **+ Add iCal URL** in the Calendar section
3. Paste the URL and press Enter
4. The server fetches and parses the feed — events appear immediately
5. To refresh, click **🔄 Sync iCal** — or restart the server (it syncs on startup)

> **Requires** `icalendar` and `python-dateutil` installed in your virtual environment. If they are missing, iCal sync is disabled and a message appears, but all other notebook features continue working.

### Exporting an event as .ics

Open any event's detail view and click **⬇ Apple (.ics)** to download that event as a standard `.ics` file, which can be imported into Apple Calendar, Google Calendar, or Outlook.

---

## 19. Import & Export

Every section has **↓ Export** and **↑ Import** buttons in the section action bar.

### Exporting a section

1. Click **↓ Export** in any section
2. A JSON file is downloaded containing all entries in that section
3. The file is named `eukosmos_sectionname_YYYY-MM-DD.json`

### Importing into a section

1. Click **↑ Import** in any section
2. Paste the JSON content into the text area, or use the file picker
3. Click **Import**
4. Duplicate entries (matched by ID) are skipped automatically

### Use cases

- **Share a reading list** with a colleague — export Literature Papers, send the JSON, they import it
- **Move data between machines** — export all sections, copy files, import on the new machine
- **Back up your data** — use the **💾 Backup** button in the sidebar to export all sections at once as a single JSON file

### Full backup and restore

The **💾 Backup** button (sidebar, near the bottom) exports everything — all sections, all data — as a single JSON file. To restore, use **📥 Restore Backup** and select the backup file.

---

## 20. Multi-Device Sync

Place the `eukosmos` folder inside a sync service (Dropbox, Google Drive, iCloud Drive, OneDrive, Syncthing, or a private Git repository) to access your notebook from multiple computers.

### Setting up sync

**On your first computer:**

```bash
# Move the folder into your sync service
mv ~/eukosmos ~/Dropbox/eukosmos          # Dropbox example
# or
mv ~/eukosmos ~/Google\ Drive/eukosmos    # Google Drive example

# Grant permissions after moving
cd ~/Dropbox/eukosmos
chmod -R 777 .

# Start the server
source ~/vnotebook/bin/activate
python3 serve.py
```

Open `http://localhost:8080` → click **📂 Connect Folder** → select the `eukosmos` folder.

**On a second computer:**

```bash
# After the sync service finishes syncing the folder
cd ~/Dropbox/eukosmos
chmod -R 777 .

# Activate your virtual environment (or create one if this is a new machine)
source ~/vnotebook/bin/activate
# If vnotebook does not exist here: python3 -m venv ~/vnotebook && source ~/vnotebook/bin/activate && pip install icalendar python-dateutil

python3 serve.py
```

Open `http://localhost:8080` → click **📂 Connect Folder** → select the same folder.

### Important: do not sync the virtual environment

Add `vnotebook/` to your sync service's ignore list so it is not synced — it is large, machine-specific, and recreating it on each machine takes seconds.

- **Dropbox**: create a file called `.dropboxignore` in the eukosmos folder containing `vnotebook/`
- **Google Drive**: move `vnotebook` to a location outside the Drive folder
- **Git**: add `vnotebook/` to `.gitignore`

### Avoiding conflicts

The notebook writes entire JSON files on each save. If you edit on two machines simultaneously, one save will overwrite the other.

- **Edit on one machine at a time** whenever possible
- Dropbox and iCloud flag conflicted copies with a filename suffix — if you see these, compare them manually and keep the newer one
- For robust multi-user collaboration, the recommended approach is to export/import sections rather than sharing a live folder

---

## 21. Customisation

### Theme

Click the **☀ / ☽** toggle in the top-right of the sidebar to switch between dark and light theme.

### Compact view

Click **⊞ Compact** to reduce padding and font sizes for a denser layout — useful on smaller screens or when you have many entries.

### Fullscreen

Click **⛶ Fullscreen** or press `F11` to hide the browser chrome.

### CSS variables

All colours, fonts, and sizes are CSS variables in the `:root {}` block near the top of `index.html` (around line 50). Open `index.html` in a text editor and adjust:

```css
:root {
  --fs-body:   32px;       /* overall text scale */
  --sidebar:   220px;      /* sidebar width */
  --glow:      #33d9ff;    /* cyan accent colour */
  --amber:     #ffc055;    /* amber accent colour */
  --bg:        #050a12;    /* page background */
  --panel:     #0a1628;    /* panel / card background */
}
```

After editing, hard-refresh Chrome: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows).

---

## 22. Troubleshooting

### The page looks wrong or shows an old version

Hard-refresh to clear the browser cache:
- Mac: `Cmd+Shift+R`
- Windows/Linux: `Ctrl+Shift+R`

If that does not help, open Chrome DevTools (F12) → Application → Storage → Clear site data.

### Data is not saving

- Open the notebook via `http://localhost:8080`, **not** `file://`. The `file://` URL cannot write to disk.
- Make sure you have clicked **📂 Connect Folder** and selected the correct folder.
- Run `chmod -R 777 .` inside the `eukosmos` folder and restart the server.

### ADS auto-fill not working

- Make sure your ADS API token is entered in the Literature Papers form (it is saved automatically once entered).
- Your token can be found at [https://ui.adsabs.harvard.edu/user/settings/token](https://ui.adsabs.harvard.edu/user/settings/token).
- If the token is correct but auto-fill still fails, check that `serve.py` is running — the app proxies ADS requests through the local server.

### BibTeX sync says "not found"

- The paper may be journal-only (no arXiv preprint). Open the detail panel and click **Sync to [ADS]** — the smart sync will use the ADS bibcode from the `adsurl` field automatically.
- If the paper has a DOI, that is used as a fallback. Check that the imported `.bib` entry included `doi = {...}`.

### iCal sync is disabled / not working

- Activate your virtual environment: `source ~/vnotebook/bin/activate`
- Install the required packages: `pip install icalendar python-dateutil`
- Restart `serve.py`
- If your Google Calendar URL is not working, make sure the calendar is set to **public** in Google Calendar settings before copying the iCal URL.

### Equations are not rendering

KaTeX needs internet access on first run to download its CSS and fonts to `./lib/`. After that it works offline. If you are on a network that blocks external resources, download KaTeX manually from [https://github.com/KaTeX/KaTeX/releases](https://github.com/KaTeX/KaTeX/releases) and place the files in `./lib/`.

### Port 8080 is already in use

```bash
# Find and kill whatever is using port 8080
lsof -ti tcp:8080 | xargs kill

# Or use a different port
python3 serve.py 9090
# Then open: http://localhost:9090
```

### Permission denied errors

```bash
cd eukosmos
chmod -R 777 .
```

Run this after every `git pull` if the update resets file permissions.

### The virtual environment is not found

If you see `source: no such file or directory` or `ModuleNotFoundError`:

```bash
# Check if the venv exists
ls ~/vnotebook/bin/activate

# If not, recreate it
python3 -m venv ~/vnotebook
source ~/vnotebook/bin/activate
pip install icalendar python-dateutil
```

---

*Built by [Dr. Majidul Rahaman](https://astr.site.nthu.edu.tw/p/406-1336-223724,r2561.php?Lang=en), Institute of Astronomy, NTHU, Taiwan. MIT License.*
