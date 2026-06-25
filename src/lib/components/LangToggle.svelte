<script lang="ts">
	export let lang: 'en' | 'hr' = 'en';
</script>

<div class="lang-toggle">
	<button class:active={lang === 'en'} on:click={() => (lang = 'en')} type="button">EN</button>
	<button class:active={lang === 'hr'} on:click={() => (lang = 'hr')} type="button">HR</button>
</div>

<style>
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
</style>
