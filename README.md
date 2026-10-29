# Animal Encyclopedia — Gamility Explorer

> **An interactive, client-side digital encyclopedia celebrating the biodiversity of Earth's animal kingdom.**

A completely self-contained, responsive, zero-dependency educational application featuring 39 extensively researched species dossiers, multi-biome geographical exploration, side-by-side comparative analytics, bio-acoustic animal vocalization synthesizer (Web Audio API), interactive IUCN Red List conservation auditing, and an animal classification trivia quiz.

---

## 🌟 Key Features

1. **Rich Species Dossiers (39 Species):**
   - Scientific nomenclature (Class, Order, Family, Genus, Species).
   - Detailed biological metrics: Lifespan, top speed, adult weight, body length, bite force, and diet classification.
   - IUCN Red List conservation status with official color badges (Least Concern, Near Threatened, Vulnerable, Endangered, Critically Endangered).
   - Ecological niche, key adaptations, primary predators/prey, and 3 verified fun facts per species.

2. **Multi-Biome Habitat Filtering:**
   - Filter species across major planetary biomes:
     - 🌊 Oceans & Marine
     - 🌴 Tropical Rainforests
     - 🌾 Savannah & Grasslands
     - ❄️ Arctic & Polar Tundra
     - 🏜️ Deserts & Arid Lands
     - 🌲 Temperate & Boreal Forests
     - 🏔️ High Alpine & Mountain Ranges

3. **Taxonomic Class & Trait Sorters:**
   - Filter by taxonomic class: Mammalia, Aves (Birds), Reptilia, Amphibia, Actinopterygii / Chondrichthyes (Fish), and Invertebrates.
   - Dynamic sorting by Top Speed, Lifespan, Weight, or Alphabetical name.

4. **Interactive Animal Comparison Matrix:**
   - Select and pin up to 3 species side-by-side.
   - Real-time comparative visual bar charts for Speed, Weight, and Lifespan against animal kingdom extremes (e.g. Peregrine Falcon vs Cheetah vs Blue Whale).

5. **Authentic Wildlife Field Recordings & Photorealistic Photography:**
   - Dual-mode bio-acoustic engine streaming authentic field recordings from open-access repositories (Google Actions wildlife library & Wikimedia Commons) with animated audio equalizer waveform visualizer.
   - Built-in procedural Web Audio synthesizer safety net if operating in an offline environment.
   - High-definition nature photography from Unsplash with graceful fallback ensuring crisp, realistic visual identification.

6. **Daily Wildlife Quiz Master:**
   - Fast, interactive multiple-choice trivia challenge testing your knowledge on taxonomy, biomes, record-breakers, and evolutionary adaptations with streak tracking.

7. **100% Client-Side & Offline Ready:**
   - Zero telemetry, zero external tracking, zero dependencies. Runs flawlessly offline or on any static hosting environment (GitHub Pages, Vercel, Netlify).

---

## 🚀 Running Locally

Open `index.html` directly in any modern desktop or mobile web browser. No installation, server, or build step is required:

```bash
# Optional local development server
python -m http.server 8080
# Open http://localhost:8080 in your browser
```

---

## 📁 Repository Structure

```
explorer/animal-encyclopedia/
├── index.html          # Main HTML structure with semantic tags & accessible controls
├── style.css           # Modern emerald dark glassmorphism design system
├── app.js              # Comprehensive species database, search, filtering, audio & quiz
├── favicon.svg         # High-resolution vector paw print badge
├── site.webmanifest    # Progressive Web App (PWA) manifest
├── robots.txt          # Search engine crawler directives
├── sitemap.xml         # XML sitemap for SEO discovery
├── .gitignore          # Repository hygiene
└── README.md           # Documentation & copyright
```

---

## 📜 Copyright Notice

Copyright © 2026 Gamility (All Rights Reserved).  
Part of the [Gamility Platform](https://mahesh-yennam.github.io/Gamility/).
