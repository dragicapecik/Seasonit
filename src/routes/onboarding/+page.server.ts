import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const { data: shops } = await supabase
		.from('shops')
		.select('id, name, domain, country_codes')
		.eq('active', true)
		.order('name');

	return { shops: shops ?? [] };
};
