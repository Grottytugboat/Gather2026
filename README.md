# Gather Landing Page

A conversion-focused, single-page landing page for Gather - built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Add your Resend API key (get one at https://resend.com/api-keys)
   - Update `TO_EMAIL` and `FROM_EMAIL` as needed

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js app directory with pages and API routes
- `components/` - React components for each section
- `app/api/contact/` - API route for handling contact form submissions

## Sections

1. **Hero** - Above the fold with headline and CTA
2. **Problem** - Validation of pain points
3. **Final CTA** - Early conversion opportunity
4. **The Shift** - How Gather works
5. **Who It's For** - Qualification messaging
6. **Founder** - Trust and personal connection
7. **Contact Form** - Lead capture
8. **How It Fits** - Reassurance about integration
9. **Final CTA** - Closing conversion opportunity

## Design Principles

- White background
- Green accent color (#10b981)
- Single font family (system stack)
- No animations, gradients, or stock photos
- Mobile-first responsive design
- Generous whitespace
- Large, readable text

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Contact Form

The contact form uses Resend for email delivery. Make sure to:
- Verify your sending domain in Resend
- Set up the `FROM_EMAIL` with a verified domain
- Configure `TO_EMAIL` to receive submissions
