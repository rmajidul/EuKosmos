// ══════════════════════════════════════════════════════════════
//  data.js  —  Optional static seed file for Eukosmos
//
//  For LOCAL use: you do NOT need this file. This file is randomly generated for the preview purpose. You can delete it.
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
    "id": "mmxyr17i7yy5",
    "date": "2026-03-19",
    "title": "A radio bridge connecting the minihalo and phoenix in the Abell 85 cluster",
    "authors": "Raja, Ramij; Rahaman, Majidul; Datta, Abhirup; Smirnov, Oleg M.",
    "journal": "Monthly Notices of the Royal Astronomical Society 2023",
    "status": "published",
    "ads": "https://www.scixplorer.org/abs/2023MNRAS.526L..70R",
    "arxiv": "https://arxiv.org/abs/2308.09005",
    "tags": "",
    "cite": "",
    "abstract": "Galaxy clusters are located at the nodes of cosmic filaments and therefore host a lot of hydrodynamical activity. However, cool core clusters are considered to be relatively relaxed systems without much merging activity. The Abell 85 cluster is a unique example where the cluster hosts both a cool core and multiple ongoing merging processes. In this work, we used 700 MHz uGMRT as well as MeerKAT L-band observations, carried out as part of the MeerKAT Galaxy Cluster Legacy Survey (MGCLS), of the Abell 85. We reconfirm the presence of a minihalo in the cluster centre at 700 MHz that was recently discovered in MGCLS. Furthermore, we discovered a radio bridge connecting the central minihalo and the peripheral radio phoenix. The mean surface brightness, size, and flux density of the bridge at 700 MHz are found to be ~0.14 <C2><B5>Jy arcsec<SUP>-2</SUP>, ~220 kpc, and ~4.88 mJy, respectively, with a spectral index of $\\alpha _{700}^{1.28} = -0.92$. Although the origin of the seed relativistic electrons is still unknown, turbulent reacceleration caused by both the spiralling sloshing gas in the intracluster medium and the post-shock turbulence from the outgoing merging shock associated with the phoenix formation may be responsible for the bridge.",
    "bibtex": "@ARTICLE{2023MNRAS.526L..70R,\n       author = {{Raja}, Ramij and {Rahaman}, Majidul and {Datta}, Abhirup and {Smirnov}, Oleg M.},\n        title = \"{A radio bridge connecting the minihalo and phoenix in the Abell 85 cluster}\",\n      journal = {\\mnras},\n     keywords = {radiation mechanisms: non-thermal, galaxies: clusters: general, galaxies: clusters: individual: Abell 85, galaxies: clusters: intracluster medium, radio continuum: general, Astrophysics - High Energy Astrophysical Phenomena, Astrophysics - Astrophysics of Galaxies},\n         year = 2023,\n        month = nov,\n       volume = {526},\n       number = {1},\n        pages = {L70-L76},\n          doi = {10.1093/mnrasl/slad117},\narchivePrefix = {arXiv},\n       eprint = {2308.09005},\n primaryClass = {astro-ph.HE},\n       adsurl = {https://ui.adsabs.harvard.edu/abs/2023MNRAS.526L..70R},\n      adsnote = {Provided by the SAO/NASA Astrophysics Data System}\n}",
    "pdf": "./pdf/Raja_2023MNRAS_526L_70R.pdf",
    "arxivId": "2308.09005",
    "source": "scix"
  },
  {
    "id": "mmwel9l5pj4p",
    "date": "2026-03-18",
    "title": "A radio bridge connecting the minihalo and phoenix in the Abell 85 cluster",
    "authors": "Raja, Ramij; Rahaman, Majidul; Datta, Abhirup; Smirnov, Oleg M.",
    "journal": "Monthly Notices of the Royal Astronomical Society 2023",
    "status": "published",
    "ads": "https://ui.adsabs.harvard.edu/abs/2023MNRAS.526L..70R",
    "arxiv": "https://arxiv.org/abs/2308.09005",
    "tags": "",
    "cite": "",
    "abstract": "Galaxy clusters are located at the nodes of cosmic filaments and therefore host a lot of hydrodynamical activity. However, cool core clusters are considered to be relatively relaxed systems without much merging activity. The Abell 85 cluster is a unique example where the cluster hosts both a cool core and multiple ongoing merging processes. In this work, we used 700 MHz uGMRT as well as MeerKAT L-band observations, carried out as part of the MeerKAT Galaxy Cluster Legacy Survey (MGCLS), of the Abell 85. We reconfirm the presence of a minihalo in the cluster centre at 700 MHz that was recently discovered in MGCLS. Furthermore, we discovered a radio bridge connecting the central minihalo and the peripheral radio phoenix. The mean surface brightness, size, and flux density of the bridge at 700 MHz are found to be ~0.14 <C2><B5>Jy arcsec<SUP>-2</SUP>, ~220 kpc, and ~4.88 mJy, respectively, with a spectral index of $\\alpha _{700}^{1.28} = -0.92$. Although the origin of the seed relativistic electrons is still unknown, turbulent reacceleration caused by both the spiralling sloshing gas in the intracluster medium and the post-shock turbulence from the outgoing merging shock associated with the phoenix formation may be responsible for the bridge.",
    "bibtex": "@ARTICLE{2023MNRAS.526L..70R,\n       author = {{Raja}, Ramij and {Rahaman}, Majidul and {Datta}, Abhirup and {Smirnov}, Oleg M.},\n        title = \"{A radio bridge connecting the minihalo and phoenix in the Abell 85 cluster}\",\n      journal = {\\mnras},\n     keywords = {radiation mechanisms: non-thermal, galaxies: clusters: general, galaxies: clusters: individual: Abell 85, galaxies: clusters: intracluster medium, radio continuum: general, Astrophysics - High Energy Astrophysical Phenomena, Astrophysics - Astrophysics of Galaxies},\n         year = 2023,\n        month = nov,\n       volume = {526},\n       number = {1},\n        pages = {L70-L76},\n          doi = {10.1093/mnrasl/slad117},\narchivePrefix = {arXiv},\n       eprint = {2308.09005},\n primaryClass = {astro-ph.HE},\n       adsurl = {https://ui.adsabs.harvard.edu/abs/2023MNRAS.526L..70R},\n      adsnote = {Provided by the SAO/NASA Astrophysics Data System}\n}",
    "pdf": "./pdf/Raja_2023MNRAS_526L_70R.pdf",
    "arxivId": "2308.09005",
    "source": "ads"
  },
  {
    "id": "mmnobiuk365r",
    "date": "2026-03-12",
    "title": "SoUthern Cluster sCale Extended Source Survey (SUCCESS): a GMRT and Meerkat study of nine massive galaxy clusters",
    "authors": "Kale, R.; Parekh, V.; Rahaman, M.; Joshi, D. C.; Venturi, T.; Kolokythas, K.; Chibueze, J. O.; Sikhosana, S. et al.",
    "journal": "Monthly Notices of the Royal Astronomical Society 2022",
    "status": "published",
    "ads": "https://ui.adsabs.harvard.edu/abs/2022MNRAS.514.5969K",
    "arxiv": "https://arxiv.org/abs/2206.10895",
    "tags": "",
    "cite": "",
    "abstract": "We aim to carry out a radio study of the SoUthern Cluster sCale Extended Source Survey (SUCCESS) sample consisting of 20 massive (M<SUB>500</SUB> &gt; 5 <C3><97> 10<SUP>14</SUP> M<SUB><E2><8<8A><99></SUB>), nearby (redshift &lt;0.3) and southern (-50<C2><B0> &lt; <CE><B4> &lt; -30<C2><B0>) galaxy clusters detected by the Planck satellite and the South Pole Telescope. Here, we report targeted GMRT observations (325/610 MHz) for a subsample of nine clusters. We also use the first data release of MeerKAT Galaxy Cluster Legacy Survey (1283 MHz) for five of these nine clusters. The properties of the mini-halo in RXC J0528.9-3927, a candidate mini-halo in A3322, the radio halo and candidate double relics in A3399, and the radio halo in RXC J0232.2-4420 are presented. We also report a detection of candidate radio relics at distances 1 and 1.9 Mpc from the centre of RXC J0232.2-4420. The southeast relic of A3399 is consistent with the radio power-mass scaling relation for radio relics, while the candidate relics around RXC J0232.2-4420 are outliers. This indicates an origin of the candidate relics near RXC J0232.2-4420 to be independent of this cluster and a cluster merger-shock origin for the relic in A3399. In this subsample of clusters, 1/9 hosts a radio halo and double relics, 1/9 hosts a radio halo and 2/9 host mini-haloes. The dynamical states based on X-ray morphology show that A3399 is a disturbed cluster; however, the radio halo cluster RXC J0232.2-4420 is relaxed, and the mini-halo clusters have intermediate morphologies, adding to the cases of the less commonly found associations.",
    "bibtex": "@ARTICLE{2022MNRAS.514.5969K,\n       author = {{Kale}, R. and {Parekh}, V. and {Rahaman}, M. and {Joshi}, D.~C. and {Venturi}, T. and {Kolokythas}, K. and {Chibueze}, J.~O. and {Sikhosana}, S. and {Pillay}, D. and {Knowles}, K.},\n        title = \"{SoUthern Cluster sCale Extended Source Survey (SUCCESS): a GMRT and Meerkat study of nine massive galaxy clusters}\",\n      journal = {\\mnras},\n     keywords = {acceleration of particles, radiation mechanisms: non-thermal, galaxies:clusters:individual: A3322, A3396, A3343, A3399, A3937, RXC J0232.2-4420, RXC J0528.9-3927, RXC J1358.9-4750, PSZ1 G313.85 + 19.21, galaxies: clusters: intracluster medium, radio continuum: galaxies, X-rays: galaxies: clusters, Astrophysics - Cosmology and Nongalactic Astrophysics, Astrophysics - Astrophysics of Galaxies},\n         year = 2022,\n        month = aug,\n       volume = {514},\n       number = {4},\n        pages = {5969-5986},\n          doi = {10.1093/mnras/stac1649},\narchivePrefix = {arXiv},\n       eprint = {2206.10895},\n primaryClass = {astro-ph.CO},\n       adsurl = {https://ui.adsabs.harvard.edu/abs/2022MNRAS.514.5969K},\n      adsnote = {Provided by the SAO/NASA Astrophysics Data System}\n}",
    "pdf": ""
  }
  ],

  // ── MY PAPERS ──────────────────────────────────────────────
  mypapers: [
    {
    "id": "mmxyr17i7yy5",
    "date": "2026-03-19",
    "title": "A radio bridge connecting the minihalo and phoenix in the Abell 85 cluster",
    "authors": "Raja, Ramij; Rahaman, Majidul; Datta, Abhirup; Smirnov, Oleg M.",
    "journal": "Monthly Notices of the Royal Astronomical Society 2023",
    "status": "published",
    "ads": "https://www.scixplorer.org/abs/2023MNRAS.526L..70R",
    "arxiv": "https://arxiv.org/abs/2308.09005",
    "tags": "",
    "cite": "",
    "abstract": "Galaxy clusters are located at the nodes of cosmic filaments and therefore host a lot of hydrodynamical activity. However, cool core clusters are considered to be relatively relaxed systems without much merging activity. The Abell 85 cluster is a unique example where the cluster hosts both a cool core and multiple ongoing merging processes. In this work, we used 700 MHz uGMRT as well as MeerKAT L-band observations, carried out as part of the MeerKAT Galaxy Cluster Legacy Survey (MGCLS), of the Abell 85. We reconfirm the presence of a minihalo in the cluster centre at 700 MHz that was recently discovered in MGCLS. Furthermore, we discovered a radio bridge connecting the central minihalo and the peripheral radio phoenix. The mean surface brightness, size, and flux density of the bridge at 700 MHz are found to be ~0.14 <C2><B5>Jy arcsec<SUP>-2</SUP>, ~220 kpc, and ~4.88 mJy, respectively, with a spectral index of $\\alpha _{700}^{1.28} = -0.92$. Although the origin of the seed relativistic electrons is still unknown, turbulent reacceleration caused by both the spiralling sloshing gas in the intracluster medium and the post-shock turbulence from the outgoing merging shock associated with the phoenix formation may be responsible for the bridge.",
    "bibtex": "@ARTICLE{2023MNRAS.526L..70R,\n       author = {{Raja}, Ramij and {Rahaman}, Majidul and {Datta}, Abhirup and {Smirnov}, Oleg M.},\n        title = \"{A radio bridge connecting the minihalo and phoenix in the Abell 85 cluster}\",\n      journal = {\\mnras},\n     keywords = {radiation mechanisms: non-thermal, galaxies: clusters: general, galaxies: clusters: individual: Abell 85, galaxies: clusters: intracluster medium, radio continuum: general, Astrophysics - High Energy Astrophysical Phenomena, Astrophysics - Astrophysics of Galaxies},\n         year = 2023,\n        month = nov,\n       volume = {526},\n       number = {1},\n        pages = {L70-L76},\n          doi = {10.1093/mnrasl/slad117},\narchivePrefix = {arXiv},\n       eprint = {2308.09005},\n primaryClass = {astro-ph.HE},\n       adsurl = {https://ui.adsabs.harvard.edu/abs/2023MNRAS.526L..70R},\n      adsnote = {Provided by the SAO/NASA Astrophysics Data System}\n}",
    "pdf": "./pdf/Raja_2023MNRAS_526L_70R.pdf",
    "arxivId": "2308.09005",
    "source": "scix"
  },
  {
    "id": "mmwel9l5pj4p",
    "date": "2026-03-18",
    "title": "A radio bridge connecting the minihalo and phoenix in the Abell 85 cluster",
    "authors": "Raja, Ramij; Rahaman, Majidul; Datta, Abhirup; Smirnov, Oleg M.",
    "journal": "Monthly Notices of the Royal Astronomical Society 2023",
    "status": "published",
    "ads": "https://ui.adsabs.harvard.edu/abs/2023MNRAS.526L..70R",
    "arxiv": "https://arxiv.org/abs/2308.09005",
    "tags": "",
    "cite": "",
    "abstract": "Galaxy clusters are located at the nodes of cosmic filaments and therefore host a lot of hydrodynamical activity. However, cool core clusters are considered to be relatively relaxed systems without much merging activity. The Abell 85 cluster is a unique example where the cluster hosts both a cool core and multiple ongoing merging processes. In this work, we used 700 MHz uGMRT as well as MeerKAT L-band observations, carried out as part of the MeerKAT Galaxy Cluster Legacy Survey (MGCLS), of the Abell 85. We reconfirm the presence of a minihalo in the cluster centre at 700 MHz that was recently discovered in MGCLS. Furthermore, we discovered a radio bridge connecting the central minihalo and the peripheral radio phoenix. The mean surface brightness, size, and flux density of the bridge at 700 MHz are found to be ~0.14 <C2><B5>Jy arcsec<SUP>-2</SUP>, ~220 kpc, and ~4.88 mJy, respectively, with a spectral index of $\\alpha _{700}^{1.28} = -0.92$. Although the origin of the seed relativistic electrons is still unknown, turbulent reacceleration caused by both the spiralling sloshing gas in the intracluster medium and the post-shock turbulence from the outgoing merging shock associated with the phoenix formation may be responsible for the bridge.",
    "bibtex": "@ARTICLE{2023MNRAS.526L..70R,\n       author = {{Raja}, Ramij and {Rahaman}, Majidul and {Datta}, Abhirup and {Smirnov}, Oleg M.},\n        title = \"{A radio bridge connecting the minihalo and phoenix in the Abell 85 cluster}\",\n      journal = {\\mnras},\n     keywords = {radiation mechanisms: non-thermal, galaxies: clusters: general, galaxies: clusters: individual: Abell 85, galaxies: clusters: intracluster medium, radio continuum: general, Astrophysics - High Energy Astrophysical Phenomena, Astrophysics - Astrophysics of Galaxies},\n         year = 2023,\n        month = nov,\n       volume = {526},\n       number = {1},\n        pages = {L70-L76},\n          doi = {10.1093/mnrasl/slad117},\narchivePrefix = {arXiv},\n       eprint = {2308.09005},\n primaryClass = {astro-ph.HE},\n       adsurl = {https://ui.adsabs.harvard.edu/abs/2023MNRAS.526L..70R},\n      adsnote = {Provided by the SAO/NASA Astrophysics Data System}\n}",
    "pdf": "./pdf/Raja_2023MNRAS_526L_70R.pdf",
    "arxivId": "2308.09005",
    "source": "ads"
  },
  {
    "id": "mmnobiuk365r",
    "date": "2026-03-12",
    "title": "SoUthern Cluster sCale Extended Source Survey (SUCCESS): a GMRT and Meerkat study of nine massive galaxy clusters",
    "authors": "Kale, R.; Parekh, V.; Rahaman, M.; Joshi, D. C.; Venturi, T.; Kolokythas, K.; Chibueze, J. O.; Sikhosana, S. et al.",
    "journal": "Monthly Notices of the Royal Astronomical Society 2022",
    "status": "published",
    "ads": "https://ui.adsabs.harvard.edu/abs/2022MNRAS.514.5969K",
    "arxiv": "https://arxiv.org/abs/2206.10895",
    "tags": "",
    "cite": "",
    "abstract": "We aim to carry out a radio study of the SoUthern Cluster sCale Extended Source Survey (SUCCESS) sample consisting of 20 massive (M<SUB>500</SUB> &gt; 5 <C3><97> 10<SUP>14</SUP> M<SUB><E2><8<8A><99></SUB>), nearby (redshift &lt;0.3) and southern (-50<C2><B0> &lt; <CE><B4> &lt; -30<C2><B0>) galaxy clusters detected by the Planck satellite and the South Pole Telescope. Here, we report targeted GMRT observations (325/610 MHz) for a subsample of nine clusters. We also use the first data release of MeerKAT Galaxy Cluster Legacy Survey (1283 MHz) for five of these nine clusters. The properties of the mini-halo in RXC J0528.9-3927, a candidate mini-halo in A3322, the radio halo and candidate double relics in A3399, and the radio halo in RXC J0232.2-4420 are presented. We also report a detection of candidate radio relics at distances 1 and 1.9 Mpc from the centre of RXC J0232.2-4420. The southeast relic of A3399 is consistent with the radio power-mass scaling relation for radio relics, while the candidate relics around RXC J0232.2-4420 are outliers. This indicates an origin of the candidate relics near RXC J0232.2-4420 to be independent of this cluster and a cluster merger-shock origin for the relic in A3399. In this subsample of clusters, 1/9 hosts a radio halo and double relics, 1/9 hosts a radio halo and 2/9 host mini-haloes. The dynamical states based on X-ray morphology show that A3399 is a disturbed cluster; however, the radio halo cluster RXC J0232.2-4420 is relaxed, and the mini-halo clusters have intermediate morphologies, adding to the cases of the less commonly found associations.",
    "bibtex": "@ARTICLE{2022MNRAS.514.5969K,\n       author = {{Kale}, R. and {Parekh}, V. and {Rahaman}, M. and {Joshi}, D.~C. and {Venturi}, T. and {Kolokythas}, K. and {Chibueze}, J.~O. and {Sikhosana}, S. and {Pillay}, D. and {Knowles}, K.},\n        title = \"{SoUthern Cluster sCale Extended Source Survey (SUCCESS): a GMRT and Meerkat study of nine massive galaxy clusters}\",\n      journal = {\\mnras},\n     keywords = {acceleration of particles, radiation mechanisms: non-thermal, galaxies:clusters:individual: A3322, A3396, A3343, A3399, A3937, RXC J0232.2-4420, RXC J0528.9-3927, RXC J1358.9-4750, PSZ1 G313.85 + 19.21, galaxies: clusters: intracluster medium, radio continuum: galaxies, X-rays: galaxies: clusters, Astrophysics - Cosmology and Nongalactic Astrophysics, Astrophysics - Astrophysics of Galaxies},\n         year = 2022,\n        month = aug,\n       volume = {514},\n       number = {4},\n        pages = {5969-5986},\n          doi = {10.1093/mnras/stac1649},\narchivePrefix = {arXiv},\n       eprint = {2206.10895},\n primaryClass = {astro-ph.CO},\n       adsurl = {https://ui.adsabs.harvard.edu/abs/2022MNRAS.514.5969K},\n      adsnote = {Provided by the SAO/NASA Astrophysics Data System}\n}",
    "pdf": ""
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
