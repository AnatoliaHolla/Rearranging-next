# Raegan Holladay Advocacy: Next.js site

Same pipeline as EverClick / BattingCageLand: push to GitHub → Render auto-builds.

## Deploy on Render
- Build command: `npm install && npm run build`
- Start command: `npm run start`
- Node 18+ (22 recommended)

## Two things to do before launch
1. **Logo**: save her logo as `public/logo.png`, then in
   `components/Header.jsx` uncomment the `<img>` line and delete the
   text brand mark below it.
2. **Colors**: open `app/globals.css`; the first block is the entire
   brand palette. Swap `--brand`, `--brand-dark`, and `--accent` to
   match her logo's colors. Nothing else needs touching.

## Also swappable
- Her photo: drop `public/raegan.jpg` and replace the two photo
  placeholders (home + about pages).
- Contact email: in `app/contact/page.jsx`, change
  `contact@raeganking.com` to her real address.
- Free resources / courses: card templates are commented in each page -
  duplicate a card per item, link PDFs from `public/resources/`.

## URL structure
Page routes keep the exact WordPress slugs (`/iep-advocacy`,
`/faqs-iep-meaning`, etc.) so existing Google rankings and backlinks
carry over with no redirects needed.

## Contact form upgrade path
The form currently opens the visitor's mail client (works with zero
backend). To switch to the Supabase pattern from BattingCageLand, add
`app/api/contact/route.js` and point `handleSubmit` at it: the seam
is commented in `app/contact/page.jsx`.
