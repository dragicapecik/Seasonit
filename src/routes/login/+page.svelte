<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Sign in — Seasonit</title>
</svelte:head>

<main class="auth-page">
	<div class="auth-card">
		<h1>Seasonit</h1>
		<p class="subtitle">Dress for your season.</p>

		{#if form?.message}
			<p class="error">{form.message}</p>
		{/if}

		<form method="POST" action="?/google" use:enhance>
			<button type="submit" class="btn-outline">Continue with Google</button>
		</form>
	</div>
</main>

<style>
	.auth-page {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.auth-card {
		width: 100%;
		max-width: 400px;
		background: white;
		border-radius: var(--radius-card);
		padding: 2.5rem;
		border: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	h1 {
		font-size: 2.75rem;
		color: var(--mocha);
		text-align: center;
		letter-spacing: 0.02em;
	}

	.subtitle {
		color: var(--text-light);
		text-align: center;
		font-size: 0.9rem;
		margin-top: -0.75rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.btn-outline {
		width: 100%;
		padding: 0.75rem;
		background: transparent;
		color: var(--text);
		border: 1px solid var(--border);
		border-radius: var(--radius-btn);
		font-size: 0.9375rem;
		font-weight: 500;
		transition:
			border-color 0.15s,
			background 0.15s;
	}

	.btn-outline:hover {
		border-color: var(--dusty-rose);
		background: var(--cream);
	}

	.error {
		color: #9b3a2e;
		font-size: 0.875rem;
		padding: 0.625rem 0.875rem;
		background: #fdf4f2;
		border-radius: 8px;
		border: 1px solid #f0c4bc;
	}
</style>
