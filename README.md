# Ashutosh Gupta — Portfolio

A responsive personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion and Lucide React. The visual styling is custom CSS for a premium dark navy / purple / pink aesthetic.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Add your own portrait

Place your portrait at `public/profile.jpg`. Then in `components/portfolio.tsx`, replace the placeholder inside `.portrait-frame` with:

```tsx
<img src="/profile.jpg" alt="Ashutosh Gupta" />
```

Keep the image crop in mind; a vertical portrait with your face near the top works best. The page currently uses a placeholder so it runs without a photo.

## Configure the contact form

The contact form posts to `app/api/contact/route.ts`. To send real email, copy `.env.example` to `.env.local` and fill in:

```env
RESEND_API_KEY=re_your_api_key
CONTACT_TO_EMAIL=your-real-email@example.com
CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
```

Create a Resend API key at https://resend.com. For production, verify a domain and use a sender address on that domain. Restart the dev server after changing environment variables. Without configuration, the site still runs and the form shows a helpful message directing visitors to the email link.

## Personalise before publishing

1. Update the email address `hello@ashutosh.dev` in `components/portfolio.tsx` to your real public contact email.
2. Update social links to your actual profiles.
3. Replace placeholder GitHub links for projects 2–4 with the correct repositories, or remove those links if private.
4. Add actual live demo URLs and screenshots where available. Project preview artwork is CSS-made sample artwork, not screenshots of deployed apps.
5. Add a real CV file in `public/` and a download link if you want a resume download button.
6. Review project wording and skills to ensure they accurately reflect your experience.

## Production build

```bash
npm run build
npm start
```

Deploy on Vercel for a straightforward Next.js deployment. Configure the same environment variables in your hosting dashboard to enable email delivery.
