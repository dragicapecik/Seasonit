import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const { data: products } = await supabase
		.from('products')
		.select('id, name, product_url, affiliate_url, price, currency, image_url')
		.eq('active', true)
		.order('created_at', { ascending: false })
		.limit(60);

	return { products: products ?? [] };
};
