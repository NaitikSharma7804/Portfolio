# Contributing & Local Development Guidelines

## Getting Started

Thank you for exploring this repository. While this is primarily a personal portfolio site, suggestions, bug reports, and enhancements are welcome via GitHub Issues and Pull Requests.

---

## Local Development Workflow

### Prerequisites
- Modern web browser (Chrome, Edge, Firefox, Safari)
- Python 3.8+ OR Node.js 18+ (for local HTTP servers)
- Git 2.30+

### Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/NaitikSharma7804/Portfolio.git
   cd Portfolio
   ```

2. **Launch a development server:**
   - **Using Python:**
     ```bash
     python -m http.server 5500
     ```
   - **Using Node.js:**
     ```bash
     npx serve . -p 5500
     ```

3. **Open in browser:**
   Navigate to `http://localhost:5500`.

---

## Code Quality Standards

### HTML Structure
- Use semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- All interactive controls (`<button>`, `<a>`) must contain accessible `aria-label` or visible text content.
- External links must include `rel="noopener noreferrer"` and `target="_blank"`.

### CSS Formatting
- Rely on CSS custom properties defined in `:root` for colors and fonts.
- Maintain mobile-first responsive breakpoints (`min-width: 576px`, `768px`, `1024px`, `1200px`).
- Avoid arbitrary hard-coded hex colors; use design tokens from `docs/DESIGN_SYSTEM.md`.

### JavaScript Patterns
- Clean modular ES6+ syntax without external framework dependencies.
- Update data values exclusively inside `assets/js/portfolio-data.js`.
- Use event delegation and `requestAnimationFrame` for performance-critical DOM listeners.
