# Deployment & Hosting Guide

## Overview

The portfolio is architected as a high-performance static web application, allowing deployment on modern global edge CDNs with zero compute costs, sub-100ms global latency, and automatic TLS encryption.

---

## Recommended Deployment Providers

### 1. Vercel (Recommended)
Vercel provides automated Git integration, preview deployments on pull requests, and automated asset compression.

**Configuration (`vercel.json`):**
```json
{
  "cleanUrls": true,
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

**One-Click Deployment:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy directly from repository root
vercel --prod
```

---

### 2. GitHub Pages
Directly serve from this repository using native GitHub Pages:
1. Navigate to **Settings** &rarr; **Pages** in the GitHub repository.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose branch `main` and folder `/ (root)`.
4. Click **Save**. The portfolio will be live at `https://naitiksharma7804.github.io/Portfolio/`.

---

### 3. Netlify
Netlify deployment via CLI or continuous integration:
```bash
# Deploy to Netlify
npx netlify-cli deploy --prod --dir=.
```

---

## Production Readiness Checklist

- [x] Canonical link tags verified in `<head>`
- [x] OpenGraph meta image (`preview.png`) resolvable
- [x] Validated semantic HTML5 markup
- [x] Responsive layout tested across Mobile, Tablet, and Desktop
- [x] PDF resume assets verified and reachable
- [x] Verified external links to GitHub, LinkedIn, and live project demos
