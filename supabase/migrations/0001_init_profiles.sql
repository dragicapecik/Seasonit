-- Creates user profiles table linked to Supabase auth
-- Run after enabling Google OAuth in Supabase dashboard
create table profiles (
  id uuid references auth.users primary key,
  season text,
  undertone text,
  price_min int default 0,
  price_max int default 200,
  shops text[],
  onboarding_complete boolean default false,
  created_at timestamptz default now()
);

-- RLS: users can only read/write their own profile
alter table profiles enable row level security;

create policy "Own profile only"
  on profiles for all
  using (auth.uid() = id);
