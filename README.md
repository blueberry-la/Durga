<div align="center">

  # ⚡ DURGA S. — EDITORIAL ENGINEERING & DEVOPS PORTFOLIO

  <p align="center">
    <b>A high-performance, editorial-grade engineering portfolio built with Next.js 15, React 19, TypeScript, and Framer Motion.</b>
  </p>

  <p align="center">
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 15" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-11.0-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /></a>
  </p>

  <br />
</div>

---

## 📌 Executive Overview

This repository houses the personal, editorial-style web application for **Durga S.** — Co-Founder & CTO at **CorePro Techno LLP**, Full-Stack Developer, and DevOps Practitioner.

The platform is designed around a high-contrast dark aesthetic with crimson glassmorphism accents, editorial typography, and interactive micro-animations to showcase technical leadership, software engineering projects, system architecture capabilities, and an active DevOps roadmap (Linux, Docker, CI/CD, Cloud Infrastructure).

---

## ✨ Key Architectural & Design Highlights

- **⚡ Modern Next.js 15 (App Router) & React 19**: Built with server/client component optimization, zero layout shifts, and fast loading performance.
- **🎨 Editorial Dark & Crimson Aesthetic**: Features customized typography (Bodoni Moda serif, JetBrains Mono, Inter), subtle background grid overlays, and ambient illumination glows.
- **🎬 Interactive UI Micro-Animations**:
  - **Cinematic Preloader**: Animated intro sequence with progress indicators.
  - **Custom Cursor Engine**: Real-time cursor state management and magnetic hover effects.
  - **Parallax Scroll**: Smooth parallax motion powered by Framer Motion.
  - **Dual Infinite Marquees**: Seamless scrolling text tickers for skills and engineering vision.
  - **Interactive Project Showcase**: Expandable project details modal and quick-view filters.
- **📱 Fully Fluid & Responsive**: Responsive layout math via dynamic CSS `clamp()` bounds across mobile, tablet, and ultra-wide displays.
- **🛡️ Direct Contact & Copy Utility**: Native clipboard interaction for direct email reach-out (`d66190721@gmail.com`) and social integrations.

---

## 🛠️ Technology Matrix

| Category | Technology | Usage in Project |
| :--- | :--- | :--- |
| **Core Framework** | **Next.js 15.0** | App Router, Server Components & Page Routing |
| **UI Library** | **React 19.0** | Interactive client state & modular component architecture |
| **Language** | **TypeScript 5.x** | Static type safety and strict component props |
| **Styling System** | **Tailwind CSS 3.4** | Custom color tokens, glassmorphism utilities, and layout grids |
| **Animations** | **Framer Motion 11.x** | Parallax scroll, entry motion, modal transitions, and marquee loops |
| **Iconography** | **Lucide React** | Clean pixel-perfect interface icons |
| **Style Utilities** | `clsx` & `tailwind-merge` | Conditional class joining and class conflict resolution |

---

## 📂 Project Architecture

```text
my-portfolio/
├── 📁 app/
│   ├── globals.css           # Design tokens, keyframe animations, typography & ambient glow rules
│   ├── layout.tsx            # Global layout shell, Google Font loaders, and meta tags
│   └── page.tsx              # Main entry point rendering all portfolio sections
├── 📁 components/
│   ├── navbar.tsx            # Floating sticky navigation bar with blur backdrop
│   ├── hero.tsx              # Parallax editorial hero section with live status badge
│   ├── journey.tsx           # Interactive career timeline grid
│   ├── about.tsx             # Founder biography, core statements, and brand sidebar
│   ├── experience.tsx        # Professional work history (CorePro Techno LLP, Nass Online)
│   ├── capabilities.tsx      # System architecture and engineering capabilities
│   ├── toolkit.tsx           # Technical stack breakdown & tool matrix
│   ├── projects.tsx          # Featured work, client products, and project details modal
│   ├── devops-journey.tsx    # Dedicated DevOps, Docker, Linux & CI/CD progression map
│   ├── learning-public.tsx   # Learning in public & continuous growth initiatives
│   ├── contact.tsx           # Interactive contact section with one-click email copy
│   ├── custom-cursor.tsx     # Custom hardware-accelerated cursor component
│   ├── preloader.tsx         # Animated welcome preloader sequence
│   ├── scroll-indicator.tsx  # Top scroll progress bar
│   ├── text-marquee.tsx      # Infinite horizontal ticker strip
│   └── footer.tsx            # Page footer with quick links and copyright
├── 📁 public/                 # Static images, assets, and icons
├── .env.example              # Environment configuration template
├── .gitignore                # Git exclusion rules for secrets and build artifacts
├── next.config.ts            # Next.js workspace configuration
├── package.json              # Project dependencies and operational scripts
└── tsconfig.json             # TypeScript compiler settings
```

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

Ensure you have the following installed:
- **Node.js**: `v18.17.0` or higher (Node.js 20+ recommended)
- **Package Manager**: `npm` (v9+) or `yarn` / `pnpm`

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/durgas-official/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to create your local `.env.local` file:
   ```bash
   cp .env.example .env.local
   ```

4. **Launch the Development Server**:
   ```bash
   npm run dev
   ```

5. **View in Browser**:
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## 📜 Available Scripts

In the project root, you can run the following scripts:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches the local development server with hot-module replacement (HMR) |
| `npm run build` | Compiles and optimizes the application for production deployment |
| `npm run start` | Boots the Next.js production server (requires running `npm run build` first) |
| `npm run lint` | Runs ESLint analysis across TypeScript and TSX files |

---

## ⚙️ Environment Configuration

Environment variables can be configured in `.env.local` (or `.env`). Refer to [`.env.example`](file:///.env.example) for reference:

| Key | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| `NODE_ENV` | `string` | Current runtime environment | `development` |
| `NEXT_PUBLIC_SITE_URL` | `url` | Production or local canonical URL | `http://localhost:3000` |
| `NEXT_TELEMETRY_DISABLED` | `number` | Disables anonymous Next.js telemetry collection | `1` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `email` | Primary contact email displayed across the UI | `d66190721@gmail.com` |
| `NEXT_PUBLIC_LINKEDIN_URL` | `url` | LinkedIn profile address | `https://www.linkedin.com/in/durgasofficial` |

---

## 🌐 Deployment

### Deploying on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to a GitHub/GitLab repository.
2. Import the repository into Vercel.
3. Configure the environment variables specified in `.env.example`.
4. Click **Deploy**.

---

## 👤 Contact & Connectivity

**Durga S.**  
*Co-Founder & CTO @ CorePro Techno LLP | Full-Stack & DevOps Engineer*

- 📧 **Direct Email**: [d66190721@gmail.com](mailto:d66190721@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/durgasofficial](https://www.linkedin.com/in/durgasofficial)
- 📍 **Location**: Trivandrum, Kerala, India

---

<p align="center">
  Designed & Engineered with ❤️ by <b>Durga S.</b>
</p>
