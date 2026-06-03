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

		<form method="POST" use:enhance>
			<div class="field">
				<label for="email">Email</label>
				<input id="email" name="email" type="email" autocomplete="email" required />
			</div>
			<div class="field">
				<label for="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					autocomplete="current-password"
					required
				/>
			</div>
			<div class="actions">
				<button type="submit" formaction="?/signin" class="btn-primary">Sign in</button>
				<button type="submit" formaction="?/signup" class="btn-ghost">Create account</button>
			</div>
		</form>

		<div class="divider"><span>or</span></div>

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

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}

	label {
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--text);
		letter-spacing: 0.01em;
	}

	input {
		padding: 0.625rem 0.875rem;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: var(--cream);
		color: var(--text);
		font-size: 1rem;
		outline: none;
		transition: border-color 0.15s;
		width: 100%;
	}

	input:focus {
		border-color: var(--dusty-rose);
	}

	.actions {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 0.25rem;
	}

	.btn-primary {
		width: 100%;
		padding: 0.75rem;
		background: var(--mocha);
		color: white;
		border: none;
		border-radius: var(--radius-btn);
		font-size: 0.9375rem;
		font-weight: 500;
		letter-spacing: 0.02em;
		transition: background 0.15s;
	}

	.btn-primary:hover {
		background: var(--dusty-rose);
	}

	.btn-ghost {
		width: 100%;
		padding: 0.625rem;
		background: transparent;
		color: var(--text-light);
		border: none;
		border-radius: var(--radius-btn);
		font-size: 0.875rem;
		transition: color 0.15s;
	}

	.btn-ghost:hover {
		color: var(--dusty-rose);
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

	.divider {
		display: flex;
		align-items: center;
		gap: 1rem;
		color: var(--text-light);
		font-size: 0.75rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.divider::before,
	.divider::after {
		content: '';
		flex: 1;
		height: 1px;
		background: var(--border);
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
