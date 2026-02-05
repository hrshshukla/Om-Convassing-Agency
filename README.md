# Om Convassing Agency

## Overview
A modern React-based landing page for Om Convassing Agency (Meridian Commission Agents), a B2B sales representation company based in Satna, Madhya Pradesh, India.

## Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: Wouter (lightweight React router)
- **Forms**: React Hook Form with Zod validation

## Project Structure
```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   │   └── ui/      # shadcn/ui components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions
│   │   └── pages/       # Page components
│   ├── public/          # Static assets
│   └── index.html       # Entry HTML
├── api/                 # API endpoints (serverless functions)
│   └── send-mail.ts     # Email sending functionality
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## Development
- Run `npm run dev` to start the development server on port 5000
- Run `npm run build` to create production build in `dist/` folder
- Run `npm run check` for TypeScript type checking

## Deployment
The project is configured for static deployment. The build output goes to the `dist/` directory.

## Complete directory structure

```
Om Convassing Agency
├─ README.md
├─ api
│  └─ send-mail.ts
├─ client
│  ├─ index.html
│  ├─ public
│  │  ├─ favicon.png
│  │  └─ industries
│  │     ├─ category_1.jpg
│  │     ├─ category_2.jpg
│  │     ├─ category_3.jpg
│  │     └─ category_4.jpg
│  └─ src
│     ├─ App.tsx
│     ├─ components
│     │  ├─ AnchorNav.tsx
│     │  ├─ ContactForm.tsx
│     │  ├─ Faq.tsx
│     │  ├─ FeatureCard.tsx
│     │  ├─ Section.tsx
│     │  ├─ Seo.tsx
│     │  ├─ TestimonialCard.tsx
│     │  ├─ ThemeToggle.tsx
│     │  └─ ui
│     │     ├─ accordion.tsx
│     │     ├─ alert-dialog.tsx
│     │     ├─ alert.tsx
│     │     ├─ aspect-ratio.tsx
│     │     ├─ avatar.tsx
│     │     ├─ badge.tsx
│     │     ├─ breadcrumb.tsx
│     │     ├─ button.tsx
│     │     ├─ calendar.tsx
│     │     ├─ card.tsx
│     │     ├─ carousel.tsx
│     │     ├─ chart.tsx
│     │     ├─ checkbox.tsx
│     │     ├─ collapsible.tsx
│     │     ├─ command.tsx
│     │     ├─ context-menu.tsx
│     │     ├─ dialog.tsx
│     │     ├─ drawer.tsx
│     │     ├─ dropdown-menu.tsx
│     │     ├─ form.tsx
│     │     ├─ hover-card.tsx
│     │     ├─ input-otp.tsx
│     │     ├─ input.tsx
│     │     ├─ label.tsx
│     │     ├─ menubar.tsx
│     │     ├─ navigation-menu.tsx
│     │     ├─ pagination.tsx
│     │     ├─ popover.tsx
│     │     ├─ progress.tsx
│     │     ├─ radio-group.tsx
│     │     ├─ resizable.tsx
│     │     ├─ scroll-area.tsx
│     │     ├─ select.tsx
│     │     ├─ separator.tsx
│     │     ├─ sheet.tsx
│     │     ├─ sidebar.tsx
│     │     ├─ skeleton.tsx
│     │     ├─ slider.tsx
│     │     ├─ switch.tsx
│     │     ├─ table.tsx
│     │     ├─ tabs.tsx
│     │     ├─ textarea.tsx
│     │     ├─ toast.tsx
│     │     ├─ toaster.tsx
│     │     ├─ toggle-group.tsx
│     │     ├─ toggle.tsx
│     │     └─ tooltip.tsx
│     ├─ hooks
│     │  ├─ use-mobile.tsx
│     │  └─ use-toast.ts
│     ├─ index.css
│     ├─ lib
│     │  └─ utils.ts
│     ├─ main.tsx
│     ├─ pages
│     │  ├─ Landing.tsx
│     │  └─ not-found.tsx
│     └─ types
│        └─ nodemailer.d.ts
├─ components.json
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ tailwind.config.ts
├─ tsconfig.json
└─ vite.config.ts

```