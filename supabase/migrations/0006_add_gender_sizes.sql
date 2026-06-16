-- Adds gender preference and clothing sizes to user profile
-- gender values: 'women' | 'men' | 'all'
-- clothing_sizes: array of standard letter sizes e.g. '{XS,M,L}'
alter table profiles add column gender text default 'all';
alter table profiles add column clothing_sizes text[] default '{}';
