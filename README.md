# Kwamou BnB Service

A modern, luxurious website for a BnB in Washington, DC built with Next.js (App Router) and TailwindCSS.

## Tech Stack
- Next.js 14
- React 18
- TailwindCSS 3
- react-day-picker (availability calendar)
- Lucide Icons

## Prerequisites
- Install Node.js LTS (v18+). Recommended: https://nodejs.org
- From the project folder, install dependencies:

```bash
npm install
```

## Development
```bash
npm run dev
```
Open http://localhost:3000

## Project Structure
- app/
  - page.tsx (Home)
  - booking/page.tsx (Inquiry form + calendar)
  - contact/page.tsx
  - policies/page.tsx
  - api/inquiry/route.ts (serverless API placeholder)
  - globals.css (Tailwind)
- components/site/
  - Header.tsx, Footer.tsx

## Images
Configured to load Redfin-hosted images via next/image remotePatterns. You can replace with your own images later.

## Inquiry Email
The API is a placeholder that logs the inquiry on the server. To enable real email sending, integrate with SMTP (e.g. Nodemailer) or a provider (Resend, SendGrid). Avoid hardcoding secrets—use environment variables.

## Deployment
Deploy easily to Vercel or Netlify after installing dependencies.

## Branding
- Colors: White & Gold
- Title: Kwamou BnB Service

