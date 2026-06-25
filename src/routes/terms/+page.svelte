<script lang="ts">
	import HelperPageHeader from '$lib/components/HelperPageHeader.svelte';
	import HelperPageFooter from '$lib/components/HelperPageFooter.svelte';
	import LangToggle from '$lib/components/LangToggle.svelte';

	let lang: 'en' | 'hr' = 'en';
</script>

<svelte:head>
	<title>Terms of Service — Seasonit</title>
</svelte:head>

<div class="page">
	<HelperPageHeader />

	<main class="content">
		<LangToggle bind:lang />

		{#if lang === 'en'}
			<h1>Terms of Service</h1>
			<p class="updated">Last updated: 23 June 2026</p>

			<p>
				These Terms of Service ("Terms") govern your use of Seasonit (the "Service", "we", "us").
				By creating an account or otherwise using the Service, you agree to these Terms. If you do
				not agree, please do not use the Service.
			</p>

			<h2>1. What Seasonit Does</h2>
			<p>
				Seasonit helps you identify your colour season and provides personalised style and shopping
				recommendations based on information you provide — your colour season, gender, clothing
				sizes, country, budget, shop preferences, and material preferences.
			</p>

			<h2>2. Affiliate Disclosure</h2>
			<p>
				Seasonit participates in affiliate marketing programmes with the retailers featured on the
				platform. When you click a link to a partner shop and make a purchase, Seasonit may earn a
				commission from that retailer at no additional cost to you. This commission is how we fund
				the Service. Affiliate relationships do not influence which colour season or palette you are
				shown — recommendations are based solely on your stated preferences.
			</p>

			<h2>3. Accounts</h2>
			<p>
				You must be at least 16 years old to create an account. You are responsible for keeping your
				login credentials secure and for all activity under your account.
			</p>

			<h2>4. No Warranty</h2>
			<p>
				Colour season classification and product recommendations are provided for informational and
				styling purposes only. We do not guarantee that recommended products are in stock, accurately
				priced, or available at the retailer at the time you visit — please verify details directly
				with the retailer before purchasing.
			</p>

			<h2>5. Third-Party Retailers</h2>
			<p>
				Seasonit is not a retailer. Purchases made through links on Seasonit are transactions between
				you and the third-party retailer, governed by that retailer's own terms, pricing, and
				policies. We are not responsible for the products, services, or conduct of any third-party
				retailer.
			</p>

			<h2>6. Acceptable Use</h2>
			<p>
				You agree not to misuse the Service, including attempting to access it through automated
				means, interfering with its operation, or using it for unlawful purposes.
			</p>

			<h2>7. Intellectual Property</h2>
			<p>
				The Seasonit name, design, and content (excluding third-party product data and trademarks)
				belong to Seasonit. You may not copy or redistribute it without permission.
			</p>

			<h2>8. Limitation of Liability</h2>
			<p>
				To the extent permitted by law, the Service is provided "as is" without warranties of any
				kind. We are not liable for indirect, incidental, or consequential damages arising from your
				use of the Service.
			</p>

			<h2>9. Changes to These Terms</h2>
			<p>
				We may update these Terms from time to time. Continued use of the Service after changes take
				effect constitutes acceptance of the revised Terms.
			</p>

			<h2>10. Governing Law</h2>
			<p>These Terms are governed by the laws of Croatia.</p>

			<h2>11. Contact</h2>
			<p>Questions about these Terms? Contact us at legal@seasonit.app (placeholder — to be updated).</p>
		{:else}
			<h1>Uvjeti korištenja</h1>
			<p class="updated">Posljednje ažurirano: 23. lipnja 2026.</p>

			<p>
				Ovi Uvjeti korištenja ("Uvjeti") uređuju vaše korištenje usluge Seasonit ("Usluga", "mi").
				Otvaranjem računa ili korištenjem Usluge prihvaćate ove Uvjete. Ako se ne slažete, molimo da
				ne koristite Uslugu.
			</p>

			<h2>1. Što Seasonit radi</h2>
			<p>
				Seasonit vam pomaže prepoznati vašu boju sezone i pruža personalizirane stil i kupovne
				preporuke na temelju podataka koje unesete — vaše boje sezone, spola, veličina odjeće,
				države, budžeta, preferiranih trgovina i preferencija materijala.
			</p>

			<h2>2. Obavijest o affiliate naknadama</h2>
			<p>
				Seasonit sudjeluje u affiliate (partnerskim) programima s trgovinama prikazanima na
				platformi. Kada kliknete na poveznicu prema partnerskoj trgovini i ostvarite kupnju, Seasonit
				može ostvariti naknadu od te trgovine, bez dodatnog troška za vas. Ta naknada je način na
				koji financiramo Uslugu. Affiliate odnosi ne utječu na to koja vam se boja sezone ili paleta
				prikazuje — preporuke se temelje isključivo na vašim navedenim preferencijama.
			</p>

			<h2>3. Korisnički računi</h2>
			<p>
				Za otvaranje računa morate imati najmanje 16 godina. Odgovorni ste za čuvanje sigurnosti
				svojih pristupnih podataka i za svu aktivnost na vašem računu.
			</p>

			<h2>4. Bez garancije</h2>
			<p>
				Klasifikacija boje sezone i preporuke proizvoda dane su isključivo u informativne i stilske
				svrhe. Ne garantiramo da su preporučeni proizvodi dostupni, točno označeni cijenom, ili
				dostupni kod trgovca u trenutku posjeta — molimo provjerite detalje izravno kod trgovca prije
				kupnje.
			</p>

			<h2>5. Trgovine trećih strana</h2>
			<p>
				Seasonit nije trgovac. Kupnje ostvarene putem poveznica na Seasonitu su transakcije između
				vas i trgovca treće strane, uređene uvjetima, cijenama i politikama tog trgovca. Ne snosimo
				odgovornost za proizvode, usluge ili postupanje bilo kojeg trgovca treće strane.
			</p>

			<h2>6. Prihvatljivo korištenje</h2>
			<p>
				Slažete se da nećete zloupotrebljavati Uslugu, uključujući pokušaje automatiziranog pristupa,
				ometanje njezinog rada, ili korištenje u nezakonite svrhe.
			</p>

			<h2>7. Intelektualno vlasništvo</h2>
			<p>
				Naziv, dizajn i sadržaj Seasonita (osim podataka o proizvodima trećih strana i njihovih
				zaštitnih znakova) pripadaju Seasonitu. Ne možete ih kopirati ili distribuirati bez
				dozvole.
			</p>

			<h2>8. Ograničenje odgovornosti</h2>
			<p>
				U mjeri dopuštenoj zakonom, Usluga se pruža "kakva jest" bez bilo kakvih garancija. Ne
				snosimo odgovornost za neizravnu, slučajnu ili posljedičnu štetu koja proizlazi iz korištenja
				Usluge.
			</p>

			<h2>9. Promjene ovih Uvjeta</h2>
			<p>
				Ove Uvjete možemo s vremena na vrijeme ažurirati. Nastavak korištenja Usluge nakon stupanja
				promjena na snagu smatra se prihvaćanjem izmijenjenih Uvjeta.
			</p>

			<h2>10. Mjerodavno pravo</h2>
			<p>Ovi Uvjeti uređeni su zakonima Republike Hrvatske.</p>

			<h2>11. Kontakt</h2>
			<p>Pitanja o ovim Uvjetima? Kontaktirajte nas na legal@seasonit.app (placeholder — bit će ažurirano).</p>
		{/if}
	</main>

	<HelperPageFooter>
		<a href="/privacy">Privacy Policy</a>
	</HelperPageFooter>
</div>

<style>
	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.content {
		flex: 1;
		max-width: 680px;
		margin: 0 auto;
		width: 100%;
		padding: 3rem 1.5rem 5rem;
	}

	h1 {
		font-size: 2.5rem;
		color: var(--mocha);
		margin-bottom: 0.5rem;
		line-height: 1.1;
	}

	.updated {
		font-size: 0.8125rem;
		color: var(--text-light);
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 1.375rem;
		color: var(--text);
		margin: 2rem 0 0.75rem;
	}

	p {
		font-size: 0.9375rem;
		line-height: 1.75;
		color: var(--text-light);
		margin-bottom: 1rem;
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 2rem;
		}
	}
</style>
