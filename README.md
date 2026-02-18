# Kamala Farms Website

A modern, responsive website for **Kamala Farms** — a hydroponics company making sustainable agriculture easy and rewarding. Built with Next.js 14+, TypeScript, and Tailwind CSS.

**Reference site:** [kamalafarms.com](https://kamalafarms.com)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14+ (App Router)** | Framework — SSR/SSG, routing, image optimization |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Styling — utility-first, brand theme configured |
| **Framer Motion** | Animations — scroll-triggered effects, transitions |
| **Swiper.js** | Carousels — hero slider, testimonials |
| **React Hook Form + Zod** | Form handling + validation (contact page) |
| **MDX (next-mdx-remote)** | Blog posts as Markdown files |
| **Lucide React** | Icons |
| **Google Fonts** | Bebas Neue (headings) + Roboto (body) |

---

## Getting Started

### Prerequisites
- **Node.js** 18+ installed
- **npm** (comes with Node.js)

### Setup

```bash
# 1. Clone the repository
git clone <repo-url>
cd kamalafarms-website

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (with hot reload) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
src/
├── app/                          # Pages (file-based routing)
│   ├── layout.tsx                # Root layout (Navbar + Footer + fonts)
│   ├── page.tsx                  # Home page
│   ├── about/page.tsx            # About Us
│   ├── services/
│   │   ├── page.tsx              # Services listing
│   │   └── [slug]/page.tsx       # Individual service pages
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Individual blog posts
│   ├── contact/page.tsx          # Contact page
│   └── portfolio/page.tsx        # Portfolio / case studies
│
├── components/
│   ├── Navbar.tsx                # Responsive navigation bar
│   ├── Footer.tsx                # Site footer
│   ├── WhatsAppWidget.tsx        # Floating WhatsApp chat button
│   └── ui/                      # Shared UI components (see below)
│       ├── index.ts              # Barrel export
│       ├── Button.tsx
│       ├── SectionWrapper.tsx
│       ├── Heading.tsx
│       ├── Card.tsx
│       ├── StatCounter.tsx
│       └── Badge.tsx
│
├── content/
│   ├── services/index.ts         # Service data (8 services)
│   └── blog/                     # MDX blog posts
│       └── *.mdx
│
├── lib/
│   ├── constants.ts              # Site config, nav links, contact info
│   ├── utils.ts                  # cn() utility for class merging
│   └── blog.ts                   # Blog post reader (MDX + gray-matter)
│
└── app/globals.css               # Tailwind config + brand CSS variables

public/
└── images/
    ├── hero/                     # Hero section background images
    ├── services/                 # Service page images
    ├── team/                     # Team member photos
    ├── blog/                     # Blog post cover images
    └── portfolio/                # Portfolio project images
```

---

## Brand Design System

### Colors

| Name | Hex | Usage |
|---|---|---|
| Primary | `#4BAF47` | Main brand green — buttons, links, accents |
| Primary Dark | `#3a8c38` | Hover states |
| Accent | `#61CE70` | Light green highlights |
| Highlight | `#F2C200` | Yellow — secondary buttons, callouts |
| Dark | `#1E2831` | Text, dark backgrounds |

### Fonts

| Font | CSS Variable | Usage |
|---|---|---|
| **Bebas Neue** | `--font-heading` / `font-heading` class | All headings (uppercase) |
| **Roboto** | `--font-body` / `font-body` class | Body text, paragraphs |

### Shared UI Components

All shared components are in `src/components/ui/` and can be imported from `@/components/ui`:

```tsx
import { Button, SectionWrapper, Heading, Card, StatCounter, Badge } from "@/components/ui";
```

| Component | Props | Description |
|---|---|---|
| `Button` | `variant`, `size`, `className` | Primary/secondary/outline button |
| `SectionWrapper` | `background`, `id`, `className` | Full-width section with container |
| `Heading` | `as`, `subtitle`, `className` | Branded heading (h1-h4) |
| `Card` | `title`, `description`, `href`, `icon`, `image` | Service/blog card with hover effects |
| `StatCounter` | `value`, `label`, `suffix`, `prefix` | Animated scroll-triggered counter |
| `Badge` | `variant`, `className` | Small label/tag |

---

## Collaboration Guide

### Branching Strategy

1. **Always branch from `main`**
2. Name your branch: `<your-name>/<page-name>` (e.g., `rahul/home-page`)
3. Work on your assigned pages
4. Create a Pull Request to `main` when ready for review

```bash
# Create your branch
git checkout main
git pull origin main
git checkout -b your-name/page-name

# Work on your pages...

# Push and create PR
git push -u origin your-name/page-name
# Then create a PR on GitHub
```

### Page Assignments

| Collaborator | Pages | Key Files |
|---|---|---|
| **Person A** | Home, About | `src/app/page.tsx`, `src/app/about/page.tsx` |
| **Person B** | Services, Portfolio | `src/app/services/`, `src/app/portfolio/page.tsx` |
| **Person C** | Blog, Contact | `src/app/blog/`, `src/app/contact/page.tsx` |

> Update this table with actual collaborator names.

### What Each Page Stub Contains

Every page file has a detailed **comment block** at the top describing:
- All sections to build (with reference to the original site)
- Which shared components to use
- Where content data lives
- TODO items for that page

Read the comment block in your assigned page to know exactly what to build.

### Adding a Blog Post

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief summary of the post."
author: "Author Name"
category: "Hydroponics"
coverImage: "/images/blog/your-image.jpg"
---

# Your Post Title

Write your content here using Markdown...
```

### Code Conventions

- Use **TypeScript** for all files
- Use the `cn()` utility from `@/lib/utils` for conditional class merging
- Import shared components from `@/components/ui`
- Use brand colors via Tailwind classes: `text-primary`, `bg-primary`, `bg-dark`, etc.
- Use `font-heading` class for headings styled with Bebas Neue
- Keep images in the appropriate `public/images/` subfolder
- Use `next/image` (`<Image>`) for optimized image loading

---

## Deployment

Deploy on [Vercel](https://vercel.com) (recommended for Next.js):

```bash
npm run build   # Verify production build works locally first
```

Then connect the GitHub repo to Vercel for automatic deployments.
