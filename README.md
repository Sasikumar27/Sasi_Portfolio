# Sasikumar C — Portfolio

> Personal portfolio website of **Sasikumar C**, Flutter & Mobile App Developer with 2.5 years of experience building cross-platform Android & iOS apps.

[![Live Demo](https://img.shields.io/badge/Live-Demo-7c6fff?style=for-the-badge&logo=vercel&logoColor=white)](https://your-portfolio-url.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![HTML](https://img.shields.io/badge/Built_with-HTML%2FCSS%2FJS-orange?style=for-the-badge&logo=html5&logoColor=white)](.)

---

## ✨ Features

- 🌙 **Dark / ☀️ Light theme** toggle — persists across sessions via localStorage
- 🖱️ **Custom animated cursor** with smooth lag ring (desktop)
- 🎞️ **Scroll-triggered reveal animations** on every section
- 🗂️ **Tabbed experience section** — switch between Syncfusion, Zoho, Roots India
- 📊 **Animated skill bars** that fill on scroll into view
- 🔄 **Infinite marquee rows** of tech stack pills (two directions)
- 📬 **Contact form** with subject selector and send feedback
- 📱 **Fully responsive** — mobile, tablet, and desktop
- ⚡ **Zero dependencies** — pure HTML, CSS, and vanilla JS. No frameworks, no build step.

---

## 📸 Preview

| Dark Theme | Light Theme |
|---|---|
| ![Dark](./preview-dark.png) | ![Light](./preview-light.png) |

> Add screenshots to the repo root as `preview-dark.png` and `preview-light.png`.

---

## 🗂️ Project Structure

```
portfolio/
├── index.html              ← Single-file portfolio (all HTML + CSS + JS)
├── Sasikumar_C_Resume.docx ← Resume (linked from the Resume button)
├── preview-dark.png        ← Screenshot for README (add manually)
├── preview-light.png       ← Screenshot for README (add manually)
└── README.md               ← This file
```

---

## 🚀 Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **Hero** | Name, role, CTAs, and key stats |
| 02 | **About** | Bio, stat grid, and current role badge |
| 03 | **Experience** | Tabbed work history — Syncfusion, Zoho, Roots India |
| 04 | **Skills** | Animated marquees + skill progress bars |
| 05 | **Projects** | BoldSign, xPen, Thoughts Sharing, To-Do App, Rock Paper Scissors |
| 06 | **Contact** | Contact links + enquiry form |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, keyframe animations, grid, flexbox) |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | [Outfit](https://fonts.google.com/specimen/Outfit) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts |
| Hosting | Netlify / Vercel / GitHub Pages (any static host) |

---

## ⚙️ Getting Started

No build tools needed. Just open the file.

### Option 1 — Open locally
```bash
git clone https://github.com/Sasikumar27/portfolio.git
cd portfolio
open index.html    # macOS
# or just double-click index.html in your file explorer
```

### Option 2 — Deploy to Netlify (recommended, free)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the `index.html` file
3. Your site is live in ~30 seconds ✅

### Option 3 — Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Option 4 — GitHub Pages
1. Push this repo to GitHub
2. Go to **Settings → Pages → Source: main branch / root**
3. Rename `index.html` if needed and enable Pages

---

## 🎨 Customisation

All colours are CSS custom properties — easy to retheme.

```css
/* Change accent colour */
/* Search and replace #7c6fff with your preferred colour */

/* Key variables used throughout */
--accent:   #7c6fff;   /* purple accent */
--accent-2: #a78bfa;   /* lighter purple */
--green:    #4ade80;   /* "live" status */
--amber:    #fbbf24;   /* "coming soon" status */
```

To update your details, search for the following placeholders in `index.html`:

| Placeholder | Replace with |
|-------------|-------------|
| `sasikumarc02@gmail.com` | Your email |
| `+91 9894219613` | Your phone |
| `sasikumar-c-225874212` | Your LinkedIn ID |
| `Sasikumar27` | Your GitHub username |
| `Sasikumar_C_Resume.docx` | Your resume filename |
| `Coming Soon` (xPen) | Play Store link once live |

---

## 📋 Roadmap / TODO

- [ ] Add xPen Play Store link once published
- [ ] Add `preview-dark.png` and `preview-light.png` screenshots
- [ ] Connect contact form to a backend (e.g. [Formspree](https://formspree.io/) — free tier)
- [ ] Add a custom domain (e.g. `sasikumar.dev`)
- [ ] Add a Blog section once content is ready

### Connecting the contact form (Formspree — free, no backend needed)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → copy your endpoint URL
3. In `index.html`, find `id="cForm"` and add `action="https://formspree.io/f/YOUR_ID" method="POST"`
4. Remove the `onsubmit="doSubmit(event)"` attribute — Formspree handles the rest

---

## 📄 License

MIT — feel free to use this as inspiration for your own portfolio. If you do, a credit or star would be appreciated! ⭐

---

<div align="center">

Built with 💜 by **Sasikumar C** — Flutter Developer, Erode, Tamil Nadu 🇮🇳

[Email](mailto:sasikumarc02@gmail.com) · [LinkedIn](https://www.linkedin.com/in/sasikumar-c-225874212) · [GitHub](https://github.com/Sasikumar27)

</div>
