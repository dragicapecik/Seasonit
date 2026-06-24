-- Seeds Sinsay as an example shop for testing onboarding + future product flows
insert into shops (name, domain, base_url, country_codes, currency, active)
values (
  'Sinsay',
  'sinsay.com',
  'https://www.sinsay.com',
  array['HR', 'SI', 'DE', 'AT', 'IT'],
  'EUR',
  true
);
