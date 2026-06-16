-- Shops table with affiliate and delivery configuration
-- Populate manually via Supabase dashboard after running
create table shops (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  domain text not null,
  base_url text not null,
  affiliate_tag text,
  affiliate_network text,
  affiliate_url_template text,
  country_codes text[],
  currency text default 'EUR',
  active boolean default true,
  created_at timestamptz default now()
);

alter table shops enable row level security;

-- Shops are public readable, only service role can write
create policy "Shops are public"
  on shops for select
  using (true);
