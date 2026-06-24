<script lang="ts">
	let lang: 'en' | 'hr' = 'en';
</script>

<svelte:head>
	<title>Privacy Policy — Seasonit</title>
</svelte:head>

<div class="page">
	<header class="top-bar">
		<a href="/" class="logo">season<em>it</em></a>
		<a href="/" class="back-link">← Back to home</a>
	</header>

	<main class="content">
		<div class="lang-toggle">
			<button class:active={lang === 'en'} on:click={() => (lang = 'en')} type="button">EN</button>
			<button class:active={lang === 'hr'} on:click={() => (lang = 'hr')} type="button">HR</button>
		</div>

		{#if lang === 'en'}
			<h1>Privacy Policy</h1>
			<p class="updated">Last updated: 23 June 2026</p>

			<p>
				This Privacy Policy explains what personal data Seasonit ("we", "us") collects when you use
				our website and app, why we collect it, and the rights you have over it.
			</p>

			<h2>1. What We Collect</h2>
			<p>
				<strong>Account data</strong> — your email address and authentication credentials, handled
				via Supabase Auth, or your Google account details if you sign in with Google.
			</p>
			<p>
				<strong>Profile data you provide during onboarding</strong> — your colour season, gender,
				clothing sizes, country, price range, favourite shops, and material preferences.
			</p>
			<p>
				<strong>Session data</strong> — essential cookies that keep you signed in.
			</p>

			<h2>2. How We Use Your Data</h2>
			<p>
				We use your data to create and manage your account, personalise the colour palette and
				shopping recommendations shown to you, and filter shop and product results to your stated
				country, budget, and preferences.
			</p>

			<h2>3. Affiliate Links &amp; Third-Party Retailers</h2>
			<p>
				Seasonit earns commission through affiliate partnerships with the retailers we link to (see
				our <a href="/terms">Terms of Service</a>). When you click a link to a partner shop, that
				retailer or its affiliate network may set its own cookies or tracking parameters to attribute
				the referral — this is governed by the retailer's own privacy policy, not ours. We do not
				share your account or profile data with retailers; only the fact that you followed the link
				is communicated.
			</p>

			<h2>4. Third-Party Services We Use</h2>
			<p>
				<strong>Supabase</strong> hosts our database and handles authentication, acting as our data
				processor. <strong>Google</strong> processes your authentication if you choose "Sign in with
				Google", per its own privacy policy.
			</p>

			<h2>5. Cookies</h2>
			<p>
				We use essential cookies to keep you signed in. We do not currently use tracking or
				advertising cookies of our own.
			</p>

			<h2>6. Data Retention</h2>
			<p>
				We retain your account and profile data for as long as your account is active. You can
				request deletion at any time — see Your Rights below.
			</p>

			<h2>7. Your Rights (GDPR)</h2>
			<p>If you are in the EU/EEA, you have the right to:</p>
			<ul>
				<li>Access the personal data we hold about you</li>
				<li>Correct inaccurate data</li>
				<li>Request deletion of your data</li>
				<li>Request a copy of your data (portability)</li>
				<li>Object to or restrict certain processing</li>
			</ul>
			<p>To exercise any of these rights, contact us at legal@seasonit.app (placeholder — to be updated).</p>

			<h2>8. Children</h2>
			<p>The Service is not intended for users under 16. We do not knowingly collect data from children.</p>

			<h2>9. Changes to This Policy</h2>
			<p>
				We may update this Privacy Policy from time to time. We will post the updated version here
				with a new "last updated" date.
			</p>

			<h2>10. Contact</h2>
			<p>Questions about this Privacy Policy? Contact us at legal@seasonit.app (placeholder — to be updated).</p>
		{:else}
			<h1>Pravila privatnosti</h1>
			<p class="updated">Posljednje ažurirano: 23. lipnja 2026.</p>

			<p>
				Ova Pravila privatnosti objašnjavaju koje osobne podatke Seasonit ("mi") prikuplja kada
				koristite našu web stranicu i aplikaciju, zašto ih prikupljamo i koja prava imate u vezi s
				njima.
			</p>

			<h2>1. Što prikupljamo</h2>
			<p>
				<strong>Podaci o računu</strong> — vaša e-mail adresa i podaci za autentifikaciju, putem
				Supabase Auth servisa, ili podaci vašeg Google računa ako se prijavljujete putem Googlea.
			</p>
			<p>
				<strong>Podaci profila koje unesete tijekom onboardinga</strong> — vaša boja sezone, spol,
				veličine odjeće, država, raspon cijena, preferirane trgovine i preferencije materijala.
			</p>
			<p>
				<strong>Podaci sesije</strong> — neophodni kolačići koji vas održavaju prijavljenima.
			</p>

			<h2>2. Kako koristimo vaše podatke</h2>
			<p>
				Vaše podatke koristimo za otvaranje i upravljanje vašim računom, personalizaciju palete boja
				i kupovnih preporuka koje vam prikazujemo, te za filtriranje trgovina i proizvoda prema vašoj
				navedenoj državi, budžetu i preferencijama.
			</p>

			<h2>3. Affiliate poveznice i trgovine trećih strana</h2>
			<p>
				Seasonit ostvaruje naknadu putem affiliate partnerstava s trgovinama na koje upućujemo
				poveznice (vidi naše <a href="/terms">Uvjete korištenja</a>). Kada kliknete na poveznicu
				prema partnerskoj trgovini, ta trgovina ili njena affiliate mreža može postaviti svoje
				kolačiće ili parametre praćenja radi pripisivanja preporuke — to je uređeno pravilima
				privatnosti tog trgovca, a ne našim. Ne dijelimo vaše podatke o računu ili profilu s
				trgovcima; komunicira se samo činjenica da ste kliknuli na poveznicu.
			</p>

			<h2>4. Usluge trećih strana koje koristimo</h2>
			<p>
				<strong>Supabase</strong> hostira našu bazu podataka i upravlja autentifikacijom, djelujući
				kao naš obrađivač podataka. <strong>Google</strong> obrađuje vašu autentifikaciju ako
				odaberete "Sign in with Google", prema svojim vlastitim pravilima privatnosti.
			</p>

			<h2>5. Kolačići</h2>
			<p>
				Koristimo neophodne kolačiće koji vas održavaju prijavljenima. Trenutno ne koristimo vlastite
				kolačiće za praćenje ili oglašavanje.
			</p>

			<h2>6. Čuvanje podataka</h2>
			<p>
				Vaše podatke o računu i profilu čuvamo dok je vaš račun aktivan. Brisanje možete zatražiti u
				bilo kojem trenutku — vidi Vaša prava ispod.
			</p>

			<h2>7. Vaša prava (GDPR)</h2>
			<p>Ako se nalazite u EU/EGP-u, imate pravo na:</p>
			<ul>
				<li>Pristup osobnim podacima koje o vama čuvamo</li>
				<li>Ispravak netočnih podataka</li>
				<li>Zahtjev za brisanje vaših podataka</li>
				<li>Zahtjev za kopiju vaših podataka (prenosivost)</li>
				<li>Prigovor na ili ograničenje određene obrade</li>
			</ul>
			<p>Za ostvarivanje ovih prava, kontaktirajte nas na legal@seasonit.app (placeholder — bit će ažurirano).</p>

			<h2>8. Djeca</h2>
			<p>
				Usluga nije namijenjena korisnicima mlađim od 16 godina. Ne prikupljamo svjesno podatke od
				djece.
			</p>

			<h2>9. Promjene ovih pravila</h2>
			<p>
				Ova Pravila privatnosti možemo s vremena na vrijeme ažurirati. Ažuriranu verziju objavit
				ćemo ovdje s novim datumom "posljednje ažurirano".
			</p>

			<h2>10. Kontakt</h2>
			<p>Pitanja o ovim Pravilima privatnosti? Kontaktirajte nas na legal@seasonit.app (placeholder — bit će ažurirano).</p>
		{/if}
	</main>

	<footer class="bottom-footer">
		<a href="/">season<em>it</em></a>
		<a href="/terms">Terms of Service</a>
	</footer>
</div>

<style>
	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.top-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem 2rem;
		border-bottom: 1px solid var(--border);
	}

	.logo {
		font-family: var(--font-heading);
		font-size: 1.5rem;
		color: var(--mocha);
		letter-spacing: 0.02em;
		text-decoration: none;
	}

	.logo em {
		font-style: italic;
		color: var(--dusty-rose);
	}

	.back-link {
		font-size: 0.875rem;
		color: var(--text-light);
		text-decoration: none;
		transition: color 0.15s;
	}

	.back-link:hover {
		color: var(--mocha);
	}

	.content {
		flex: 1;
		max-width: 680px;
		margin: 0 auto;
		width: 100%;
		padding: 3rem 1.5rem 5rem;
	}

	.lang-toggle {
		display: inline-flex;
		gap: 0.25rem;
		margin-bottom: 2rem;
		border: 1px solid var(--border);
		border-radius: var(--radius-btn);
		padding: 0.25rem;
	}

	.lang-toggle button {
		padding: 0.375rem 1rem;
		border: none;
		background: transparent;
		border-radius: var(--radius-btn);
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--text-light);
		transition: background 0.15s, color 0.15s;
	}

	.lang-toggle button.active {
		background: var(--mocha);
		color: white;
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

	p a {
		color: var(--dusty-rose);
		text-decoration: underline;
	}

	ul {
		margin: 0 0 1rem;
		padding-left: 1.25rem;
	}

	li {
		font-size: 0.9375rem;
		line-height: 1.75;
		color: var(--text-light);
		margin-bottom: 0.25rem;
	}

	.bottom-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 2rem;
		border-top: 1px solid var(--border);
		font-size: 0.8125rem;
	}

	.bottom-footer a {
		text-decoration: none;
		color: var(--text-light);
	}

	.bottom-footer a:first-child {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		color: var(--mocha);
	}

	.bottom-footer a:first-child em {
		font-style: italic;
		color: var(--dusty-rose);
	}

	.bottom-footer a:hover {
		color: var(--mocha);
	}

	@media (max-width: 480px) {
		.top-bar {
			padding: 1rem;
		}

		h1 {
			font-size: 2rem;
		}
	}
</style>
