# Visual Identity & Design System Specification

## Overview

The portfolio's visual language is evolved from the **Bianca** design aesthetic — combining deep obsidian surfaces with vibrant lime accents (`#8AFF65`), high-contrast typography, and developer-centric terminal aesthetics.

---

## 🎨 Color Palette Tokens

### Surface & Background Tokens
| Token | Hex Value | Role |
|-------|-----------|------|
| `--body-color` | `#0B0D0B` | Primary Canvas / Viewport Background |
| `--container-color` | `#111411` | Secondary Section Background |
| `--card-color` | `#151915` | Elevated Card Surfaces |
| `--card-color-hover`| `#1A201A` | Interactive Hover Surface |
| `--border-color` | `#293029` | Structural Borders & Dividers |
| `--border-color-light` | `#3A443A` | Interactive Border Highlights |

### Brand & Accent Tokens
| Token | Hex Value | Role |
|-------|-----------|------|
| `--first-color` | `#8AFF65` | Bianca Lime Accent (Primary Brand Color) |
| `--first-color-alt` | `#78E054` | Lime Accent Active / Pressed State |
| `--first-color-glow`| `rgba(138, 255, 101, 0.15)` | Ambient Backlight Glow |

### Typography Tokens
| Token | Hex Value | Role |
|-------|-----------|------|
| `--title-color` | `#F5F7F3` | Primary Headings & High-Emphasis Text |
| `--text-color` | `#D0D7CF` | Body Copy & Descriptions |
| `--text-color-light`| `#8E968D` | Secondary Metadata & Micro-copy |

---

## 🔤 Typography Hierarchy

- **Display & Headings:** `Syne` (Weights: 500, 600, 700, 800)
  - Geometric character structure providing commanding editorial presence.
- **Body & Interface:** `Poppins` (Weights: 300, 400, 500, 600)
  - Highly legible sans-serif optimized for long-form reading across small screens.
- **Code & Monospace:** `JetBrains Mono`
  - Crisp ligatures and clear distinction between similar characters for terminal cards.

---

## 📐 Spacing & Elevation Scale

- **Gaps:** `0.5rem` (8px), `1rem` (16px), `1.5rem` (24px), `2rem` (32px), `3rem` (48px)
- **Border Radius:**
  - Micro: `8px` (Buttons, Badges)
  - Card: `16px` (Project Cards, Experience Items)
  - Container: `24px` (Major Section Wrappers)
- **Glassmorphism Spec:**
  ```css
  background: rgba(21, 25, 21, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(138, 255, 101, 0.12);
  ```

---

## ⚡ Interactive Micro-Animations

1. **Magnetic Hover:** Interactive cards lift `translateY(-6px)` with smooth cubic bezier transitions.
2. **Rotating Badge:** Signature 360-degree continuous CSS rotation keyframe at `20s linear infinite`.
3. **Pulsing Status Dots:** Live availability beacon pulsating between opacity `0.4` and `1.0`.
