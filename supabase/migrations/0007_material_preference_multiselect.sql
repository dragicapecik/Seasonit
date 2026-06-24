-- Allows selecting multiple material preferences
alter table profiles alter column material_preference drop default;
alter table profiles alter column material_preference type text[]
	using case when material_preference is null then null else array[material_preference] end;
alter table profiles alter column material_preference set default '{all}';
