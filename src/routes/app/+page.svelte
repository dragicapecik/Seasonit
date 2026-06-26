<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Seasonit</title>
</svelte:head>

<header class="top-bar">
	<span class="logo">Seasonit</span>
	<div class="actions">
		<a class="btn-onboarding" href="/onboarding">Onboarding</a>
		<form method="POST" action="/auth/signout">
			<button class="btn-signout" type="submit">Sign out</button>
		</form>
	</div>
</header>

<main>
	<h1>Your Season</h1>

	{#if data.products.length === 0}
		<p class="empty">No products yet — crawler hasn't found anything for you.</p>
	{:else}
		<div class="grid">
			{#each data.products as product (product.id)}
				<a
					class="card"
					href={product.affiliate_url ?? product.product_url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{#if product.image_url}
						<img src={product.image_url} alt={product.name} loading="lazy" />
					{/if}
					<div class="card-body">
						<p class="name">{product.name}</p>
						<p class="price">{product.price} {product.currency}</p>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</main>

<style>
	.top-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem 2rem;
		border-bottom: 1px solid var(--border);
		background: var(--cream);
	}

	.logo {
		font-family: var(--font-heading);
		font-size: 1.5rem;
		color: var(--mocha);
		letter-spacing: 0.02em;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.btn-onboarding {
		padding: 0.625rem 1.5rem;
		background: var(--mocha);
		color: white;
		border: 1px solid var(--mocha);
		border-radius: var(--radius-btn);
		font-family: var(--font-body);
		font-size: 0.875rem;
		text-decoration: none;
		cursor: pointer;
		transition: background 0.15s;
	}

	.btn-onboarding:hover {
		background: var(--dusty-rose);
		border-color: var(--dusty-rose);
	}

	.btn-signout {
		padding: 0.625rem 1.5rem;
		background: transparent;
		color: var(--text-light);
		border: 1px solid var(--border);
		border-radius: var(--radius-btn);
		font-family: var(--font-body);
		font-size: 0.875rem;
		cursor: pointer;
		transition: border-color 0.15s, color 0.15s;
	}

	.btn-signout:hover {
		border-color: var(--dusty-rose);
		color: var(--mocha);
	}

	main {
		min-height: calc(100vh - 73px);
		padding: 2rem;
	}

	h1 {
		font-family: var(--font-heading);
		font-size: 3rem;
		color: var(--mocha);
		margin-bottom: 1.5rem;
	}

	.empty {
		color: var(--text-light);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 1.5rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		border: 1px solid var(--border);
		border-radius: var(--radius-card);
		overflow: hidden;
		background: white;
		transition: border-color 0.15s;
	}

	.card:hover {
		border-color: var(--dusty-rose);
	}

	.card img {
		width: 100%;
		aspect-ratio: 3 / 4;
		object-fit: cover;
		background: var(--blush);
	}

	.card-body {
		padding: 0.75rem 1rem;
	}

	.name {
		font-size: 0.875rem;
		color: var(--text);
		line-height: 1.3;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.price {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		color: var(--dusty-rose);
		margin-top: 0.4rem;
	}
</style>
