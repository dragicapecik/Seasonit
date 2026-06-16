-- Adds material preference to user profile
-- Values: 'natural' | 'blends' | 'all'
alter table profiles add column material_preference text default 'all';
