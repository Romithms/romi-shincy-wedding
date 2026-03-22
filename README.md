# Romi & Shincy — Wedding Invitation

A royal-themed digital wedding invitation with envelope animation, countdown timer, dark mode, floating petals, guestbook, and more.

**Wedding Date:** 8 June 2026  
**Live Site:** _Add your domain here after deployment_

---

## Quick Deploy to Vercel

### Step 1: Push to GitHub

```bash
# Create a new repo on github.com (e.g., "romi-shincy-wedding")
# Then in this folder:
git init
git add .
git commit -m "Wedding invitation site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/romi-shincy-wedding.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `romi-shincy-wedding` repo
4. Click **"Deploy"** — no build settings needed (it's a static HTML file)
5. Your site is live at `romi-shincy-wedding.vercel.app`

### Step 3: Add Custom Domain

**Option A — Buy through Vercel:**
1. In your Vercel project → Settings → Domains
2. Click "Buy" and search for your preferred domain
3. It connects automatically

**Option B — Buy elsewhere (Namecheap, GoDaddy, etc.):**
1. Buy your domain (e.g., `romiandshincy.com`)
2. In Vercel → Settings → Domains → Add your domain
3. Vercel will show you DNS records to add
4. Go to your domain registrar's DNS settings and add:
   - **Type:** A | **Name:** @ | **Value:** `76.76.21.21`
   - **Type:** CNAME | **Name:** www | **Value:** `cname.vercel-dns.com`
5. Wait 5–30 minutes for DNS propagation
6. Vercel auto-provisions SSL (HTTPS)

**Suggested domain names:**
- `romiandshincy.com`
- `romiwedshincy.com`
- `romishincy.wedding` (the `.wedding` TLD)
- `romiandshincy.in`

---

## Setting Up the Guestbook (Google Sheets)

The Wishes section saves messages to a Google Sheet. Follow these steps:

1. Go to [sheets.google.com](https://sheets.google.com) → Create new spreadsheet
2. Name it **"Romi & Shincy Wedding Wishes"**
3. In **Row 1**, type these headers:

   | A | B | C |
   |---|---|---|
   | Name | Message | Timestamp |

4. Go to **Extensions → Apps Script**
5. Delete any existing code
6. Copy the contents of `google-apps-script.js` from this repo and paste it
7. Save (Ctrl+S), name it "Wedding Wishes API"
8. Click **Deploy → New Deployment**
9. Click the ⚙️ gear → Select **"Web app"**
   - Execute as: **Me**
   - Who has access: **Anyone**
10. Click **Deploy**, authorize when prompted
11. Copy the **Web App URL**
12. Open `index.html` and find this line near the bottom:
    ```js
    const GOOGLE_SHEETS_URL='YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
    ```
13. Replace with your URL:
    ```js
    const GOOGLE_SHEETS_URL='https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
    ```
14. Commit and push — Vercel auto-deploys

---

## Personalized Guest Links

Share custom links with a personalized greeting:

```
https://yourdomain.com/?guest=Uncle+George
https://yourdomain.com/?guest=Arun+%26+Family
https://yourdomain.com/?name=Sarah
```

The envelope screen will show "Dear Uncle George" instead of "You're Invited".

---

## Features

- Wax-seal envelope with crack animation
- Gold foil text effects & SVG floral borders
- Bible verse typewriter effect
- Countdown timer with flip animation
- Google Maps directions & Calendar integration
- WhatsApp RSVP button
- Guestbook with Google Sheets backend
- Dark mode toggle
- Background music (Gymnopédie No. 1)
- Floating petals & sparkle particles
- Side navigation dots
- Scroll progress bar
- Fully responsive (mobile-first)
- Accessibility: reduced-motion support, ARIA labels, semantic HTML
- PWA-ready meta tags

---

## OG Meta Tags (Social Sharing Preview)

Before sharing on WhatsApp/Instagram, update these in `index.html`:

```html
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
```

Create a 1200×630px OG image (use Canva) showing the R&S monogram with "Romi & Shincy — 8 June 2026" and save it as `og-image.jpg` in the root folder.

---

## File Structure

```
romi-shincy-wedding/
├── index.html              ← The complete wedding site
├── vercel.json             ← Vercel config (headers, rewrites)
├── google-apps-script.js   ← Copy this into Google Apps Script
├── .gitignore
└── README.md               ← You are here
```

---

© 2026 Romi & Shincy
