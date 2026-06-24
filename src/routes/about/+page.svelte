<svelte:head>
	<title>About — Seasonit</title>
	<meta
		name="description"
		content="Why colour analysis matters and how Seasonit turns your colour season into a curated shopping experience."
	/>
</svelte:head>

<div class="page">
	<header class="top-bar">
		<a href="/" class="logo">season<em>it</em></a>
		<a href="/" class="back-link">← Back to home</a>
	</header>

	<main class="content">
		<p class="eyebrow">About Seasonit</p>
		<h1>Dressing in the colours<br /><em>that already suit you</em></h1>
		<p class="lede">
			Most wardrobes are full of colours that don't actually work for the person wearing them.
			Seasonit starts from a simple idea: figure out your natural colouring first, then shop —
			not the other way around.
		</p>

		<h2>Why colour analysis</h2>
		<p>
			Seasonal colour analysis is a method stylists have used for decades to match clothing colours
			to a person's natural colouring. It looks at three physical traits — your skin's undertone,
			your eye colour, and your hair colour — and combines them along three dimensions:
		</p>
		<ul class="trait-list">
			<li><strong>Temperature</strong> — is your undertone warm (golden, peachy) or cool (pink, blue)?</li>
			<li><strong>Depth</strong> — are your natural colours light or deep?</li>
			<li><strong>Clarity</strong> — are they soft and muted, or bright and clear?</li>
		</ul>
		<p>
			Those three dimensions sort everyone into one of twelve colour seasons — from Light Spring to
			Dark Winter — each with its own palette of colours that sit naturally well against your skin,
			eyes, and hair. Wear colours from your season and things tend to look effortless: skin looks
			clearer, eyes look brighter, and you need less effort (and less makeup) to look put-together.
			Wear colours outside it and the opposite happens, even if the item itself is well made.
		</p>

		<h2>Why it matters for shopping</h2>
		<p>
			Once you know your season, shopping gets dramatically simpler. Instead of guessing whether a
			colour will "work," you already know. Fewer impulse buys that sit unworn in the closet, fewer
			returns, more pieces that actually get reached for — your existing clothes will mix and match
			more easily too, because they're all drawn from the same underlying palette.
		</p>

		<h2>How Seasonit works</h2>
		<div class="steps-grid">
			<div class="step">
				<div class="step-num">01</div>
				<h3>Find your season</h3>
				<p>
					Explore the colour spiral and compare your skin, eyes, and hair against each of the
					twelve seasons until one feels right — or use the quick self-tests if you're unsure.
				</p>
			</div>
			<div class="step">
				<div class="step-num">02</div>
				<h3>Tell us your details</h3>
				<p>
					Gender, clothing sizes, country, and budget — a two-minute onboarding so we only ever
					show you things that actually fit, ship to you, and cost what you want to spend.
				</p>
			</div>
			<div class="step">
				<div class="step-num">03</div>
				<h3>Shop with purpose</h3>
				<p>
					We curate product picks from partner retailers filtered to your palette and
					preferences. When you buy through one of those links, Seasonit may earn a commission
					from the retailer — at no extra cost to you. See our
					<a href="/terms">Terms of Service</a> for the full disclosure.
				</p>
			</div>
		</div>

		<h2>What Seasonit isn't</h2>
		<p>
			We're not a retailer, and colour season classification is a styling tool, not an exact
			science — think of it as a strong starting point, not a strict rule. You're always free to
			wear whatever you like; we're just here to make the "does this suit me" question easier to
			answer.
		</p>

		<a href="/#seasons" class="cta">Find your season →</a>
	</main>

	<footer class="bottom-footer">
		<a href="/">season<em>it</em></a>
		<div class="footer-links">
			<a href="/privacy">Privacy Policy</a>
			<a href="/terms">Terms of Service</a>
		</div>
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
		max-width: 720px;
		margin: 0 auto;
		width: 100%;
		padding: 3.5rem 1.5rem 5rem;
	}

	.eyebrow {
		font-size: 0.72rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--dusty-rose);
		margin-bottom: 1rem;
	}

	h1 {
		font-size: clamp(2.25rem, 4.5vw, 3.25rem);
		color: var(--mocha);
		line-height: 1.15;
		margin-bottom: 1.25rem;
	}

	h1 em {
		font-style: italic;
		color: var(--dusty-rose);
	}

	.lede {
		font-size: 1.0625rem;
		color: var(--text-light);
		line-height: 1.7;
		max-width: 560px;
		margin-bottom: 1rem;
	}

	h2 {
		font-size: 1.5rem;
		color: var(--text);
		margin: 2.5rem 0 0.875rem;
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

	.trait-list {
		margin: 0 0 1.25rem;
		padding-left: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.trait-list li {
		font-size: 0.9375rem;
		line-height: 1.6;
		color: var(--text-light);
	}

	.trait-list strong {
		color: var(--text);
		font-weight: 600;
	}

	.steps-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.75rem;
		margin-top: 0.5rem;
	}

	.step-num {
		font-family: var(--font-heading);
		font-size: 2.5rem;
		font-weight: 300;
		color: var(--blush);
		line-height: 1;
		margin-bottom: 0.5rem;
	}

	.step h3 {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		font-weight: 500;
		color: var(--mocha);
		margin-bottom: 0.4rem;
	}

	.step p {
		font-size: 0.84rem;
		line-height: 1.65;
	}

	.cta {
		display: inline-flex;
		margin-top: 2.5rem;
		padding: 0.75rem 1.75rem;
		background: var(--mocha);
		color: white;
		border-radius: var(--radius-btn);
		font-size: 0.9375rem;
		font-weight: 500;
		text-decoration: none;
		transition: background 0.15s;
	}

	.cta:hover {
		background: var(--dusty-rose);
	}

	.bottom-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 2rem;
		border-top: 1px solid var(--border);
		font-size: 0.8125rem;
	}

	.bottom-footer > a {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		color: var(--mocha);
		text-decoration: none;
	}

	.bottom-footer > a em {
		font-style: italic;
		color: var(--dusty-rose);
	}

	.footer-links {
		display: flex;
		gap: 1.5rem;
	}

	.footer-links a {
		color: var(--text-light);
		text-decoration: none;
	}

	.footer-links a:hover {
		color: var(--mocha);
	}

	@media (max-width: 700px) {
		.steps-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
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
