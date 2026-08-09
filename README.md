# Accure

Accure is a modern marketing and thought-leadership website for a systems-integration company serving public and private sector clients. The site highlights the company’s capabilities, sectors, insights, and contact experience through a polished, responsive Next.js experience.

## Features

- Responsive marketing site built with Next.js App Router
- Dedicated pages for About, Capabilities, Sectors, Insights, Privacy, Terms, and Contact
- Reusable UI sections for hero, services, hot topics, security, and footer content
- Animated visual treatments and scroll-based interactions
- Contact form submission flow that can be connected to Formspree or another endpoint

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Framer Motion
- ESLint

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Available scripts

```bash
npm run dev     # start the local development server
npm run build   # create a production build
npm run start   # serve the production build locally
npm run lint    # run ESLint
```

## Project structure

- app/ — route-level pages and layouts
- components/ — reusable sections and shared UI components
- lib/ — static content and data used across pages
- public/ — images and static assets

## Contact form setup

The contact form in app/contact/page.tsx is prepared for submission through Formspree. Replace the placeholder endpoint with your real Formspree form URL to enable live submissions.

## Deployment

This project is ready to deploy on platforms such as Vercel. For production deployments, make sure any form endpoint or environment variables are configured correctly before publishing.
