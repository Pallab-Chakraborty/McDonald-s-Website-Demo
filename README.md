# 🍔 McDonald's Website Clone — I'm Lovin' It

[![Deploy to GitHub Pages](https://github.com/Pallab-Chakraborty/McDonald-s-Website-Demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/Pallab-Chakraborty/McDonald-s-Website-Demo/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

> Live site: https://pallab-chakraborty.github.io/McDonald-s-Website-Demo/

A pixel-faithful, fully interactive McDonald's website clone built with pure HTML, CSS, and JavaScript. Features a live cart system, multi-step checkout, real-time order tracking, a complete menu, and an AI-ordering-assistant demo — all without any backend or framework.

---

## ✨ Features

- 🤖 **McBot demo panel** — a scripted preview of an AI ordering-assistant conversation (see [note](#-about-the-ai-chat-panel) below)
- 🛒 **Live shopping cart** — add/remove items with real-time price updates
- 📋 **Multi-step checkout** — Cart → Delivery → Payment → Confirmation flow
- 💳 **Multiple payment options** — card, Google Pay, UPI, and cash on delivery
- 📍 **Delivery & pickup mode** — address form for delivery or restaurant pickup
- 🎁 **Deals section** — flash deals and combo offers with countdown urgency
- 📱 **Responsive design** — works on mobile, tablet, and desktop
- 🏷️ **Menu with categories** — burgers, sides, drinks, desserts, breakfast, McCafé
- ⭐ **Customer reviews** — testimonials section with star ratings
- 📊 **Loyalty points mockup** — visual app-style rewards preview
- 🎉 **Order confirmation** — live order-tracking animation after checkout

---

## 🛠️ Built with

| Technology | Usage |
|---|---|
| HTML5 | Semantic structure and layout |
| CSS3 | Styling, animations, and responsive design |
| JavaScript (vanilla) | Cart logic, checkout flow, interactivity |
| GitHub Pages | Deployment and hosting |

No frameworks, no build step, no dependencies.

---

## 📁 Project structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml   CI: auto-deploys to GitHub Pages on every push to main
├── index.html           Page structure and markup
├── css/
│   └── styles.css       All styling (layout, animations, responsive rules)
├── js/
│   ├── data.js            The MENU dataset
│   ├── cart.js             Add/remove/update cart items, cart rendering
│   ├── checkout.js         Multi-step checkout, delivery, payment, order tracking
│   ├── menu.js              Menu rendering + category filtering
│   └── ui.js                 Shared state, cart drawer open/close, toasts, nav, scroll animations
├── package.json          Project metadata + local dev script (no build step)
├── LICENSE               MIT
└── README.md
```

---

## 🤖 About the AI chat panel

The "AI Section" on the page is a **static, scripted preview** of what an AI-ordering-assistant conversation could look like — the chat bubbles are hardcoded markup, not a live model call. This keeps the project a pure static site that runs with zero setup on GitHub Pages. If you want to wire it up to a real model:

1. Get an API key from your model provider of choice (e.g. [console.anthropic.com](https://console.anthropic.com) for Claude).
2. Because GitHub Pages only serves static files, you'll need a small server-side proxy (a Cloudflare Worker, Vercel/Netlify function, etc.) to hold the key — never ship an API key directly in client-side JS on a public repo.
3. Replace the static chat markup in `index.html` with a small input + fetch call to your proxy, and render the response in a new `js/chat.js` module.

---

## 🚀 Getting started

Clone and run locally — no build tools, npm, or dependencies required:

```bash
git clone https://github.com/Pallab-Chakraborty/McDonald-s-Website-Demo.git
cd McDonald-s-Website-Demo
npm start
# serves the site at http://localhost:8000
```

or, without npm:

```bash
python3 -m http.server 8000
```

---

## 🌐 Deploying to GitHub Pages

This repo ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that deploys automatically.

1. Push these files to your repo (replacing the old single-file `index.html`).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **"GitHub Actions"**.
4. Push to `main` (or run the workflow manually from the **Actions** tab).
5. GitHub publishes to `https://<username>.github.io/<repo-name>/` within a minute or two — the badge at the top of this README tracks deploy status.

(The classic "Deploy from a branch" method under Settings → Pages also works if you'd rather skip the Actions workflow — just delete `.github/workflows/deploy.yml`.)

---

## 📁 Sections overview

| Section | Description |
|---|---|
| **Hero** | Full-screen landing with CTA buttons and key stats |
| **Ticker** | Auto-scrolling announcement banner |
| **Menu** | Filterable menu grid with category tabs and add-to-cart |
| **Deals** | Limited-time combo offers with pricing |
| **How It Works** | 4-step order process |
| **AI section** | Scripted McBot chat preview (see note above) |
| **Reviews** | Customer testimonials with star ratings |
| **App section** | App download CTA with app mockup |
| **Footer** | Navigation links, social icons, legal info |
| **Cart drawer** | Slide-in cart with item list and checkout entry point |
| **Checkout modal** | 3-step checkout: delivery → payment → confirmation |

---

## 👨‍💻 Developed by

**Pallab Chakraborty** — B.Tech CSE Student, Jawaharlal Nehru University, New Delhi

- GitHub: [Pallab-Chakraborty](https://github.com/Pallab-Chakraborty)
- LinkedIn: [pallabchakrabortyjnu](https://www.linkedin.com/in/pallabchakrabortyjnu/)

---

## ⚠️ Disclaimer

This project is built **for educational and portfolio purposes only**. McDonald's, the McDonald's logo, and all related trademarks are the property of McDonald's Corporation. This project is not affiliated with or endorsed by McDonald's in any way.

---

## 📄 License

MIT — see [LICENSE](./LICENSE). Note the trademark disclaimer inside the license file: the code is MIT-licensed, but the McDonald's brand assets are not.
