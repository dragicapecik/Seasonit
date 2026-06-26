const USER_AGENT =
	'Mozilla/5.0 (compatible; SeasonitCrawler/1.0; +https://seasonit.io)';

// robots.txt only allows crawling ?page=1, 2, 3 (Disallow: /*?*page= blocks the rest).
const PAGES = [1, 2, 3];

const CATEGORY_URLS = [
	'https://www.aboutyou.hr/c/zene/odjeca/haljine-20236', // haljine
	'https://www.aboutyou.hr/c/zene/odjeca/majice-i-topovi-517223', // majice i topovi
	'https://www.aboutyou.hr/c/zene/odjeca/bluze-i-tunike-22798' // kosulje / bluze i tunike
];

function extractItemList(html) {
	const scripts = html.matchAll(
		/<script type="application\/ld\+json">(.*?)<\/script>/gs
	);
	for (const [, json] of scripts) {
		let data;
		try {
			data = JSON.parse(json);
		} catch {
			continue;
		}
		if (data['@type'] === 'ItemList' && Array.isArray(data.itemListElement)) {
			return data.itemListElement;
		}
	}
	return [];
}

function toProduct(listItem) {
	const item = listItem.item;
	if (!item?.url || !item?.offers?.lowPrice) return null;

	const brand = item.brand?.name ? `${item.brand.name} ` : '';
	return {
		name: `${brand}${item.name}`.trim(),
		product_url: item.url,
		price: Number(item.offers.lowPrice),
		currency: item.offers.priceCurrency ?? 'EUR',
		image_url: item.image ?? null
	};
}

export async function crawlAboutYou() {
	const products = [];
	const seenUrls = new Set();

	for (const categoryUrl of CATEGORY_URLS) {
		for (const page of PAGES) {
			const res = await fetch(`${categoryUrl}?page=${page}`, {
				headers: { 'User-Agent': USER_AGENT }
			});
			if (!res.ok) {
				console.warn(`AboutYou ${categoryUrl} page ${page}: HTTP ${res.status}, skipping`);
				continue;
			}

			const html = await res.text();
			for (const listItem of extractItemList(html)) {
				const product = toProduct(listItem);
				if (product && !seenUrls.has(product.product_url)) {
					seenUrls.add(product.product_url);
					products.push(product);
				}
			}

			// courtesy delay between requests, robots.txt has no explicit crawl-delay
			await new Promise((r) => setTimeout(r, 1000));
		}
	}

	return products;
}
