<footer class="bottom-footer">
	<a href="/">season<em>it</em></a>
	<div class="footer-links">
		<slot />
	</div>
</footer>

<style>
	.bottom-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 2rem;
		border-top: 1px solid var(--border);
		font-size: 0.8125rem;
	}

	.bottom-footer > a:first-child {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		color: var(--mocha);
		text-decoration: none;
	}

	.bottom-footer > a:first-child em {
		font-style: italic;
		color: var(--dusty-rose);
	}

	.footer-links {
		display: flex;
		gap: 1.5rem;
	}

	.footer-links :global(a) {
		color: var(--text-light);
		text-decoration: none;
	}

	.footer-links :global(a:hover) {
		color: var(--mocha);
	}
</style>
