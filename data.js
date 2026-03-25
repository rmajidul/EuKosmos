// ══════════════════════════════════════════════════════════════
//  data.js  —  Optional static seed file for Eukosmos
//
//  For LOCAL use: you do NOT need this file.
//  Your data is saved as data_<section>.json in your folder.
//
//  Useful for GitHub Pages deployment or pre-populating on first run.
//  If localStorage is empty on first load, these entries will be used.
// ══════════════════════════════════════════════════════════════

window.ASTRO_DATA = {
  // ── NOTES ──────────────────────────────────────────────────
  notes: [
    {
      id: "sample-note-1",
      date: "2025-02-15",
      title: "AGN feedback in cool-core clusters",
      tags: "AGN, feedback, X-ray, clusters",
      body: "**Key idea:** AGN outbursts may regulate star formation in the brightest cluster galaxies. Recent Chandra observations of Perseus show cavities in the X-ray gas.\n\n$$P_{\\text{jet}} \\approx 10^{45} \\text{ erg s}^{-1}$$\n\nFurther analysis: need to compare with radio data from VLA.",
      link: "https://ui.adsabs.harvard.edu/abs/2024ApJ...961..173H/abstract"
    },
    {
      id: "sample-note-2",
      date: "2025-03-01",
      title: "Meeting notes: Machine learning for galaxy classification",
      tags: "ML, galaxies, morphology",
      body: "Discussed with Anna about using CNNs on HST images. She suggested trying transfer learning from Galaxy Zoo models.\n\n**Next steps:**\n- Download HST COSMOS dataset\n- Set up PyTorch environment\n- Compare with traditional methods (CAS parameters)"
    }
  ],

  // ── LITERATURE PAPERS ──────────────────────────────────────
  papers: [
    {
      id: "sample-paper-1",
      date: "2025-01-10",
      title: "X-ray cavities in the Perseus cluster core",
      authors: "Smith, J.; Jones, M.; et al.",
      journal: "ApJ 961, 173",
      ads: "https://ui.adsabs.harvard.edu/abs/2024ApJ...961..173H/abstract",
      abstract: "We present deep Chandra observations of the Perseus cluster, revealing new cavities in the X-ray gas. The total mechanical power is estimated at 10^45 erg/s.",
      summary: "Important paper showing AGN feedback efficiency. They used 1.2 Ms of Chandra data. The cavities have a volume of ~10^68 cm^3. The derived power matches the cooling losses within a factor of 2.",
      tags: "AGN, X-ray, clusters, feedback",
      rating: "★★★ Essential",
      bibtex: "@article{smith2024xray,\n  author = {{Smith, J.} and {Jones, M.}},\n  title = {X-ray cavities in the Perseus cluster core},\n  journal = {ApJ},\n  volume = {961},\n  pages = {173},\n  year = {2024}\n}",
      pdf: "./pdf/Smith_2024ApJ_961_173H.pdf",
      source: "ads",
      arxivId: "2401.12345",
      read: "done",
      starred: true
    },
    {
      id: "sample-paper-2",
      date: "2025-02-20",
      title: "Galaxy merger rates in IllustrisTNG",
      authors: "Lee, Y.; Rodriguez, C.; et al.",
      journal: "MNRAS 528, 1234",
      ads: "https://ui.adsabs.harvard.edu/abs/2024MNRAS.528.1234L/abstract",
      abstract: "We quantify galaxy merger rates using the IllustrisTNG simulation at z=0-2. Major mergers peak at z~1.5.",
      summary: "Good reference for merger rates. They provide fitting functions that we can use for our semi-analytic model.",
      tags: "simulations, mergers, galaxies",
      rating: "★★ Very relevant",
      bibtex: "@article{lee2024galaxy,\n  author = {{Lee, Y.} and {Rodriguez, C.}},\n  title = {Galaxy merger rates in IllustrisTNG},\n  journal = {MNRAS},\n  volume = {528},\n  pages = {1234},\n  year = {2024}\n}",
      source: "ads",
      arxivId: "2402.98765",
      read: "reading"
    }
  ],

  // ── MY PAPERS ──────────────────────────────────────────────
  mypapers: [
    {
      id: "sample-mypaper-1",
      date: "2024-11-05",
      title: "The nature of X-ray cavities in galaxy clusters",
      authors: "Rahaman, M.; Smith, J.; Jones, M.",
      journal: "ApJ 975, 15",
      status: "published",
      ads: "https://ui.adsabs.harvard.edu/abs/2024ApJ...975...15R/abstract",
      arxiv: "https://arxiv.org/abs/2408.12345",
      tags: "AGN, X-ray, clusters",
      cite: 8,
      abstract: "We present a systematic study of X-ray cavities in a sample of 40 cool-core clusters. We find a correlation between cavity power and radio luminosity.",
      bibtex: "@article{rahaman2024nature,\n  author = {{Rahaman, M.} and {Smith, J.} and {Jones, M.}},\n  title = {The nature of X-ray cavities in galaxy clusters},\n  journal = {ApJ},\n  volume = {975},\n  pages = {15},\n  year = {2024}\n}",
      pdf: "./pdf/Rahaman_2024ApJ_975_15R.pdf",
      source: "ads",
      arxivId: "2408.12345"
    },
    {
      id: "sample-mypaper-2",
      date: "2025-02-01",
      title: "Deep learning for AGN detection in radio surveys",
      authors: "Rahaman, M.; Lee, Y.; Zhang, W.",
      journal: "MNRAS in press",
      status: "submitted",
      ads: "https://ui.adsabs.harvard.edu/abs/2025arXiv2501.01234R/abstract",
      arxiv: "https://arxiv.org/abs/2501.01234",
      tags: "ML, AGN, radio",
      cite: 0,
      abstract: "We train a convolutional neural network to identify AGN in LoTSS images. The model achieves 96% accuracy.",
      bibtex: "",
      pdf: "",
      source: "arxiv",
      arxivId: "2501.01234"
    }
  ],

  // ── USEFUL LINKS ──────────────────────────────────────────
  links: [
    {
      id: "sample-link-1",
      name: "NASA/ADS",
      url: "https://ui.adsabs.harvard.edu/",
      desc: "The Astrophysics Data System – search papers and references.",
      cat: "journals"
    },
    {
      id: "sample-link-2",
      name: "arXiv astro-ph",
      url: "https://arxiv.org/list/astro-ph/recent",
      desc: "Latest preprints in astrophysics.",
      cat: "journals"
    },
    {
      id: "sample-link-3",
      name: "Chandra Proposal Planning",
      url: "https://cxc.harvard.edu/proposer/",
      desc: "Tools and guidelines for Chandra observing proposals.",
      cat: "archive"
    },
    {
      id: "sample-link-4",
      name: "TOPCAT",
      url: "https://www.star.bris.ac.uk/~mbt/topcat/",
      desc: "Table/catalogue analysis and cross-matching tool.",
      cat: "tools"
    }
  ],

  // ── CONFERENCE NOTES ──────────────────────────────────────
  conferences: [
    {
      id: "sample-conf-1",
      date: "2025-02-10",
      title: "The role of AGN feedback in galaxy evolution",
      event: "Cool Cores 2025, Bologna",
      speaker: "Dr. E. Churazov",
      notes: "**Key points:**\n- New Chandra observations of the Perseus cluster show a third bubble.\n- Feedback efficiency may vary with cluster mass.\n- Discussed future XRISM results.",
      link: "https://indico.eso.org/event/1234/"
    },
    {
      id: "sample-conf-2",
      date: "2025-01-22",
      title: "Machine learning for large surveys",
      event: "AstroML Workshop, Heidelberg",
      speaker: "Prof. C. Bonz",
      notes: "**Takeaways:**\n- Self-supervised learning on unlabeled images works well.\n- Need to be careful about data leakage.\n- Shared code at github.com/example/ml-astro",
      link: "https://www.astro.uni-heidelberg.de/workshop2025"
    }
  ],

  // ── CODE SNIPPETS ─────────────────────────────────────────
  snippets: [
    {
      id: "sample-snip-1",
      title: "Read and plot a FITS image",
      language: "python",
      description: "Load a FITS file, display the image, and save as PNG.",
      code: "from astropy.io import fits\nimport matplotlib.pyplot as plt\n\nhdul = fits.open('image.fits')\ndata = hdul[0].data\nplt.imshow(data, cmap='gray', origin='lower')\nplt.colorbar()\nplt.savefig('image.png')\nplt.show()",
      tags: "fits, plotting, astropy"
    },
    {
      id: "sample-snip-2",
      title: "Query SIMBAD for object coordinates",
      language: "python",
      description: "Use astroquery to get RA and Dec of a target.",
      code: "from astroquery.simbad import Simbad\nresult = Simbad.query_object('M87')\nra = result['RA'][0]\ndec = result['DEC'][0]\nprint(f'M87: {ra} {dec}')",
      tags: "astroquery, simbad, coordinates"
    }
  ],

  // ── TODO LIST ─────────────────────────────────────────────
  todos: [
    {
      id: "sample-todo-1",
      title: "Write introduction for AGN paper",
      priority: "high",
      status: "in-progress",
      due: "2025-03-15",
      notes: "Need to include references from 2024 literature.\nFocus on feedback efficiency in cool-core clusters."
    },
    {
      id: "sample-todo-2",
      title: "Reduce Chandra observations of Abell 2142",
      priority: "medium",
      status: "todo",
      due: "2025-04-01",
      notes: "Use CIAO 4.16. Follow standard reduction steps.\nCheck for background flares."
    },
    {
      id: "sample-todo-3",
      title: "Update CV with latest publications",
      priority: "low",
      status: "done",
      due: "2025-02-28",
      notes: "Added MNRAS accepted paper."
    }
  ],

  // ── COLLABORATORS / CONTACTS ──────────────────────────────
  collaborators: [
    {
      id: "sample-collab-1",
      name: "Dr. Jane Smith",
      affiliation: "Harvard-Smithsonian Center for Astrophysics",
      email: "jane.smith@cfa.harvard.edu",
      expertise: "AGN feedback, X-ray observations",
      notes: "Collaborated on the Perseus cluster paper. She leads the Chandra proposal."
    },
    {
      id: "sample-collab-2",
      name: "Dr. Yuri Lee",
      affiliation: "Kavli IPMU, University of Tokyo",
      email: "yuri.lee@ipmu.jp",
      expertise: "Galaxy simulations, machine learning",
      notes: "Met at the AstroML workshop. Interested in applying CNNs to radio images."
    }
  ],

  // ── RESEARCH IDEAS ────────────────────────────────────────
  ideas: [
    {
      id: "sample-idea-1",
      date: "2025-02-05",
      title: "Correlate cavity power with radio morphology",
      hypothesis: "We hypothesise that galaxies with more extended radio lobes have larger X-ray cavities.",
      papers: "Smith et al. (2024); Rahaman et al. (2024)",
      feasibility: "🟢 High — ready to pursue",
      stage: "active",
      tags: "AGN, radio, X-ray",
      ref: "https://arxiv.org/abs/2408.12345",
      notes: "Need to compile a sample of 50 clusters with both deep Chandra and LOFAR data.\nPlan to use cavity volume measurements from literature."
    },
    {
      id: "sample-idea-2",
      date: "2025-03-10",
      title: "Efficient detection of galaxy mergers with unsupervised learning",
      hypothesis: "Self-supervised models can identify merger signatures without labelled data.",
      papers: "Lee et al. (2024)",
      feasibility: "🟡 Medium — needs more work",
      stage: "backlog",
      tags: "ML, mergers",
      ref: "https://arxiv.org/abs/2501.01234",
      notes: "Start by extracting features from HST images using a pre-trained ViT.\nThen cluster and see if clusters correspond to known merger stages."
    }
  ],

  // ── CODE LIBRARY ──────────────────────────────────────────
  codelib: [
    {
      id: "sample-code-1",
      name: "cavity_finder.py",
      date: "2025-01-20",
      lang: "python",
      purpose: "Detect and measure X-ray cavities in Chandra images",
      path: "./scripts/cavity_finder.py",
      deps: "astropy, numpy, scikit-image, matplotlib",
      usage: "python cavity_finder.py --input cluster.fits --output contours.png",
      tags: "X-ray, cavities, image processing"
    },
    {
      id: "sample-code-2",
      name: "fits_to_png.py",
      date: "2025-02-01",
      lang: "python",
      purpose: "Convert FITS image to PNG with scaling",
      path: "./scripts/fits_to_png.py",
      deps: "astropy, matplotlib",
      usage: "python fits_to_png.py image.fits output.png --scale log",
      tags: "fits, conversion"
    }
  ],

  // ── PHOTO GALLERY ─────────────────────────────────────────
  photos: [
    {
      id: "sample-photo-1",
      date: "2025-02-10",
      album: "Cool Cores 2025 Conference",
      caption: "Group photo in Bologna",
      tags: "conference, group",
      filename: "cool_cores_group.jpg",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
    },
    {
      id: "sample-photo-2",
      date: "2024-08-15",
      album: "Observatory visit",
      caption: "At the VLT, Paranal",
      tags: "observatory, VLT",
      filename: "vlt_paranal.jpg",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
    }
  ],

  // ── PROPOSALS ─────────────────────────────────────────────
  proposals: [
    {
      id: "sample-prop-1",
      title: "Probing AGN feedback in the Virgo cluster",
      type: "Observational",
      agency: "Chandra X-ray Observatory",
      deadline: "2025-09-15",
      status: "In Prep",
      pi: "M. Rahaman",
      abstract: "We propose to observe the Virgo cluster for 200 ks to map the hot gas and search for new cavities.",
      notes: "Co-Is: J. Smith, Y. Lee",
      links: [{ label: "Proposal prep notes", url: "https://docs.google.com/document/d/example" }],
      pdfs: [{ label: "Draft", path: "./pdfs/virgo_draft.pdf" }]
    },
    {
      id: "sample-prop-2",
      title: "ERC Starting Grant: AGN feedback across cosmic time",
      type: "Funding",
      agency: "ERC",
      deadline: "2025-10-01",
      status: "In Prep",
      pi: "M. Rahaman",
      abstract: "This grant would fund a 5-year project to study AGN feedback using X-ray and radio data.",
      notes: "Need to write the B2 section and prepare budget.",
      links: [],
      pdfs: []
    }
  ],

  // ── JOB REGISTER ──────────────────────────────────────────
  jobs: [
    {
      id: "sample-job-1",
      title: "Postdoctoral Fellow in X-ray Astronomy",
      institution: "Institute of Astronomy, Cambridge",
      type: "Postdoc",
      deadline: "2025-11-30",
      status: "In Progress",
      adv_url: "https://www.jobs.cam.ac.uk/job/12345/",
      notes: "Need to request letters from referees. The position is for 3 years.",
      referees: [
        { name: "Dr. Jane Smith", email: "jane.smith@cfa.harvard.edu", notify_status: "not_yet", received_status: "not_yet" },
        { name: "Prof. Yuri Lee", email: "yuri.lee@ipmu.jp", notify_status: "not_yet", received_status: "not_yet" }
      ],
      docs: [{ label: "CV", path: "./cv.pdf" }, { label: "Research statement", path: "./research_statement.pdf" }]
    },
    {
      id: "sample-job-2",
      title: "Assistant Professor in Astrophysics",
      institution: "University of Amsterdam",
      type: "Faculty",
      deadline: "2025-10-15",
      status: "Submitted",
      adv_url: "https://www.uva.nl/en/about-the-uva/working-at-uva/vacancies",
      notes: "Submitted on March 10. Waiting for confirmation.",
      referees: [
        { name: "Dr. Jane Smith", email: "jane.smith@cfa.harvard.edu", notify_status: "requested", received_status: "not_yet" }
      ],
      docs: []
    }
  ]
};