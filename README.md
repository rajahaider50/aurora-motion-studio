# Aurora Motion Studio

A cinematic, motion-led studio website built with the Next.js App Router. Aurora pairs a dark glass visual language with reusable animation primitives, project storytelling, and responsive studio pages.

## Features

- Home, about, services, contact, project index, and project-detail routes
- Reusable reveal, parallax, magnetic-button, cursor, and page-transition components
- Responsive layouts with a custom aurora-inspired visual system
- Framer Motion interactions and Lucide icons
- TypeScript and Tailwind CSS

## Stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion 11
- Lucide React

## Requirements

- Node.js 20.9 or newer
- npm

## Local development

```bash
git clone https://github.com/rajahaider50/aurora-motion-studio.git
cd aurora-motion-studio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Generate the optimized production build |
| `npm run start` | Serve the production build locally |

## Source structure

```text
src/
  animations/   Shared Framer Motion variants
  app/          App Router pages, layouts, and route templates
  components/   Reusable interactive UI components
  lib/          Project content and utility helpers
  sections/     Home-page sections
  styles/       Global styles and design tokens
```

## Deployment

The GitHub `main` branch is connected to Vercel. Commits pushed to `main` deploy to production; other branches and pull requests can be used for previews.

## Contact form status

The contact form currently displays a client-side success state and does not send or store messages. Connect an email provider/API and add its credentials as Vercel environment variables before using it for real inquiries.

## Accessibility

Check keyboard access, visible focus, color contrast, mobile behavior, and reduced-motion preferences before adapting this starter for a production brand.
