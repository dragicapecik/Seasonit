-- Prevents duplicate shop rows if a seed migration is ever re-applied.
alter table shops add constraint shops_domain_key unique (domain);
