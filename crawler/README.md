# Crawler

Daily cron (`.github/workflows/crawler.yml`, 04:00 UTC) that crawls predefined shops and upserts results into the `products` table.

## Required GitHub secrets

- `SUPABASE_URL` — already exists (used by `keep-alive.yml`).
- `SUPABASE_SERVICE_ROLE_KEY` — add under repo Settings → Secrets and variables → Actions. Needed because writes bypass RLS (the `products`/`shops` write policies are service-role only).

## Shops

- **AboutYou.hr** (`src/shops/aboutyou.js`) — parses the `application/ld+json` `ItemList` already embedded in category page HTML for SEO. No HTML scraping needed. Crawls pages 1-3 of the women's category (`robots.txt` only allows `?page=1,2,3`).
- **Sinsay** — seeded in the DB but intentionally not crawled: products load via an ajax endpoint disallowed in `robots.txt`. Revisit only via an affiliate feed (see `docs/architecture-decisions.md`).

## Run locally

```
cd crawler
npm install
SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npm run crawl
```

## Adding a new shop

1. Check `robots.txt` for disallowed paths before writing anything.
2. Check if product data is server-rendered (view source, no JS) — look for an `application/ld+json` `ItemList`/`Product` block first, it's usually cleaner than CSS selectors.
3. Seed the shop via a new migration in `/supabase/migrations/`.
4. Add `src/shops/<shop>.js` exporting a `crawl<Shop>()` function returning `{ name, product_url, price, currency, image_url }[]`.
5. Register it in `SHOPS` in `src/index.js`.
