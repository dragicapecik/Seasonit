-- Seeds AboutYou.hr as crawler test shop: server-rendered category/product pages,
-- robots.txt allows /c/ and /p/ paths (unlike Sinsay, which loads products via a
-- disallowed ajax endpoint and was rejected for crawling).
insert into shops (name, domain, base_url, country_codes, currency, active)
values (
  'AboutYou',
  'aboutyou.hr',
  'https://www.aboutyou.hr',
  array['HR'],
  'EUR',
  true
);
