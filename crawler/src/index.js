import { createClient } from '@supabase/supabase-js';
import { crawlAboutYou } from './shops/aboutyou.js';

const supabase = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SHOPS = [{ domain: 'aboutyou.hr', crawl: crawlAboutYou }];

async function crawlShop({ domain, crawl }) {
	const { data: shop, error: shopError } = await supabase
		.from('shops')
		.select('id')
		.eq('domain', domain)
		.single();

	if (shopError || !shop) {
		console.error(`Shop ${domain} not found, run its seed migration first`, shopError);
		return;
	}

	const products = await crawl();
	console.log(`${domain}: crawled ${products.length} products`);
	if (products.length === 0) return;

	const rows = products.map((p) => ({
		...p,
		shop_id: shop.id,
		last_crawled_at: new Date().toISOString()
	}));

	const { error: upsertError } = await supabase
		.from('products')
		.upsert(rows, { onConflict: 'product_url' });

	if (upsertError) {
		console.error(`${domain}: upsert failed`, upsertError);
	}
}

for (const shop of SHOPS) {
	await crawlShop(shop);
}
