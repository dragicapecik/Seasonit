-- Adds country preference to user profile
alter table profiles add column country_code text default 'HR';
