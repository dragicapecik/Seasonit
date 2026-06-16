import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, locals: { supabase, safeGetSession } }) => {
	const { user } = await safeGetSession();
	if (!user) error(401, 'Unauthorized');

	const body = await request.json();

	const { error: dbError } = await supabase.from('profiles').upsert({
		id: user.id,
		season: body.season,
		gender: body.gender,
		clothing_sizes: body.clothingSizes,
		country_code: body.countryCode,
		price_min: Number(body.priceMin),
		price_max: Number(body.priceMax),
		shops: body.shops,
		material_preference: body.materialPref,
		onboarding_complete: true
	});

	if (dbError) error(500, dbError.message);

	return json({ ok: true });
};
