<header class="top-bar">
	<a href="/" class="logo">season<em>it</em></a>
	<a href="/" class="back-link">← Back to home</a>
</header>

<style>
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

	@media (max-width: 480px) {
		.top-bar {
			padding: 1rem;
		}
	}
</style>
