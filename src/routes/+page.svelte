<script lang="ts">
	import { enhance } from '$app/forms';
	import SeasonWheel from '$lib/components/SeasonWheel.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let modalOpen = false;
	let modalMode: 'login' | 'signup' = 'signup';

	function openModal(mode: 'login' | 'signup') {
		modalMode = mode;
		modalOpen = true;
	}

	function closeModal() {
		modalOpen = false;
	}

	function handleOverlayClick(e: MouseEvent) {
		if (e.target === e.currentTarget) closeModal();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') closeModal();
	}

	$: if (form?.message) {
		modalOpen = true;
		if (form.mode === 'login' || form.mode === 'signup') modalMode = form.mode;
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
	<title>Seasonit — Dress in your natural light</title>
	<meta
		name="description"
		content="Discover your colour season and shop pieces curated to your unique undertone."
	/>
</svelte:head>

<!-- NAV -->
<nav>
	<a href="/" class="nav-logo">season<em>it</em></a>
	<ul class="nav-links">
		<li><a href="#seasons">Find your season</a></li>
		<li><a href="#how-it-works">How it works</a></li>
		<li>
			<button class="btn-nav" on:click={() => openModal('login')} type="button">Sign in</button>
		</li>
	</ul>
</nav>

<!-- HEADER BAR: title left, CTAs right -->
<section class="header-bar">
	<div class="header-bg" aria-hidden="true"></div>
	<div class="fabric-texture" aria-hidden="true"></div>

	<div class="header-title">
		<p class="eyebrow">Your colour season awaits</p>
		<h1>Dress in your <em>natural light</em></h1>
	</div>

	<div class="header-cta">
		<p class="header-sub">
			Know your season, your size, and where you ship to — and we'll curate every piece to your
			palette.
		</p>
		<div class="cta-row">
			<button class="btn-primary" on:click={() => openModal('signup')} type="button">
				Get started free →
			</button>
			<form method="POST" action="?/google" use:enhance>
				<button type="submit" class="btn-google">
					<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
						<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
						<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
						<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
						<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
					</svg>
					Sign in with Google
				</button>
			</form>
		</div>
		<p class="header-note">No credit card required</p>
	</div>
</section>

<!-- SPIRAL -->
<section class="section wheel-section" id="seasons">
	<p class="section-label">Find your season</p>
	<h2 class="section-title">Your unique <em>colour map</em></h2>

	<div class="season-intro">
		<p class="intro-text">
			Your season is determined by three physical traits: <strong>skin undertone</strong>,
			<strong>eye colour</strong>, and <strong>hair colour</strong>. The spiral runs from lightest
			(outer) to deepest (inner).
		</p>
		<div class="self-test-row">
			<div class="self-test-item">
				<span class="test-icon">🫀</span>
				<div>
					<strong>Vein check</strong> — look at your inner wrist. Blue or purple veins point cool;
					green or olive veins point warm.
				</div>
			</div>
			<div class="self-test-item">
				<span class="test-icon">🤍</span>
				<div>
					<strong>White vs ivory</strong> — hold pure white and warm ivory fabric near your face in
					natural light. The one that doesn't wash you out reveals your undertone.
				</div>
			</div>
		</div>
	</div>

	<SeasonWheel />
</section>

<!-- HOW IT WORKS -->
<section class="section" id="how-it-works">
	<p class="section-label">The process</p>
	<h2 class="section-title">Three steps to your <em>perfect palette</em></h2>

	<div class="steps-grid">
		<div class="step">
			<div class="step-num">01</div>
			<div class="step-icon">
				<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="8" r="4" />
					<path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
				</svg>
			</div>
			<h3 class="step-title">Know your season before you start</h3>
			<p class="step-desc">
				You'll need your colour season (Spring, Summer, Autumn, or Winter), your clothing sizes, and
				your delivery country. Explore the spiral above to identify your season.
			</p>
		</div>

		<div class="step">
			<div class="step-num">02</div>
			<div class="step-icon">
				<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="3" />
					<path d="M3 12h2M19 12h2M12 3v2M12 19v2" />
					<path d="M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M6.34 17.66l1.42-1.42M16.24 7.76l1.42-1.42" />
				</svg>
			</div>
			<h3 class="step-title">Unlock your palette</h3>
			<p class="step-desc">
				Get a personalised colour palette with your best neutrals, statement hues, and shades to
				avoid — built for your season and skin undertone.
			</p>
		</div>

		<div class="step">
			<div class="step-num">03</div>
			<div class="step-icon">
				<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
					<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
					<line x1="3" y1="6" x2="21" y2="6" />
					<path d="M16 10a4 4 0 01-8 0" />
				</svg>
			</div>
			<h3 class="step-title">Shop your colours</h3>
			<p class="step-desc">
				Browse curated products from trusted retailers, filtered by your palette. Every piece matched
				to your season — no more guesswork.
			</p>
		</div>
	</div>
</section>

<!-- FOOTER -->
<footer>
	<div class="footer-logo">season<em>it</em></div>
	<ul class="footer-links">
		<li><a href="/about">About</a></li>
		<li><a href="/privacy">Privacy</a></li>
		<li><a href="/terms">Terms</a></li>
		<li><a href="/about">Contact</a></li>
	</ul>
	<p class="footer-copy">© 2026 Seasonit. All rights reserved.</p>
</footer>

<!-- AUTH MODAL -->
{#if modalOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
	<div class="modal-overlay" on:click={handleOverlayClick}>
		<div class="modal" role="dialog" aria-modal="true" aria-label="Sign in or create account">
			<button class="modal-close" on:click={closeModal} type="button" aria-label="Close">×</button>

			{#if modalMode === 'login'}
				<h2 class="modal-title">Welcome <em>back</em></h2>
				<p class="modal-sub">Sign in to your Seasonit account</p>
			{:else}
				<h2 class="modal-title">Find your <em>season</em></h2>
				<p class="modal-sub">Create your free Seasonit account</p>
			{/if}

			{#if form?.message}
				<p class="modal-error">{form.message}</p>
			{/if}

			<form method="POST" action="?/google" use:enhance>
				<button type="submit" class="btn-google-full">
					<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
						<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
						<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
						<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
						<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
					</svg>
					{modalMode === 'login' ? 'Continue with Google' : 'Sign up with Google'}
				</button>
			</form>

			<div class="modal-divider"><span>or</span></div>

			{#if modalMode === 'login'}
				<form method="POST" action="?/signin" use:enhance>
					<div class="modal-inputs">
						<input class="modal-input" type="email" name="email" placeholder="Email address" required />
						<input class="modal-input" type="password" name="password" placeholder="Password" required />
					</div>
					<button type="submit" class="btn-full">Sign in</button>
				</form>
				<p class="modal-toggle">
					Don't have an account?
					<button type="button" on:click={() => (modalMode = 'signup')}>Create one</button>
				</p>
			{:else}
				<form method="POST" action="?/signup" use:enhance>
					<div class="modal-inputs">
						<input class="modal-input" type="email" name="email" placeholder="Email address" required />
						<input
							class="modal-input"
							type="password"
							name="password"
							placeholder="Create password"
							minlength="8"
							required
						/>
					</div>
					<button type="submit" class="btn-full">Create account</button>
				</form>
				<p class="modal-toggle">
					Already have an account?
					<button type="button" on:click={() => (modalMode = 'login')}>Sign in</button>
				</p>
			{/if}
		</div>
	</div>
{/if}

<style>
	/* ── Variables ── */
	:root {
		--l-rose: var(--dusty-rose);
		--l-rose-deep: #8f3e22;
		--l-ink: var(--mocha);
		--l-ink-soft: #4a4540;
		--l-ink-muted: #8a8278;
		--l-blush: var(--blush);
		--l-blush-mid: #e0b8a0;
	}

	/* ── Nav ── */
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem 4rem;
		background: rgba(250, 246, 241, 0.92);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid rgba(181, 80, 46, 0.12);
	}

	.nav-logo {
		font-family: var(--font-heading);
		font-size: 1.6rem;
		font-weight: 500;
		color: var(--l-ink);
		letter-spacing: 0.04em;
		text-decoration: none;
	}

	.nav-logo em {
		font-style: italic;
		color: var(--l-rose);
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 2.5rem;
		list-style: none;
	}

	.nav-links a {
		font-size: 0.8rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--l-ink-soft);
		text-decoration: none;
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: var(--l-rose);
	}

	.btn-nav {
		font-family: var(--font-body);
		font-size: 0.8rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		padding: 0.5rem 1.25rem;
		border: 1px solid var(--l-rose);
		background: transparent;
		color: var(--l-rose);
		border-radius: 2px;
		cursor: pointer;
		transition: background 0.2s, color 0.2s;
	}

	.btn-nav:hover {
		background: var(--l-rose);
		color: white;
	}

	/* ── Header bar ── */
	.header-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 4rem;
		padding: 6rem 4rem 2.5rem;
		position: relative;
		border-bottom: 1px solid rgba(20, 20, 20, 0.07);
	}

	.header-bg {
		position: absolute;
		inset: 0;
		background: radial-gradient(ellipse 70% 120% at 15% 60%, rgba(232, 201, 187, 0.28) 0%, transparent 70%);
		pointer-events: none;
	}

	.header-title {
		position: relative;
		z-index: 1;
	}

	.eyebrow {
		font-size: 0.72rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--l-rose);
		margin-bottom: 0.75rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.eyebrow::before {
		content: '';
		display: block;
		width: 28px;
		height: 1px;
		background: var(--l-rose);
	}

	h1 {
		font-family: var(--font-body);
		font-size: clamp(2.25rem, 4vw, 3.5rem);
		font-weight: 700;
		letter-spacing: -0.01em;
		line-height: 1.05;
		color: var(--l-ink);
		margin: 0;
	}

	h1 em {
		font-style: italic;
		color: var(--l-rose);
	}

	.header-cta {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.75rem;
		flex-shrink: 0;
		max-width: 420px;
	}

	.header-sub {
		font-family: var(--font-heading);
		font-size: 1rem;
		font-weight: 300;
		color: var(--l-ink-soft);
		line-height: 1.6;
		text-align: right;
		margin: 0;
	}

	.cta-row {
		display: flex;
		align-items: center;
		gap: 0.625rem;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		padding: 0.7rem 1.375rem;
		background: var(--l-rose);
		border: 1px solid var(--l-rose);
		border-radius: 2px;
		font-family: var(--font-body);
		font-size: 0.8125rem;
		font-weight: 500;
		color: white;
		cursor: pointer;
		transition: background 0.2s;
		letter-spacing: 0.02em;
		white-space: nowrap;
	}

	.btn-primary:hover {
		background: var(--l-rose-deep);
		border-color: var(--l-rose-deep);
	}

	.btn-google {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.7rem 1rem;
		background: white;
		border: 1px solid rgba(20, 20, 20, 0.15);
		border-radius: 2px;
		font-family: var(--font-body);
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--l-ink);
		cursor: pointer;
		transition: border-color 0.2s, box-shadow 0.2s;
		white-space: nowrap;
	}

	.btn-google:hover {
		border-color: var(--l-rose);
		box-shadow: 0 2px 8px rgba(181, 80, 46, 0.12);
	}

	.header-note {
		font-size: 0.7rem;
		color: var(--l-ink-muted);
	}

	/* ── Sections ── */
	.section {
		padding: 5rem 4rem;
	}

	.section-label {
		font-size: 0.72rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--l-rose);
		margin-bottom: 0.8rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.section-label::before {
		content: '';
		display: block;
		width: 28px;
		height: 1px;
		background: var(--l-rose);
	}

	.section-title {
		font-family: var(--font-body);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		letter-spacing: -0.01em;
		color: var(--l-ink);
		line-height: 1.1;
		margin-bottom: 3rem;
		max-width: 500px;
	}

	.section-title em {
		font-style: italic;
		color: var(--l-rose);
	}

	/* ── Spiral section ── */
	.wheel-section {
		background: var(--l-blush);
		padding-top: 3.5rem;
		padding-bottom: 4rem;
	}

	.wheel-section .section-title {
		margin-bottom: 1.5rem;
	}

	.season-intro {
		margin-bottom: 2.5rem;
		max-width: 880px;
	}

	.intro-text {
		font-size: 0.875rem;
		color: var(--l-ink-soft);
		line-height: 1.7;
		margin: 0 0 1.25rem;
	}

	.intro-text strong {
		color: var(--l-ink);
		font-weight: 600;
	}

	.self-test-row {
		display: flex;
		gap: 2rem;
	}

	.self-test-item {
		display: flex;
		gap: 0.625rem;
		font-size: 0.8125rem;
		color: var(--l-ink-soft);
		line-height: 1.6;
		flex: 1;
	}

	.self-test-item strong {
		color: var(--l-ink);
		font-weight: 600;
	}

	.test-icon {
		flex-shrink: 0;
		font-size: 1rem;
		line-height: 1.6;
	}

	@media (max-width: 640px) {
		.self-test-row {
			flex-direction: column;
			gap: 1rem;
		}
	}

	/* ── Process ── */
	.steps-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2.5rem;
	}

	.step-num {
		font-family: var(--font-heading);
		font-size: 4rem;
		font-weight: 300;
		color: var(--l-blush-mid);
		line-height: 1;
		margin-bottom: 0.75rem;
	}

	.step-icon {
		width: 44px;
		height: 44px;
		background: var(--l-blush);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.25rem;
	}

	.step-icon svg {
		width: 22px;
		height: 22px;
		stroke: var(--l-rose);
	}

	.step-title {
		font-family: var(--font-heading);
		font-size: 1.3rem;
		font-weight: 500;
		color: var(--l-ink);
		margin-bottom: 0.5rem;
	}

	.step-desc {
		font-size: 0.875rem;
		color: var(--l-ink-soft);
		line-height: 1.7;
	}

	/* ── Footer ── */
	footer {
		background: var(--l-ink);
		padding: 3rem 4rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.footer-logo {
		font-family: var(--font-heading);
		font-size: 1.4rem;
		font-weight: 400;
		color: white;
		letter-spacing: 0.04em;
	}

	.footer-logo em {
		font-style: italic;
		color: var(--l-blush-mid);
	}

	.footer-links {
		display: flex;
		gap: 2rem;
		list-style: none;
	}

	.footer-links a {
		font-size: 0.78rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.45);
		text-decoration: none;
		transition: color 0.2s;
	}

	.footer-links a:hover {
		color: var(--l-blush-mid);
	}

	.footer-copy {
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.3);
	}

	/* ── Modal ── */
	.modal-overlay {
		position: fixed;
		inset: 0;
		background: rgba(20, 20, 20, 0.5);
		z-index: 200;
		display: flex;
		align-items: center;
		justify-content: center;
		backdrop-filter: blur(4px);
	}

	.modal {
		background: var(--cream);
		border-radius: 4px;
		padding: 2.5rem;
		width: 100%;
		max-width: 400px;
		position: relative;
		animation: slide-up 0.22s ease;
		margin: 1rem;
	}

	@keyframes slide-up {
		from { opacity: 0; transform: translateY(14px); }
		to   { opacity: 1; transform: translateY(0); }
	}

	.modal-close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		cursor: pointer;
		color: var(--l-ink-muted);
		font-size: 1.4rem;
		line-height: 1;
		padding: 0.2rem 0.4rem;
		transition: color 0.2s;
	}

	.modal-close:hover { color: var(--l-ink); }

	.modal-title {
		font-family: var(--font-heading);
		font-size: 1.875rem;
		font-weight: 400;
		color: var(--l-ink);
		margin-bottom: 0.35rem;
	}

	.modal-title em {
		font-style: italic;
		color: var(--l-rose);
	}

	.modal-sub {
		font-size: 0.84rem;
		color: var(--l-ink-muted);
		margin-bottom: 1.5rem;
	}

	.modal-error {
		font-size: 0.84rem;
		color: #9b3a2e;
		background: #fdf4f2;
		border: 1px solid #f0c4bc;
		border-radius: 4px;
		padding: 0.625rem 0.875rem;
		margin-bottom: 1rem;
	}

	.btn-google-full {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding: 0.8rem;
		background: white;
		border: 1px solid rgba(20, 20, 20, 0.15);
		border-radius: 2px;
		font-family: var(--font-body);
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--l-ink);
		cursor: pointer;
		transition: border-color 0.2s;
	}

	.btn-google-full:hover { border-color: var(--l-rose); }

	.modal-divider {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.72rem;
		color: var(--l-ink-muted);
		letter-spacing: 0.1em;
		margin: 1rem 0;
	}

	.modal-divider::before,
	.modal-divider::after {
		content: '';
		flex: 1;
		height: 1px;
		background: rgba(20, 20, 20, 0.1);
	}

	.modal-inputs {
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
		margin-bottom: 0.875rem;
	}

	.modal-input {
		padding: 0.75rem 1rem;
		border: 1px solid rgba(20, 20, 20, 0.15);
		border-radius: 2px;
		font-family: var(--font-body);
		font-size: 0.875rem;
		color: var(--l-ink);
		background: white;
		outline: none;
		transition: border-color 0.2s;
	}

	.modal-input:focus { border-color: var(--l-rose); }

	.btn-full {
		width: 100%;
		padding: 0.8rem;
		background: var(--l-rose);
		border: none;
		border-radius: 2px;
		font-family: var(--font-body);
		font-size: 0.875rem;
		font-weight: 500;
		color: white;
		cursor: pointer;
		transition: background 0.2s;
	}

	.btn-full:hover { background: var(--l-rose-deep); }

	.modal-toggle {
		font-size: 0.8rem;
		color: var(--l-ink-muted);
		text-align: center;
		margin-top: 1rem;
	}

	.modal-toggle button {
		background: none;
		border: none;
		color: var(--l-rose);
		cursor: pointer;
		font-size: inherit;
		font-family: inherit;
		padding: 0;
		text-decoration: underline;
	}

	/* ── Responsive ── */
	@media (max-width: 768px) {
		nav {
			padding: 1rem 1.5rem;
		}

		.header-bar {
			flex-direction: column;
			align-items: flex-start;
			gap: 2rem;
			padding: 5.5rem 1.5rem 2rem;
		}

		.header-cta {
			align-items: flex-start;
			max-width: 100%;
		}

		.header-sub {
			text-align: left;
		}

		.section {
			padding: 3.5rem 1.5rem;
		}

		.steps-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		footer {
			padding: 2rem 1.5rem;
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
