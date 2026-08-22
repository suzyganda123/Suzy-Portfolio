# GoDaddy DNS for suzettesun.com → Vercel

Domain is attached to Vercel project `suzy-portfolio`.
Update DNS in GoDaddy (DNS Management) as follows.

## 1. Root domain (`@`)

**Delete** the existing A record that says `WebsiteBuilder Site`.

**Add** these A records (use both):

| Type | Name | Value / Data | TTL |
|------|------|--------------|-----|
| A | @ | `216.198.79.1` | 1 Hour |
| A | @ | `64.29.17.1` | 1 Hour |

Fallback single-IP option if GoDaddy only allows one A: `76.76.21.21`

## 2. WWW

**Edit** the existing CNAME for `www` (currently points to `suzettesun.com.`).

| Type | Name | Value / Data | TTL |
|------|------|--------------|-----|
| CNAME | www | `37f1dfa53c59098c.vercel-dns-017.com.` | 1 Hour |

Keep the trailing dot if GoDaddy shows it.

## 3. Leave alone

- NS records (`ns57` / `ns58`) — keep if using GoDaddy DNS
- `_dmarc` TXT — keep
- `_domainconnect` — optional keep

## 4. After saving

1. Wait 5–60 minutes (sometimes up to 24h).
2. Open https://suzettesun.com and https://www.suzettesun.com
3. In Vercel → Project → Settings → Domains, both should show **Valid**.

Live until DNS propagates: https://suzy-portfolio-psi.vercel.app
