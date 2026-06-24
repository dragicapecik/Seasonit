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
	<p>Dashboard coming soon.</p>
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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 2rem;
	}

	h1 {
		font-family: var(--font-heading);
		font-size: 3rem;
		color: var(--mocha);
	}

	p {
		color: var(--text-light);
	}
</style>
