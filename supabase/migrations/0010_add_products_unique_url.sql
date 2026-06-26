-- Unique constraint on product_url so the crawler can upsert idempotently
-- (daily re-crawl updates price/active instead of creating duplicate rows).
alter table products add constraint products_product_url_key unique (product_url);
