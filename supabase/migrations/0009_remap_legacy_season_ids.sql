-- Remaps profiles.season values from the old onboarding ID scheme to the
-- canonical IDs in src/lib/data/seasons.ts (introduced in "helper pages update").
-- Old -> new: true-spring -> warm-spring, clear-spring -> bright-spring,
-- true-summer -> cool-summer, true-autumn -> warm-autumn, deep-autumn -> dark-autumn,
-- clear-winter -> bright-winter, true-winter -> cool-winter, deep-winter -> dark-winter.
-- light-spring, light-summer, soft-summer, soft-autumn are unchanged.
update profiles set season = case season
	when 'true-spring' then 'warm-spring'
	when 'clear-spring' then 'bright-spring'
	when 'true-summer' then 'cool-summer'
	when 'true-autumn' then 'warm-autumn'
	when 'deep-autumn' then 'dark-autumn'
	when 'clear-winter' then 'bright-winter'
	when 'true-winter' then 'cool-winter'
	when 'deep-winter' then 'dark-winter'
	else season
end
where season in (
	'true-spring', 'clear-spring', 'true-summer', 'true-autumn',
	'deep-autumn', 'clear-winter', 'true-winter', 'deep-winter'
);
