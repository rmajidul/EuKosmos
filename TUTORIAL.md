# 📖 Eukosmos — Tutorial

This guide walks you through the notebook from first launch to everyday use.

---

## Table of contents

1. [First launch](#1-first-launch)
2. [The interface](#2-the-interface)
3. [Research Notes](#3-research-notes)
4. [Literature Papers (with ADS auto-fill)](#4-literature-papers)
5. [My Papers](#5-my-papers)
6. [Research Ideas](#6-research-ideas)
7. [Proposals](#7-proposals)
8. [Job Register](#8-job-register)
9. [Conference Notes](#9-conference-notes)
10. [Code Snippets](#10-code-snippets)
11. [Code Library](#11-code-library)
12. [TODO List](#12-todo-list)
13. [Contacts](#13-contacts)
14. [Useful Links](#14-useful-links)
15. [Photo Gallery](#15-photo-gallery)
16. [My CV](#16-my-cv)
17. [Global search](#17-global-search)
18. [Pinboard](#18-pinboard)
19. [Exporting and importing data](#19-exporting-and-importing-data)
20. [PDF management](#20-pdf-management)
21. [Pre-seeding data for the group (data.js)](#21-pre-seeding-data-for-the-group)
22. [Customising the look](#22-customising-the-look)
23. [Keyboard shortcuts](#23-keyboard-shortcuts)

---

## 1. First launch

Open a terminal in the notebook folder and run:

```bash
python3 serve.py
```

You will see a startup banner. Open Chrome and go to **http://localhost:8080**.

> Keep the terminal open while using the notebook. Press `Ctrl+C` to stop.

### Why is Python needed?

The server does two things the browser cannot do on its own:

1. **Saves your data** as JSON files on disk. Chrome blocks file writes for `file://` pages.
2. **Proxies NASA ADS API calls.** Browsers block direct calls from `localhost` to external APIs. The server forwards your requests and returns the results.

---

## 2. The interface

- **Left sidebar** — navigation, global search button, storage status, Backup/Restore/BibTeX buttons
- **Main area** — the active section with its entry list and add form
- **Right detail panel** — slides in when you click any entry, showing the full record

**Theme:** click the sun/moon icon in the sidebar to switch between dark and light mode.  
**Compact view:** the ⊟ button reduces card padding for denser display.  
**Sidebar order:** drag the ⠿ handle next to any nav item to reorder sections.

---

## 3. Research Notes

Free-form notes, derivations, ideas, and observations.

### Adding a note

Click **＋ Add Note**, fill in a title and optional tags (comma-separated), write in the body field, and click **Save Note**.

### Markdown and LaTeX

The body field supports:

```
**bold**   *italic*   `code`   # Heading   - list item

$E = mc^2$              ← inline equation
$$\int_0^\infty f(x) dx$$  ← display equation
```

You can also **paste images** directly with `Ctrl+V` / `Cmd+V`. The image is embedded in the note.

### Viewing

Click any note card to open the detail panel. Markdown and equations are rendered there. Click **✎ Edit** to modify.

---

## 4. Literature Papers

Papers you have read or want to read, with personal annotations.

### Setting up your ADS token (one-time)

1. Go to [https://ui.adsabs.harvard.edu/user/settings/token](https://ui.adsabs.harvard.edu/user/settings/token), log in, and copy your token.
2. Open **Literature Papers** and click **＋ Add Paper**.
3. Paste your token into the token input field that appears. It saves automatically.

The same token is shared with My Papers — enter it once and it works everywhere.

### Auto-filling a paper

In the auto-fill bar at the top of the form, paste any of the following and click **⚡ Auto-fill from ADS**:

- ADS URL: `https://ui.adsabs.harvard.edu/abs/2024ApJ...123...45S`
- ADS bibcode: `2024ApJ...123...45S`
- arXiv URL: `https://arxiv.org/abs/2401.12345`
- arXiv ID: `2401.12345`

Title, authors, abstract, journal, and BibTeX are filled automatically. Add your personal summary and rating, then save.

### Rating and read status

Rate papers as Interesting / Very relevant / Essential. Mark papers as read/unread using the badge on the card.

---

## 5. My Papers

Your own publications and manuscripts. Works identically to Literature Papers with an added **Status** field (Published / Submitted / In Prep). The Home dashboard shows a count by status. Auto-fill from ADS works here too — useful for importing your published papers.

---

## 6. Research Ideas

Track research hypotheses from inception to completion.

### Adding an idea

Fill in a title, write your **Hypothesis** (Markdown + LaTeX supported), link **Related Papers** from your library (type to search), set a **Feasibility** rating, and choose a **Stage**.

### Stages

Ideas move through four stages: **💭 Backlog → 🚀 Active → ⏸ Parked → ✅ Completed**. Update the stage as your work evolves.

### Feasibility ratings

- 🟢 High — ready to pursue
- 🟡 Medium — needs more work
- 🔴 Low — long-term / speculative

---

## 7. Proposals

Observational and funding proposals with deadline and status tracking.

### Adding a proposal

Fill in the title, type (Observational / Funding / Other), agency or telescope (ESO, HST, ERC, etc.), deadline date, and status. Attach documents (PDF paths or URLs) and notes.

### Status pipeline

Toggle between: **In Prep → Submitted → Approved → Rejected**

### Filter bar

Use the filter buttons at the top of the section to view only proposals of a certain status or type.

---

## 8. Job Register

Track job and fellowship applications through their full lifecycle.

### Adding an application

Fill in the position title, institution, type (PhD / Postdoc / Faculty / Fellowship / Industry / Other), deadline, and status. Add the advertisement URL, notes, referee names, and document paths.

### Referee tracking

Use the **＋ Add Referee** rows to record referee names and contact info for each application. The detail panel shows all referee information when you click an entry.

### Status pipeline

Toggle between: **In Progress → Submitted → Interview → Offered → Rejected → Withdrawn**

### Filter bar

Filter by status or type to focus on active applications.

---

## 9. Conference Notes

Talk notes from conferences and seminars.

### Adding talk notes

Fill in the talk title, event name, speaker, date, and an optional link to slides or a recording. Write notes in the body field — Markdown, LaTeX, and image paste are all supported.

### Printing

Click **🖨 Print** to open a print-friendly view. In the browser print dialog, choose "Save as PDF."

---

## 10. Code Snippets

Short reusable scripts and one-liners.

Fill in a title, language (Python, bash, IDL, etc.), description, tags, and the code itself. The code is displayed in a monospaced block with a one-click copy button in the detail view.

---

## 11. Code Library

Register and document full scripts or packages you use regularly.

Unlike Snippets (which are for short pieces of code), Code Library entries store a **file path or location** on your system, along with dependencies, example usage, and version notes. Useful for keeping track of your reduction pipelines and analysis scripts across projects.

Fields: name, language, purpose, location/path, dependencies, example usage, tags, notes.

---

## 12. TODO List

Research task management.

### Adding a task

Fill in the task description, priority (High / Medium / Low), status, and optional due date. Add notes, links, or PDF references.

### Updating status

Click the status badge on any task card to cycle it through **To Do → In Progress → Done** without opening the edit form.

### Deadline ticker

The Home section displays a scrolling ticker of upcoming and overdue tasks. Overdue items appear in red, due-soon in amber.

---

## 13. Contacts

A contact list for collaborators and colleagues.

Store name, institution, email, website/ADS link, research expertise, and notes. Useful for remembering who works on what and keeping collaboration context in one place.

---

## 14. Useful Links

Categorised bookmarks for astronomy resources.

On first launch the notebook seeds 16 default links: NASA/ADS, arXiv, SIMBAD, NED, VizieR, HEASARC, MAST, ESO Archive, ESASky, SkyView, Aladin, Pan-STARRS cutouts, Astropy, TOPCAT, DS9, and JPL Horizons.

Add links with a name, URL, description, and category (Archive, Tools, Journals, Cutout Services, Ephemeris, Other). Click any link card to open it in a new tab.

---

## 15. Photo Gallery

Store and browse photos: conference snapshots, fieldwork images, poster shots, and milestones.

### Adding photos

Click **＋ Add Photos**, select one or more images (or drag and drop), set an album name, date, caption, and tags. Images are stored as base64 in `data_photos.json`.

### Viewing

Photos are displayed in a masonry grid. Click any photo to open it in a fullscreen lightbox with previous/next navigation.

---

## 16. My CV

Link a CV PDF for quick access from within the notebook.

Click **⚙ Set CV Path**, enter the path to your PDF (e.g. `./cv.pdf` if the file is in the notebook folder, or any `https://` URL), and optionally a display name. The PDF will be viewable directly in the section.

---

## 17. Global search

Press **`Cmd+K`** (Mac) or **`Ctrl+K`** (Windows/Linux) from anywhere in the notebook.

- Results appear as you type, grouped by section
- Use arrow keys to navigate, `Enter` to jump to an entry
- Press `Escape` to close

Searches all text fields in all sections simultaneously.

---

## 18. Pinboard

The Home section contains a **Pinboard** — a visual grid of entries you have pinned from any section.

### Pinning an entry

Click any entry to open the detail panel, then click **📌 Pin**. The entry appears on the Home pinboard, colour-coded by type.

To unpin: click the × on the pin card, or click **Unpin** in the detail panel.

You can also click **📌 Pin Entry** in the Home section header to search and pin anything without navigating away.

---

## 19. Exporting and importing data

### Exporting

Every section has a **↓ Export** button that downloads a JSON file. Use this to back up your data or share entries with a colleague.

Three sidebar buttons work across all sections at once:

- **💾 Backup** — downloads a single JSON file containing all sections
- **↑ Restore** — restores from a backup JSON file
- **{ } .bib** — exports a combined `master_library.bib` from all Literature Papers and My Papers

### Importing

Click **↑ Import** in any section and select a JSON file exported from the same section type. Imported entries are merged with your existing data.

### Sharing within the group

1. Export a section as JSON
2. Share the file (email, Slack, shared drive)
3. Teammates import it into their own notebook

---

## 20. PDF management

### Linking a PDF

The **PDF File Path or URL** field in paper forms accepts:

- A relative path: `./pdf/smith2024.pdf`
- An absolute path: `/home/you/papers/smith2024.pdf`
- A URL: `https://arxiv.org/pdf/2401.12345`

### Downloading automatically

Click **⬇ Download & Save PDF** in the form. The server fetches the PDF and saves it to `./pdf/Author_Bibcode.pdf`. The path is filled in automatically. Requires `http://localhost`.

### Opening

In the detail panel, click **Open PDF** (opens in your system viewer) or **View in browser** (opens in a new tab).

---

## 21. Pre-seeding data for the group

Edit `data.js` to pre-populate entries for everyone who clones the repository.

```javascript
window.ASTRO_DATA = {
  notes: [],
  papers: [],
  mypapers: [],
  links: [
    // paste exported link entries here
  ],
  snippets: [
    // paste exported snippet entries here
  ],
  // add other sections as needed
  // valid keys: notes, papers, mypapers, links, conferences,
  //             snippets, todos, collaborators, ideas, codelib,
  //             photos, proposals, jobs
};
```

To get correctly formatted entries: export a section from your own notebook, open the JSON file, copy the array contents, and paste them into `data.js`.

`data.js` is used only on **first launch** (when no local data exists yet). After the first run, `data_*.json` files take over and `data.js` is ignored.

---

## 22. Customising the look

Open `index.html` in a text editor. Find the `:root { }` block near line 50 and adjust the CSS variables.

**Make text larger:**
```css
--fs-body: 17px;   /* default: 15px */
```

**Widen the sidebar:**
```css
--sidebar: 260px;  /* default: 220px */
```

**Change the accent colour (currently cyan):**
```css
--glow: #ff6633;
--glow2: #cc4422;
--glow-dim: rgba(255,102,51,0.10);
--glow-mid: rgba(255,102,51,0.20);
```

After editing, hard-refresh Chrome: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows).

---

## 23. Keyboard shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd+K` / `Ctrl+K` | Open global search |
| `Escape` | Close search, detail panel, or modal |
| `↑` / `↓` | Navigate search results |
| `Enter` | Jump to selected search result |
| `Ctrl+V` / `Cmd+V` | Paste image into note/conference fields |
| `Ctrl+C` in terminal | Stop the server |

---

## Tips for new users

**Start with Notes.** Before worrying about sections, just open Notes and write. Tag as you go — the tag autocomplete learns from your existing entries.

**Use ADS auto-fill heavily.** It takes seconds to add a paper with full metadata. The only thing to add manually is your personal summary.

**Export regularly.** The `data_*.json` files in the notebook folder are your backup. Copy them somewhere safe, or commit them to a private repository.

**The detail panel is your reading view.** Click any entry to open it. Markdown and equations are rendered there. You rarely need to open the edit form just to read.

**Search before you add.** Use `Cmd+K` to check whether an entry already exists before adding a duplicate.

---

*Questions or issues? Open an issue on the GitHub repository.*
