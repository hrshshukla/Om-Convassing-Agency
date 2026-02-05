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
