# Google Search Console setup — suzettesun.com

Technical SEO is wired in the Next.js app. Complete these steps in Google Search Console (GSC) to verify ownership and start indexing.

## What is already live

| Item | URL |
|------|-----|
| Homepage | https://suzettesun.com |
| Sitemap | https://suzettesun.com/sitemap.xml |
| Robots | https://suzettesun.com/robots.txt |
| OG image | https://suzettesun.com/assets/og.jpg |
| Web manifest | https://suzettesun.com/site.webmanifest |

Built-in metadata: title, description, canonical, Open Graph, Twitter cards, `robots`, JSON-LD (`Person`, `WebSite`, `ProfilePage`, `ProfessionalService`, `BreadcrumbList`, work `ItemList`).

`www.suzettesun.com` permanently redirects to `https://suzettesun.com` (avoids duplicate indexing).

---

## Step 1 — Create the property

1. Open [Google Search Console](https://search.google.com/search-console).
2. Sign in with the Google account that should own the site (recommend Suzette's primary Gmail).
3. Click **Add property**.
4. Choose **URL prefix** (not Domain — simpler with Vercel).
5. Enter: `https://suzettesun.com`
6. Click **Continue**.

---

## Step 2 — Verify ownership (HTML tag — recommended)

1. On the verification screen, select **HTML tag**.
2. Google shows something like:
   ```html
   <meta name="google-site-verification" content="AbCdEf1234567890" />
   ```
3. Copy **only** the `content` value (e.g. `AbCdEf1234567890`).

### Add the token in Vercel

1. Vercel → **suzy-portfolio** → **Settings** → **Environment Variables**.
2. Add:
   - **Name:** `GOOGLE_SITE_VERIFICATION`
   - **Value:** paste the content token
   - **Environment:** Production (and Preview if you want staging verified)
3. **Save**, then **Redeploy** the latest production deployment (Deployments → ⋮ → Redeploy).

After deploy, view page source on https://suzettesun.com and confirm:

```html
<meta name="google-site-verification" content="YOUR_TOKEN" />
```

4. Back in GSC, click **Verify**.

### Alternative: DNS TXT (no redeploy)

If you prefer not to use an env var:

1. In GSC, choose **Domain name provider** or **TXT record**.
2. GoDaddy → **DNS** → **Add** → Type **TXT**, Name **@**, Value = the record Google gives you.
3. Wait 5–60 minutes, then **Verify** in GSC.

---

## Step 3 — Submit the sitemap

1. In GSC, open the property → **Sitemaps** (left menu).
2. Enter: `sitemap.xml`
3. Click **Submit**.

Status should move to **Success** within a few hours. One URL is expected (single-page portfolio).

---

## Step 4 — Request indexing

1. **URL Inspection** (top search bar).
2. Enter: `https://suzettesun.com`
3. Click **Request indexing**.

Repeat after major content updates (new case studies, copy changes). Update `lastUpdated` in `src/data/site.ts` when you ship meaningful SEO changes.

---

## Step 5 — Set preferred domain (optional)

GSC no longer has a "preferred domain" toggle. Canonical tags and the www → apex redirect handle this. Ensure both hostnames work in Vercel **Domains** (apex + www).

---

## Step 6 — Link Google Analytics (optional, recommended)

If you add GA4 later:

1. Create a GA4 property for `suzettesun.com`.
2. In GSC → **Settings** → **Associations** → link the GA4 property.
3. Add the GA4 script via Next.js `Script` component or Google Tag Manager — not required for GSC verification.

---

## Step 7 — Monitor (first 2–4 weeks)

Check weekly:

- **Pages** → Indexed vs not indexed
- **Experience** → Core Web Vitals (mobile)
- **Enhancements** → No critical structured-data errors
- **Links** → External links as they appear

---

## Local / preview verification

For local testing with a verification token:

```powershell
# .env.local (never commit)
GOOGLE_SITE_VERIFICATION=your_token_here
npm run dev
```

View source at http://localhost:4321 to confirm the meta tag renders.

---

## Checklist

- [ ] GSC property created for `https://suzettesun.com`
- [ ] `GOOGLE_SITE_VERIFICATION` set in Vercel and redeployed
- [ ] Ownership verified in GSC
- [ ] Sitemap `sitemap.xml` submitted
- [ ] Homepage indexing requested
- [ ] `www` redirects to apex (test https://www.suzettesun.com)
- [ ] Rich Results Test passes: https://search.google.com/test/rich-results?url=https://suzettesun.com

---

## Updating SEO after content changes

1. Edit copy/data in `src/data/`.
2. Bump `lastUpdated` in `src/data/site.ts` (ISO date).
3. Push to `main` → Vercel auto-deploys.
4. In GSC, request re-indexing for the homepage if changes are significant.
