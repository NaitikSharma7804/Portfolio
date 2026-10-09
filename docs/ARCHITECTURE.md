# Portfolio System Architecture

## Overview

This repository houses the personal engineering portfolio of **Naitik Sharma**, Computer Science & Engineering student at MIT World Peace University (MIT-WPU), Pune. The architecture is engineered around the principles of ultra-fast load times, zero runtime dependencies, high visual aesthetic fidelity, and recruiter-focused information hierarchy.

---

## High-Level Architecture Diagram

```
+-------------------------------------------------------------+
|                        Browser Client                       |
+-------------------------------------------------------------+
                               |
         +---------------------+---------------------+
         |                     |                     |
         v                     v                     v
+-----------------+   +-----------------+   +-----------------+
| Semantic HTML5  |   | Modular CSS3    |   | Client Scripts  |
| (index.html)    |   | (styles.css)    |   | (main.js)       |
+-----------------+   +-----------------+   +-----------------+
         |                     |                     |
         +---------------------+---------------------+
                               |
                               v
               +-------------------------------+
               | Centralized Data Repository   |
               | (portfolio-data.js)           |
               +-------------------------------+
                               |
                               v
               +-------------------------------+
               | Verified External Touchpoints |
               | - GitHub Repositories         |
               | - Live Demo Deployments       |
               | - Resume PDF Download         |
               +-------------------------------+
```

---

## Component Breakdown

### 1. Presentation Layer (`index.html`)
- **Semantic HTML5:** Native landmark tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) ensuring screen reader compatibility and semantic hierarchy.
- **OpenGraph & SEO Meta Tags:** Rich preview cards for social platforms (LinkedIn, Twitter) and meta robots configuration.
- **Remixicon Iconography:** Scalable vector glyphs loaded via lightweight CDN for crisp high-DPI rendering.

### 2. Styling System (`assets/css/styles.css`)
- **CSS Custom Properties (Variables):** Centralized design tokens for colors, typography scales, spacing, border radii, and transitions.
- **Glassmorphism & Surface Elevation:** Layered translucent cards with `backdrop-filter: blur()` and subtle border highlights.
- **Responsive Flexbox & Grid:** Mobile-first layout with smooth fluid transitions across viewports (320px to 4K).

### 3. Logic & Interaction Engine (`assets/js/main.js`)
- **Typed.js Integration:** Dynamic typing simulation representing engineering specializations.
- **Intersection Observer API:** Efficient scroll-spy navigation triggering active navigation highlighting without layout thrashing.
- **Circular Rotating Badge:** Pure SVG and CSS rotation engine animating the signature Bianca badge.

### 4. Configuration & Data Isolation (`assets/js/portfolio-data.js`)
- **Decoupled Content Schema:** Separates project metadata, live demo links, repository URLs, and personal details from DOM manipulation logic.
- **Single Source of Truth:** Allows non-destructive updates to contact information and project status.

---

## Reliability & Performance Principles

1. **Zero Framework Overhead:** Pure Vanilla HTML/CSS/JS eliminates hydration delays, delivering sub-second First Contentful Paint (FCP).
2. **Asset Compression:** SVG icons and WebP/optimized PNG imagery minimized to keep overall bundle size under 1.5MB.
3. **Graceful Degradation:** Core content remains fully readable and accessible even with scripts disabled.
