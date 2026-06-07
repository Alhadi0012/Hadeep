# Hadeep Office — Portfolio Web App

**Hadeep Office for Software Solutions** · Light Mode · Modular React

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your images (see Assets below)

# 3. Start dev server
npm start

# 4. Production build
npm run build
```

---

## Project Structure

```
src/
├── App.jsx                   ← Root: assembles all sections
├── index.js                  ← React DOM entry point
│
├── styles/
│   ├── tokens.css            ← Design tokens (colors, fonts, shadows, spacing)
│   └── global.css            ← Reset, animations, utility classes
│
├── data/
│   └── content.js            ← All site content (projects, services, stats, etc.)
│
├── hooks/
│   └── index.js              ← useInView · useCounter · useScrollY
│
├── components/
│   ├── Header.jsx            ← Fixed nav with scroll-aware glass effect
│   ├── Hero.jsx              ← Split-screen hero with image + floating chips
│   ├── StatsBar.jsx          ← Animated counter bar (4 key metrics)
│   ├── Services.jsx          ← 2×2 service card grid
│   ├── PortfolioGrid.jsx     ← Filterable project grid + detail modal
│   ├── About.jsx             ← Two-column about section with credentials
│   ├── ContactForm.jsx       ← Functional form (mailto) + contact channels
│   └── Footer.jsx            ← Full footer with links and social icons
│
└── assets/
    ├── logo.png              ← Your logo (used in nav/header)
    └── hero.png              ← Your hero/profile image (used in Hero + About)
```

---

## Adding Your Images

Place your images in `src/assets/`:

```
src/assets/logo.png    ← Company or personal logo
src/assets/hero.png    ← Primary showcase / profile photo
```

Both components (`Hero.jsx` and `About.jsx`) show a styled placeholder automatically if the image file isn't found, so the app never breaks.

---

## Editing Content

All site content lives in **one file**: `src/data/content.js`

### Add / Remove Projects
```js
// src/data/content.js
export const PROJECTS = [
  {
    id: "p007",                          // Unique ID
    title: "Your Project Name",
    tag: "Web",                          // Web | Mobile | Security | Systems
    year: "2025",
    summary: "One-line description",
    detail: "Full case study paragraph",
    stack: ["React", "Node.js"],
    metric: "Key result metric",
    metricColor: "#00C853",              // Color for the metric badge
    live: "https://your-live-url.com",
  },
  // ...
];
```

### Update Contact Info
```js
export const CONTACT_EMAIL = "hadeepline@gmail.com";
export const WHATSAPP_LINK = "https://wa.me/249920200205";
export const TELEGRAM_LINK = "https://t.me/hadiHusien";
```

---

## Design System

### Color Palette (Light Mode)
| Token             | Value     | Usage                         |
|-------------------|-----------|-------------------------------|
| `--blue-deep`     | `#0A1628` | Text headings                 |
| `--blue-corp`     | `#0F2557` | Logo, dark accents            |
| `--blue-bright`   | `#1D6FD8` | Primary interactive elements  |
| `--sky`           | `#29B6F6` | Secondary accents, gradients  |
| `--green`         | `#00C853` | Success, availability badges  |
| `--white`         | `#FFFFFF` | Primary backgrounds           |
| `--gray-50`       | `#F1F5F9` | Section alt-backgrounds       |

### Typography
- **Display / Headings**: [Syne](https://fonts.google.com/specimen/Syne) — Bold, geometric, distinctive
- **Body / UI**: [DM Sans](https://fonts.google.com/specimen/DM+Sans) — Clean, readable, professional

Both loaded from Google Fonts via CSS in `tokens.css`.

---

## Contact Form

The "Send Message" button:
1. **Validates** all required fields (name, email, message)
2. **Opens your email client** via `mailto:hadeepline@gmail.com` with subject & body pre-filled
3. **Shows a success screen** inside the form

To switch to a backend form handler (e.g. EmailJS, Formspree, SendGrid), replace the `handleSubmit` function in `ContactForm.jsx`.

---

## Deployment

Works out-of-the-box with:
- **Vercel**: `vercel --prod`
- **Netlify**: drag `build/` folder to Netlify UI
- **GitHub Pages**: use `gh-pages` package
- **Any static host**: run `npm run build`, deploy the `build/` folder

---

## Tech Stack
- React 18 (functional components + hooks)
- Pure CSS-in-JS via inline styles + CSS custom properties
- Google Fonts (Syne + DM Sans)
- IntersectionObserver for scroll animations
- No external UI library dependencies
