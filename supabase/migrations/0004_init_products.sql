-- Products table populated by crawler
create table products (
  id uuid primary key default gen_random_uuid(),
  shop_id uuid references shops(id),
  name text not null,
  product_url text not null,
  affiliate_url text,
  price numeric not null,
  currency text default 'EUR',
  image_url text,
  dominant_colors text[],
  season_tags text[],
  material_tags text[],
  active boolean default true,
  last_crawled_at timestamptz,
  created_at timestamptz default now()
);

alter table products enable row level security;

create policy "Products are public"
  on products for select
  using (true);
