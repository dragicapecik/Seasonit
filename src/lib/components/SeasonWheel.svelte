<script lang="ts">
	import { fade } from 'svelte/transition';
	import { SEASONS, FAMILY_COLORS } from '$lib/data/seasons';
	import { colorMood } from '$lib/utils/colorMood';

	export let compact = false;

	const CX = 260, CY = 260, R_MAX = 200, R_MIN = 65, TURNS = 2;
	const N = SEASONS.length;

	function spiralPt(t: number) {
		const angle = -Math.PI / 2 + t * TURNS * 2 * Math.PI;
		const r = R_MAX - (R_MAX - R_MIN) * t;
		return { x: CX + r * Math.cos(angle), y: CY + r * Math.sin(angle) };
	}

	const spiralPathD = (() => {
		const pts = Array.from({ length: 241 }, (_, i) => {
			const p = spiralPt(i / 240);
			return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
		});
		return 'M ' + pts.join(' L ');
	})();

	const nodes = SEASONS.map((s, i) => {
		const t = i / (N - 1);
		const p = spiralPt(t);
		const nodeR = Math.round(38 - 10 * t);
		const fontSize = Math.max(7, Math.round(nodeR * 0.28));
		return { ...s, cx: p.x, cy: p.y, nodeR, fontSize };
	});

	let selected: (typeof nodes)[0] | null = null;
</script>

{#if compact}
	<!-- Hero compact mode: spiral only, no info panel -->
	<div class="wheel-compact">
		<svg viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
			<path d={spiralPathD} fill="none" stroke="#e8ddd6" stroke-width="1" stroke-dasharray="4,5"/>
			{#each nodes as node}
				<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
				<g
					class="node"
					class:active={selected?.id === node.id}
					on:mouseenter={() => (selected = node)}
					on:mouseleave={() => (selected = null)}
					role="img"
					aria-label={node.name}
				>
					{#if selected?.id === node.id}
						<circle cx={node.cx} cy={node.cy} r={node.nodeR + 7} fill={node.fill} opacity="0.2"/>
					{/if}
					<circle cx={node.cx} cy={node.cy} r={node.nodeR} fill={node.fill}/>
					<text x={node.cx} y={node.cy - 2} text-anchor="middle" font-family="DM Sans" font-size={node.fontSize} fill={node.textColor} font-weight="500">{node.name.split(' ')[0]}</text>
					<text x={node.cx} y={node.cy + node.fontSize + 1} text-anchor="middle" font-family="DM Sans" font-size={node.fontSize} fill={node.textColor} font-weight="500">{node.name.split(' ')[1]}</text>
				</g>
			{/each}
		</svg>
	</div>
{:else}
	<!-- Full mode: spiral + info panel -->
	<div class="layout">
		<div class="wheel-side">
			<svg viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
				<path d={spiralPathD} fill="none" stroke="#e8ddd6" stroke-width="1" stroke-dasharray="4,5"/>
				{#each nodes as node}
					<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
					<g
						class="node"
						class:active={selected?.id === node.id}
						on:mouseenter={() => (selected = node)}
						on:click={() => (selected = node)}
						role="img"
						aria-label={node.name}
					>
						{#if selected?.id === node.id}
							<circle cx={node.cx} cy={node.cy} r={node.nodeR + 7} fill={node.fill} opacity="0.2"/>
						{/if}
						<circle cx={node.cx} cy={node.cy} r={node.nodeR} fill={node.fill}/>
						<text x={node.cx} y={node.cy - 2} text-anchor="middle" font-family="DM Sans" font-size={node.fontSize} fill={node.textColor} font-weight="500">{node.name.split(' ')[0]}</text>
						<text x={node.cx} y={node.cy + node.fontSize + 1} text-anchor="middle" font-family="DM Sans" font-size={node.fontSize} fill={node.textColor} font-weight="500">{node.name.split(' ')[1]}</text>
					</g>
				{/each}
			</svg>
		</div>

		<div class="info-side">
			{#if selected}
				{#key selected.id}
					<div class="info-content" in:fade={{ duration: 180 }}>
						<span class="family-tag" style="color:{FAMILY_COLORS[selected.family]}">{selected.family}</span>
						<h3 class="season-name">{selected.name}</h3>
						<p class="undertone">{selected.undertone}</p>

						<div class="divider"></div>

						<div class="trait-row">
							<span class="trait-label">Skin</span>
							<div class="trait-dots">
								{#each selected.skin as s}
									<span class="trait-dot" style="background:{s.hex}" title={s.label}></span>
								{/each}
							</div>
						</div>
						<div class="trait-row">
							<span class="trait-label">Eyes</span>
							<div class="trait-dots">
								{#each selected.eyes as eye}
									<span class="trait-dot" style="background:{eye.hex}" title={eye.label}></span>
								{/each}
							</div>
						</div>
						<div class="trait-row">
							<span class="trait-label">Hair</span>
							<div class="trait-dots">
								{#each selected.hair as h}
									<span class="trait-dot hair-dot" style="background:{h.hex}" title={h.label}></span>
								{/each}
							</div>
						</div>

						<div class="divider"></div>

						<p class="desc">{selected.desc}</p>
						<div class="swatches">
							{#each selected.swatches as color}
								<span
									class="swatch"
									style="background:{color}{color === '#FFFFFF' ? '; border:1px solid #e8ddd6' : ''}"
									title={color}
								></span>
							{/each}
						</div>

						<div class="mood-tags">
							{#each [...new Set(selected.swatches.map(colorMood))] as mood}
								<span class="mood-tag">{mood}</span>
							{/each}
						</div>
					</div>
				{/key}
			{:else}
				<div class="info-empty" in:fade={{ duration: 180 }}>
					<p class="empty-hint">Hover a season<br/>to explore its palette.</p>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	/* ── Compact (hero) mode ── */
	.wheel-compact {
		width: 100%;
	}

	.wheel-compact svg {
		width: 100%;
		height: auto;
		display: block;
	}

	/* ── Full mode layout ── */
	.layout {
		display: flex;
		align-items: center;
		gap: 2.5rem;
		width: 100%;
		max-width: 880px;
		margin: 0 auto;
	}

	.wheel-side {
		flex-shrink: 0;
		width: 420px;
	}

	.wheel-side svg {
		width: 100%;
		height: auto;
		display: block;
	}

	.node {
		cursor: pointer;
	}

	.node circle {
		transition: filter 0.15s;
	}

	.node:hover circle:not(:first-of-type),
	.node.active circle:not(:first-of-type) {
		filter: brightness(1.12) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.22));
	}

	/* ── Info panel ── */
	.info-side {
		flex: 1;
		min-width: 0;
		min-height: 320px;
		display: flex;
		align-items: center;
	}

	.info-content {
		width: 100%;
	}

	.family-tag {
		font-size: 0.68rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		font-weight: 500;
		display: block;
		margin-bottom: 0.4rem;
	}

	.season-name {
		font-family: var(--font-heading);
		font-size: 2.6rem;
		font-weight: 400;
		color: var(--text);
		line-height: 1.05;
		margin: 0 0 0.35rem;
	}

	.undertone {
		font-size: 0.7rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--dusty-rose);
		font-weight: 500;
		margin: 0;
	}

	.divider {
		width: 40px;
		height: 1px;
		background: var(--border);
		margin: 1rem 0;
	}

	.trait-row {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.6rem;
	}

	.trait-label {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--text-light);
		font-weight: 500;
		width: 32px;
		flex-shrink: 0;
	}

	.trait-dots {
		display: flex;
		gap: 6px;
	}

	.trait-dot {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		display: inline-block;
		border: 1px solid rgba(0, 0, 0, 0.08);
		transition: transform 0.15s;
		cursor: default;
	}

	.hair-dot {
		border-radius: 5px;
	}

	.trait-dot:hover {
		transform: scale(1.2);
	}

	.desc {
		font-size: 0.9rem;
		line-height: 1.75;
		color: var(--text-light);
		margin: 0 0 1.25rem;
	}

	.swatches {
		display: flex;
		gap: 8px;
	}

	.swatch {
		width: 34px;
		height: 34px;
		border-radius: 8px;
		display: inline-block;
		transition: transform 0.15s;
	}

	.swatch:hover {
		transform: scale(1.15);
	}

	.mood-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 0.875rem;
	}

	.mood-tag {
		padding: 0.25rem 0.7rem;
		border: 1px solid var(--border);
		border-radius: var(--radius-btn);
		font-size: 0.72rem;
		color: var(--text-light);
		background: white;
	}

	/* ── Empty state ── */
	.info-empty {
		width: 100%;
	}

	.empty-hint {
		font-family: var(--font-heading);
		font-size: 1.4rem;
		font-style: italic;
		font-weight: 300;
		color: var(--text-light);
		line-height: 1.5;
		margin: 0;
	}

	/* ── Responsive ── */
	@media (max-width: 780px) {
		.layout {
			flex-direction: column;
			gap: 1.5rem;
		}

		.wheel-side {
			width: 100%;
			max-width: 420px;
		}

		.info-side {
			min-height: 200px;
			width: 100%;
		}

		.season-name {
			font-size: 2rem;
		}
	}
</style>
