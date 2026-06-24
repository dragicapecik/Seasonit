<script lang="ts">
	import { goto } from '$app/navigation';
	import { SEASONS, FAMILY_COLORS } from '$lib/data/seasons';
	import type { PageData } from './$types';

	export let data: PageData;

	const COUNTRIES = [
		{ code: 'HR', name: 'Croatia' },
		{ code: 'DE', name: 'Germany' },
		{ code: 'AT', name: 'Austria' },
		{ code: 'SI', name: 'Slovenia' },
		{ code: 'IT', name: 'Italy' },
		{ code: 'GB', name: 'United Kingdom' },
		{ code: 'US', name: 'United States' }
	];

	const GENDERS = [
		{ id: 'women', icon: '♀', label: 'Women' },
		{ id: 'men', icon: '♂', label: 'Men' },
		{ id: 'all', icon: '◎', label: 'All' }
	];

	const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

	const MATERIALS = [
		{
			id: 'natural',
			icon: '🌿',
			label: 'Natural only',
			description: 'Cotton, linen, silk, wool'
		},
		{
			id: 'blends',
			icon: '✦',
			label: 'Natural & blends',
			description: 'Includes viscose, bamboo'
		},
		{
			id: 'all',
			icon: '◎',
			label: 'All materials',
			description: 'No preference'
		}
	];

	const TOTAL = 2;

	let step = 1;
	let season = '';
	let previewId: string | null = null;
	let gender = '';
	let clothingSizes: string[] = [];
	let countryCode = 'HR';
	let priceMin = 0;
	let priceMax = 200;
	let selectedShops: string[] = [];
	let materials: string[] = [];
	let submitting = false;
	let submitError = '';

	$: detailSeason = SEASONS.find((s) => s.id === (previewId ?? season)) ?? null;

	$: filteredShops = data.shops.filter(
		(s: { country_codes: string[] | null }) => s.country_codes?.includes(countryCode)
	);

	$: canNext =
		step === 1
			? season !== ''
			: gender !== '' &&
				countryCode !== '' &&
				Number(priceMin) >= 0 &&
				Number(priceMax) > Number(priceMin) &&
				Number(priceMax) <= 500 &&
				materials.length > 0;

	function missingHint(
		currentStep: number,
		selectedSeason: string,
		selectedGender: string,
		selectedMaterials: string[]
	): string {
		if (currentStep === 1) return selectedSeason === '' ? 'Select a colour season to continue.' : '';

		const missing = [
			selectedGender === '' && 'your gender',
			selectedMaterials.length === 0 && 'at least one material preference'
		].filter(Boolean);

		return missing.length ? `Select ${missing.join(' and ')} to continue.` : '';
	}

	$: hint = missingHint(step, season, gender, materials);

	function next() {
		if (canNext && step < TOTAL) step++;
	}

	function prev() {
		if (step > 1) step--;
	}

	function onCountryChange() {
		selectedShops = [];
	}

	function toggleShop(id: string) {
		selectedShops = selectedShops.includes(id)
			? selectedShops.filter((s) => s !== id)
			: [...selectedShops, id];
	}

	function toggleMaterial(id: string) {
		materials = materials.includes(id)
			? materials.filter((m) => m !== id)
			: [...materials, id];
	}

	function toggleSize(size: string) {
		clothingSizes = clothingSizes.includes(size)
			? clothingSizes.filter((s) => s !== size)
			: [...clothingSizes, size];
	}

	async function finish() {
		if (!canNext || submitting) return;
		submitting = true;
		submitError = '';

		try {
			const res = await fetch('/api/profile', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					season,
					gender,
					clothingSizes,
					countryCode,
					priceMin: Number(priceMin),
					priceMax: Number(priceMax),
					shops: selectedShops,
					materialPref: materials
				})
			});

			if (!res.ok) {
				const body = await res.json().catch(() => ({}));
				submitError = body.message ?? 'Something went wrong.';
				submitting = false;
				return;
			}

			goto('/app');
		} catch {
			submitError = 'Something went wrong.';
			submitting = false;
		}
	}
</script>

<svelte:head>
	<title>Getting started — Seasonit</title>
</svelte:head>

<div class="page">
	<header class="top-bar">
		<span class="logo">Seasonit</span>
		<div class="progress-dots">
			{#each Array(TOTAL) as _, i}
				<span class="dot" class:active={i + 1 === step} class:done={i + 1 < step}></span>
			{/each}
		</div>
		<span class="step-label">Step {step} of {TOTAL}</span>
	</header>

	<main class="content wide">
		{#if step === 1}
			<h1>What is your colour season?</h1>
			<p class="hint">Hover a card to see its traits, then select your season.</p>

			<div class="season-layout">
				<div class="season-grid">
					{#each SEASONS as s}
						<!-- svelte-ignore a11y-mouse-events-have-key-events -->
						<button
							class="season-card"
							class:selected={season === s.id}
							on:mouseenter={() => (previewId = s.id)}
							on:mouseleave={() => (previewId = null)}
							on:click={() => (season = s.id)}
							type="button"
						>
							{#if season === s.id}
								<span class="check">✓</span>
							{/if}
							<div class="swatches">
								{#each s.swatches.slice(0, 4) as color}
									<span class="swatch" style="background:{color}"></span>
								{/each}
							</div>
							<strong class="season-name">{s.name}</strong>
						</button>
					{/each}
				</div>

				<div class="season-detail">
					{#if detailSeason}
						<span class="family-tag" style="color:{FAMILY_COLORS[detailSeason.family]}">{detailSeason.family}</span>
						<h3 class="detail-name">{detailSeason.name}</h3>
						<p class="detail-undertone">{detailSeason.undertone}</p>

						<div class="divider"></div>

						<div class="trait-row">
							<span class="trait-label">Skin</span>
							<div class="trait-dots">
								{#each detailSeason.skin as d}
									<span class="trait-dot" style="background:{d.hex}" title={d.label}></span>
								{/each}
							</div>
						</div>
						<div class="trait-row">
							<span class="trait-label">Eyes</span>
							<div class="trait-dots">
								{#each detailSeason.eyes as d}
									<span class="trait-dot" style="background:{d.hex}" title={d.label}></span>
								{/each}
							</div>
						</div>
						<div class="trait-row">
							<span class="trait-label">Hair</span>
							<div class="trait-dots">
								{#each detailSeason.hair as d}
									<span class="trait-dot hair-dot" style="background:{d.hex}" title={d.label}></span>
								{/each}
							</div>
						</div>

						<div class="divider"></div>

						<p class="detail-desc">{detailSeason.desc}</p>
					{:else}
						<p class="detail-hint">Hover a season<br />to see its traits.</p>
					{/if}
				</div>
			</div>
		{:else if step === 2}
			<h1>Tell us a bit more.</h1>
			<p class="hint">This helps us filter products to your style, size, and budget.</p>

			<section class="sub-section">
				<h2 class="sub-heading">Who are you shopping for?</h2>
				<div class="gender-row">
					{#each GENDERS as g}
						<button
							class="gender-card"
							class:selected={gender === g.id}
							on:click={() => (gender = g.id)}
							type="button"
						>
							{#if gender === g.id}<span class="check">✓</span>{/if}
							<span class="gender-icon">{g.icon}</span>
							<strong>{g.label}</strong>
						</button>
					{/each}
				</div>
			</section>

			<section class="sub-section">
				<h2 class="sub-heading">Clothing sizes</h2>
				<p class="hint-sm">Optional — select all that fit you.</p>
				<div class="size-grid">
					{#each SIZES as size}
						<button
							class="size-btn"
							class:selected={clothingSizes.includes(size)}
							on:click={() => toggleSize(size)}
							type="button"
						>{size}</button>
					{/each}
				</div>
			</section>

			<section class="sub-section">
				<h2 class="sub-heading">Country</h2>
				<div class="field">
					<label for="country">We'll show shops that deliver here</label>
					<select id="country" bind:value={countryCode} on:change={onCountryChange}>
						{#each COUNTRIES as c}
							<option value={c.code}>{c.name}</option>
						{/each}
					</select>
				</div>
			</section>

			<section class="sub-section">
				<h2 class="sub-heading">Budget</h2>
				<div class="price-block">
					<div class="price-labels">
						<span class="price-val">€{priceMin}</span>
						<span class="price-val">€{priceMax}</span>
					</div>
					<div class="slider-row">
						<label for="price-min" class="sr-only">Minimum price</label>
						<input
							id="price-min"
							type="range"
							min="0"
							max="500"
							step="5"
							bind:value={priceMin}
							on:input={() => {
								if (Number(priceMin) >= Number(priceMax)) priceMax = Number(priceMin) + 5;
							}}
						/>
					</div>
					<div class="slider-row">
						<label for="price-max" class="sr-only">Maximum price</label>
						<input
							id="price-max"
							type="range"
							min="0"
							max="500"
							step="5"
							bind:value={priceMax}
							on:input={() => {
								if (Number(priceMax) <= Number(priceMin)) priceMin = Number(priceMax) - 5;
							}}
						/>
					</div>
					<div class="range-bar">
						<div
							class="range-fill"
							style="left:{(Number(priceMin) / 500) * 100}%; right:{100 - (Number(priceMax) / 500) * 100}%"
						></div>
					</div>
					<div class="price-ends">
						<span>€0</span>
						<span>€500</span>
					</div>
				</div>
			</section>

			<section class="sub-section">
				<h2 class="sub-heading">Favourite shops</h2>
				<p class="hint-sm">Optional — you can change this later.</p>
				{#if filteredShops.length === 0}
					<p class="empty">No shops available for your country yet — more coming soon.</p>
				{:else}
					<div class="shop-grid">
						{#each filteredShops as shop}
							<button
								class="shop-card"
								class:selected={selectedShops.includes(shop.id)}
								on:click={() => toggleShop(shop.id)}
								type="button"
							>
								{#if selectedShops.includes(shop.id)}
									<span class="check">✓</span>
								{/if}
								<strong class="shop-name">{shop.name}</strong>
								<span class="shop-domain">{shop.domain}</span>
							</button>
						{/each}
					</div>
				{/if}
			</section>

			<section class="sub-section material-section">
				<div class="fabric-texture" aria-hidden="true"></div>
				<h2 class="sub-heading">Material preferences</h2>
				<p class="hint-sm">Select all that apply.</p>
				<div class="material-list">
					{#each MATERIALS as m}
						<button
							class="material-card"
							class:selected={materials.includes(m.id)}
							on:click={() => toggleMaterial(m.id)}
							type="button"
						>
							<span class="material-icon">{m.icon}</span>
							<div class="material-text">
								<strong>{m.label}</strong>
								<span>{m.description}</span>
							</div>
							{#if materials.includes(m.id)}
								<span class="check check-right">✓</span>
							{/if}
						</button>
					{/each}
				</div>
			</section>
		{/if}

		{#if submitError}
			<p class="error">{submitError}</p>
		{/if}
	</main>

	<nav class="bottom-nav">
		<div class="nav-left">
			{#if step > 1}
				<button class="btn-ghost" on:click={prev} type="button">← Back</button>
			{/if}
		</div>

		<div class="nav-right">
			{#if !canNext && hint}
				<p class="nav-hint">{hint}</p>
			{/if}

			{#if step < TOTAL}
				<button class="btn-primary" on:click={next} disabled={!canNext} type="button">
					Continue
				</button>
			{:else}
				<button
					class="btn-primary"
					on:click={finish}
					disabled={!canNext || submitting}
					type="button"
				>
					{submitting ? 'Saving…' : 'Done'}
				</button>
			{/if}
		</div>
	</nav>
</div>

<style>
	/* Layout */
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
		position: sticky;
		top: 0;
		background: var(--cream);
		z-index: 10;
	}

	.logo {
		font-family: var(--font-heading);
		font-size: 1.5rem;
		color: var(--mocha);
		letter-spacing: 0.02em;
	}

	.progress-dots {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--border);
		transition: background 0.2s;
	}

	.dot.done {
		background: var(--sage);
	}

	.dot.active {
		background: var(--dusty-rose);
		width: 10px;
		height: 10px;
	}

	.step-label {
		font-size: 0.8125rem;
		color: var(--text-light);
		min-width: 72px;
		text-align: right;
	}

	.content {
		flex: 1;
		max-width: 560px;
		margin: 0 auto;
		width: 100%;
		padding: 2.5rem 1.5rem 6rem;
	}

	.content.wide {
		max-width: 980px;
	}

	h1 {
		font-size: 2.25rem;
		color: var(--mocha);
		margin-bottom: 0.5rem;
		line-height: 1.15;
	}

	.hint {
		color: var(--text-light);
		font-size: 0.9375rem;
		margin-bottom: 2rem;
	}

	.hint-sm {
		color: var(--text-light);
		font-size: 0.8125rem;
		margin: -0.5rem 0 0.875rem;
	}

	/* Season step: grid + detail panel */
	.season-layout {
		display: flex;
		gap: 2.5rem;
		align-items: flex-start;
	}

	.season-grid {
		flex: 1;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.75rem;
	}

	.season-card {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.75rem;
		background: white;
		border: 2px solid var(--border);
		border-radius: var(--radius-card);
		cursor: pointer;
		text-align: left;
		transition: border-color 0.15s, box-shadow 0.15s;
	}

	.season-card:hover {
		border-color: var(--blush);
		box-shadow: 0 2px 8px rgba(122, 92, 82, 0.08);
	}

	.season-card.selected {
		border-color: var(--dusty-rose);
		background: rgba(181, 80, 46, 0.04);
	}

	.swatches {
		display: flex;
		gap: 3px;
	}

	.swatch {
		flex: 1;
		height: 24px;
		border-radius: 4px;
	}

	.season-name {
		font-family: var(--font-heading);
		font-size: 0.9375rem;
		font-weight: 500;
		color: var(--text);
		line-height: 1.2;
	}

	.season-detail {
		flex: 1;
		min-width: 0;
		max-width: 340px;
		position: sticky;
		top: 6.5rem;
		padding: 1.5rem;
		background: white;
		border: 1px solid var(--border);
		border-radius: var(--radius-card);
		min-height: 320px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.family-tag {
		font-size: 0.68rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		font-weight: 500;
		display: block;
		margin-bottom: 0.4rem;
	}

	.detail-name {
		font-family: var(--font-heading);
		font-size: 1.875rem;
		font-weight: 400;
		color: var(--text);
		line-height: 1.1;
		margin: 0 0 0.3rem;
	}

	.detail-undertone {
		font-size: 0.7rem;
		letter-spacing: 0.13em;
		text-transform: uppercase;
		color: var(--dusty-rose);
		font-weight: 500;
		margin: 0;
	}

	.divider {
		width: 36px;
		height: 1px;
		background: var(--border);
		margin: 0.9rem 0;
	}

	.trait-row {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		margin-bottom: 0.55rem;
	}

	.trait-label {
		font-size: 0.68rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--text-light);
		font-weight: 500;
		width: 30px;
		flex-shrink: 0;
	}

	.trait-dots {
		display: flex;
		gap: 5px;
	}

	.trait-dot {
		width: 19px;
		height: 19px;
		border-radius: 50%;
		display: inline-block;
		border: 1px solid rgba(0, 0, 0, 0.08);
	}

	.hair-dot {
		border-radius: 5px;
	}

	.detail-desc {
		font-size: 0.8125rem;
		line-height: 1.6;
		color: var(--text-light);
		margin: 0;
	}

	.detail-hint {
		font-family: var(--font-heading);
		font-size: 1.15rem;
		font-style: italic;
		font-weight: 300;
		color: var(--text-light);
		line-height: 1.5;
		margin: 0;
		text-align: center;
	}

	/* Shared checkmark */
	.check {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		width: 1.375rem;
		height: 1.375rem;
		background: var(--dusty-rose);
		color: white;
		border-radius: 50%;
		font-size: 0.7rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
	}

	.check-right {
		position: static;
		margin-left: auto;
		flex-shrink: 0;
	}

	/* Step 2: combined sub-sections */
	.sub-section {
		margin-bottom: 2.5rem;
		max-width: 640px;
	}

	.sub-section:last-child {
		margin-bottom: 0;
	}

	.material-section {
		position: relative;
		padding: 1.5rem;
		background: var(--cream);
		border: 1px solid var(--border);
		border-radius: var(--radius-card);
	}

	.sub-heading {
		font-family: var(--font-body);
		font-size: 1.0625rem;
		font-weight: 700;
		letter-spacing: -0.01em;
		color: var(--mocha);
		margin: 0 0 0.5rem;
	}

	/* Country step */
	.field {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label {
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--text);
		letter-spacing: 0.01em;
	}

	select {
		padding: 0.75rem 1rem;
		border: 1px solid var(--border);
		border-radius: 10px;
		background: white;
		color: var(--text);
		font-family: var(--font-body);
		font-size: 1rem;
		outline: none;
		cursor: pointer;
		appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238a7168' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 1rem center;
		padding-right: 2.5rem;
		transition: border-color 0.15s;
		max-width: 320px;
	}

	select:focus {
		border-color: var(--dusty-rose);
	}

	/* Price step */
	.price-block {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 480px;
	}

	.price-labels {
		display: flex;
		justify-content: space-between;
	}

	.price-val {
		font-family: var(--font-heading);
		font-size: 1.75rem;
		color: var(--mocha);
	}

	.slider-row {
		width: 100%;
	}

	input[type='range'] {
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
		height: 4px;
		background: var(--border);
		border-radius: 2px;
		outline: none;
		cursor: pointer;
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: var(--dusty-rose);
		cursor: pointer;
		border: 3px solid white;
		box-shadow: 0 1px 6px rgba(122, 92, 82, 0.25);
		transition: transform 0.1s;
	}

	input[type='range']::-webkit-slider-thumb:hover {
		transform: scale(1.1);
	}

	input[type='range']::-moz-range-thumb {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: var(--dusty-rose);
		cursor: pointer;
		border: 3px solid white;
		box-shadow: 0 1px 6px rgba(122, 92, 82, 0.25);
	}

	.range-bar {
		height: 4px;
		background: var(--border);
		border-radius: 2px;
		position: relative;
		margin-top: 0.25rem;
	}

	.range-fill {
		position: absolute;
		inset-block: 0;
		background: var(--dusty-rose);
		border-radius: 2px;
		opacity: 0.35;
	}

	.price-ends {
		display: flex;
		justify-content: space-between;
		font-size: 0.8125rem;
		color: var(--text-light);
	}

	/* Shop grid */
	.shop-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
		gap: 0.75rem;
	}

	.shop-card {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 1rem;
		background: white;
		border: 2px solid var(--border);
		border-radius: var(--radius-card);
		cursor: pointer;
		text-align: left;
		transition: border-color 0.15s, box-shadow 0.15s;
	}

	.shop-card:hover {
		border-color: var(--blush);
	}

	.shop-card.selected {
		border-color: var(--dusty-rose);
		background: rgba(181, 80, 46, 0.04);
	}

	.shop-name {
		font-size: 0.9375rem;
		color: var(--text);
	}

	.shop-domain {
		font-size: 0.8rem;
		color: var(--text-light);
	}

	/* Material list */
	.material-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		max-width: 560px;
	}

	.material-card {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.125rem 1.25rem;
		background: white;
		border: 2px solid var(--border);
		border-radius: var(--radius-card);
		cursor: pointer;
		text-align: left;
		width: 100%;
		transition: border-color 0.15s, box-shadow 0.15s;
	}

	.material-card:hover {
		border-color: var(--blush);
	}

	.material-card.selected {
		border-color: var(--dusty-rose);
		background: rgba(181, 80, 46, 0.04);
	}

	.material-icon {
		font-size: 1.5rem;
		line-height: 1;
		flex-shrink: 0;
	}

	.material-text {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
		flex: 1;
	}

	.material-text strong {
		font-size: 0.9375rem;
		color: var(--text);
	}

	.material-text span {
		font-size: 0.8125rem;
		color: var(--text-light);
	}

	/* Gender step */
	.gender-row {
		display: flex;
		gap: 1rem;
		max-width: 480px;
	}

	.gender-card {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		padding: 1.25rem 1rem;
		background: white;
		border: 2px solid var(--border);
		border-radius: var(--radius-card);
		cursor: pointer;
		transition: border-color 0.15s, box-shadow 0.15s;
	}

	.gender-card:hover {
		border-color: var(--blush);
	}

	.gender-card.selected {
		border-color: var(--dusty-rose);
		background: rgba(181, 80, 46, 0.04);
	}

	.gender-icon {
		font-size: 1.5rem;
		line-height: 1;
	}

	.gender-card strong {
		font-size: 0.9375rem;
		color: var(--text);
	}

	/* Size step */
	.size-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.625rem;
	}

	.size-btn {
		padding: 0.6rem 1.25rem;
		background: white;
		border: 2px solid var(--border);
		border-radius: var(--radius-btn);
		font-family: var(--font-body);
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--text-light);
		cursor: pointer;
		transition: border-color 0.15s, color 0.15s, background 0.15s;
	}

	.size-btn:hover {
		border-color: var(--blush);
		color: var(--text);
	}

	.size-btn.selected {
		border-color: var(--dusty-rose);
		background: rgba(181, 80, 46, 0.08);
		color: var(--mocha);
	}

	/* Empty state */
	.empty {
		color: var(--text-light);
		font-size: 0.9375rem;
		padding: 2rem;
		text-align: center;
		background: white;
		border-radius: var(--radius-card);
		border: 1px solid var(--border);
	}

	/* Error */
	.error {
		color: #9b3a2e;
		font-size: 0.875rem;
		padding: 0.75rem 1rem;
		background: #fdf4f2;
		border-radius: 8px;
		border: 1px solid #f0c4bc;
		margin-top: 1rem;
	}

	/* Bottom nav */
	.bottom-nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
		background: var(--cream);
		border-top: 1px solid var(--border);
	}

	.nav-left {
		display: flex;
	}

	.nav-right {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.nav-hint {
		font-size: 0.8125rem;
		color: var(--text-light);
		max-width: 280px;
		text-align: right;
	}

	.btn-primary {
		padding: 0.75rem 2rem;
		background: var(--mocha);
		color: white;
		border: none;
		border-radius: var(--radius-btn);
		font-size: 0.9375rem;
		font-weight: 500;
		letter-spacing: 0.02em;
		cursor: pointer;
		transition: background 0.15s;
	}

	.btn-primary:hover:not(:disabled) {
		background: var(--dusty-rose);
	}

	.btn-primary:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.btn-ghost {
		padding: 0.75rem 1.25rem;
		background: transparent;
		color: var(--text-light);
		border: none;
		border-radius: var(--radius-btn);
		font-size: 0.9375rem;
		cursor: pointer;
		transition: color 0.15s;
	}

	.btn-ghost:hover {
		color: var(--mocha);
	}

	/* Accessibility */
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	/* Responsive */
	@media (max-width: 900px) {
		.season-layout {
			flex-direction: column;
		}

		.season-detail {
			position: static;
			max-width: 100%;
			min-height: auto;
		}

		.season-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 720px) {
		.season-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.content {
			padding-bottom: 7rem;
		}

		.gender-row {
			flex-direction: column;
		}
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 1.875rem;
		}

		.top-bar {
			padding: 1rem;
		}

		.bottom-nav {
			padding: 0.875rem 1rem;
		}
	}
</style>
