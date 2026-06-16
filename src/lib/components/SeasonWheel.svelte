<script lang="ts">
	import { fade } from 'svelte/transition';

	export let compact = false;

	type ColorDot = { hex: string; label: string };

	type Season = {
		id: string;
		name: string;
		family: string;
		fill: string;
		textColor: string;
		undertone: string;
		desc: string;
		swatches: string[];
		eyes: ColorDot[];
		hair: ColorDot[];
		skin: ColorDot[];
	};

	// Ordered light → deep (outer spiral = lightest, inner = deepest)
	const SEASONS: Season[] = [
		{
			id: 'light-spring', name: 'Light Spring', family: 'Spring',
			fill: '#F5E0A4', textColor: '#5a4000',
			undertone: 'Warm · Low contrast',
			desc: 'Delicate and luminous. Soft warm pastels are your signature — ivory, warm peach, mint and golden tones keep you glowing.',
			swatches: ['#F5E0A4', '#F0B890', '#C0E0A0', '#F8C8C0', '#E0C0D8'],
			eyes: [{ hex: '#7AB3D4', label: 'Light blue' }, { hex: '#6B9E6B', label: 'Clear green' }, { hex: '#B8925A', label: 'Warm hazel' }],
			hair: [{ hex: '#F5D5A0', label: 'Light blonde' }, { hex: '#DFB070', label: 'Golden blonde' }, { hex: '#C89060', label: 'Strawberry' }],
			skin: [{ hex: '#F8EAD5', label: 'Fair ivory' }, { hex: '#EED5B0', label: 'Fair peach' }, { hex: '#D4B080', label: 'Light golden' }],
		},
		{
			id: 'light-summer', name: 'Light Summer', family: 'Summer',
			fill: '#5FD3E6', textColor: '#1a3a48',
			undertone: 'Cool · Low contrast',
			desc: 'Soft and airy. Your colours are cool and muted — powder blue, soft lavender, blush and dusty rose keep your look effortless.',
			swatches: ['#5FD3E6', '#A8C0D0', '#C8B8D8', '#E0C8D0', '#98B8C8'],
			eyes: [{ hex: '#8BAAC0', label: 'Blue-grey' }, { hex: '#7A9E8A', label: 'Grey-green' }, { hex: '#A89070', label: 'Light hazel' }],
			hair: [{ hex: '#C8C0B0', label: 'Ash blonde' }, { hex: '#A89888', label: 'Light ash brown' }, { hex: '#B0A898', label: 'Cool greige' }],
			skin: [{ hex: '#F5E8E5', label: 'Fair cool' }, { hex: '#E2CCC8', label: 'Fair rose' }, { hex: '#C8ACAC', label: 'Light cool beige' }],
		},
		{
			id: 'warm-spring', name: 'Warm Spring', family: 'Spring',
			fill: '#E8B830', textColor: '#3d2200',
			undertone: 'Warm · Medium contrast',
			desc: 'Golden and fresh. Your palette is warm-toned and clear — peach, coral, warm greens and buttery yellows feel most alive on you.',
			swatches: ['#E8B830', '#F0A060', '#90C850', '#FFD080', '#70B860'],
			eyes: [{ hex: '#5A8C5A', label: 'Warm green' }, { hex: '#A87848', label: 'Amber hazel' }, { hex: '#8C6040', label: 'Warm brown' }],
			hair: [{ hex: '#C89040', label: 'Golden blonde' }, { hex: '#A87040', label: 'Warm brown' }, { hex: '#C05030', label: 'Auburn' }],
			skin: [{ hex: '#F0D4A0', label: 'Light golden' }, { hex: '#D4A865', label: 'Medium peach-gold' }, { hex: '#B87840', label: 'Medium warm' }],
		},
		{
			id: 'bright-spring', name: 'Bright Spring', family: 'Spring',
			fill: '#FF3B16', textColor: 'white',
			undertone: 'Warm · High contrast',
			desc: 'Vivid and energetic. You shine in saturated, clear colours — coral, turquoise, and golden yellow worn with full confidence.',
			swatches: ['#FF3B16', '#FFD700', '#00CED1', '#FF6B35', '#FFEC8B'],
			eyes: [{ hex: '#4090C0', label: 'Clear blue' }, { hex: '#30A060', label: 'Vivid green' }, { hex: '#20B8B0', label: 'Turquoise' }],
			hair: [{ hex: '#D0A060', label: 'Light brown' }, { hex: '#905030', label: 'Medium brown' }, { hex: '#E8D090', label: 'Bright blonde' }],
			skin: [{ hex: '#F2D4A8', label: 'Fair clear warm' }, { hex: '#C89060', label: 'Medium clear' }, { hex: '#9A6030', label: 'Medium-deep clear' }],
		},
		{
			id: 'cool-summer', name: 'Cool Summer', family: 'Summer',
			fill: '#2E7AA0', textColor: 'white',
			undertone: 'Cool · Medium contrast',
			desc: 'Elegant and understated. Cool-toned and slightly muted — dusty rose, slate blue, soft plum and grey-green are your best friends.',
			swatches: ['#2E7AA0', '#7888B0', '#C07080', '#A0B0C0', '#C8A0B0'],
			eyes: [{ hex: '#6088A0', label: 'Blue-grey' }, { hex: '#5878A8', label: 'Soft blue' }, { hex: '#608068', label: 'Cool green' }],
			hair: [{ hex: '#9098A0', label: 'Ash brown' }, { hex: '#786870', label: 'Cool brown' }, { hex: '#B0B0B0', label: 'Natural grey' }],
			skin: [{ hex: '#F0E0DC', label: 'Fair cool' }, { hex: '#D4B4B0', label: 'Light rosy' }, { hex: '#B09090', label: 'Medium cool' }],
		},
		{
			id: 'soft-summer', name: 'Soft Summer', family: 'Summer',
			fill: '#D9A4B2', textColor: '#4a1828',
			undertone: 'Cool · Low-medium contrast',
			desc: 'Romantic and blended. Your colours are muted with a cool undertone — dusty mauve, soft teal, greyed blues and gentle pinks.',
			swatches: ['#D9A4B2', '#A0C0BC', '#B0A0C8', '#C0C8D0', '#88A0A0'],
			eyes: [{ hex: '#7888A0', label: 'Grey-blue' }, { hex: '#7A8878', label: 'Grey-green' }, { hex: '#907868', label: 'Soft hazel' }],
			hair: [{ hex: '#888888', label: 'Mousy brown' }, { hex: '#909898', label: 'Ash brown' }, { hex: '#B0B0B0', label: 'Salt & pepper' }],
			skin: [{ hex: '#ECD8D2', label: 'Fair muted' }, { hex: '#C8B0A8', label: 'Light muted cool' }, { hex: '#A89088', label: 'Medium muted' }],
		},
		{
			id: 'bright-winter', name: 'Bright Winter', family: 'Winter',
			fill: '#FC72A2', textColor: 'white',
			undertone: 'Cool · High contrast',
			desc: 'Bold, icy, and striking. Your palette thrives on high contrast — pure whites, deep blacks, and jewel tones that pop.',
			swatches: ['#FC72A2', '#2244CC', '#FFFFFF', '#1A1A2E', '#FF1493'],
			eyes: [{ hex: '#3070B0', label: 'Icy blue' }, { hex: '#2A5A30', label: 'Deep green' }, { hex: '#3A2010', label: 'Dark brown' }],
			hair: [{ hex: '#1A1818', label: 'Near black' }, { hex: '#302828', label: 'Dark brown' }, { hex: '#F8F4F0', label: 'Platinum' }],
			skin: [{ hex: '#F8F2F2', label: 'Fair cool' }, { hex: '#C0909A', label: 'Medium cool' }, { hex: '#4A2028', label: 'Deep cool' }],
		},
		{
			id: 'soft-autumn', name: 'Soft Autumn', family: 'Autumn',
			fill: '#C9A23E', textColor: '#3d2200',
			undertone: 'Warm · Low-medium contrast',
			desc: 'Earthy and muted. Your palette is warm but never loud — terracotta, sage, caramel and dusty peach bring out your natural warmth.',
			swatches: ['#C9907E', '#B5845A', '#A8B5A0', '#D4C5A9', '#7A8C6E'],
			eyes: [{ hex: '#8C7040', label: 'Hazel' }, { hex: '#7A6050', label: 'Soft brown' }, { hex: '#608058', label: 'Muted green' }],
			hair: [{ hex: '#B08040', label: 'Dirty blonde' }, { hex: '#907048', label: 'Warm light brown' }, { hex: '#C09860', label: 'Warm blonde' }],
			skin: [{ hex: '#ECC8A0', label: 'Fair warm muted' }, { hex: '#C8A070', label: 'Medium warm muted' }, { hex: '#A07850', label: 'Medium-deep warm' }],
		},
		{
			id: 'warm-autumn', name: 'Warm Autumn', family: 'Autumn',
			fill: '#B75628', textColor: 'white',
			undertone: 'Warm · Medium-high contrast',
			desc: 'Rich and grounded. Deep oranges, warm browns, olive green and golden mustard — your palette feels like a harvest table.',
			swatches: ['#B75628', '#C88020', '#4A6020', '#8A4010', '#D09830'],
			eyes: [{ hex: '#7A5030', label: 'Warm brown' }, { hex: '#906030', label: 'Amber' }, { hex: '#7A7830', label: 'Olive hazel' }],
			hair: [{ hex: '#802808', label: 'Auburn' }, { hex: '#983C10', label: 'Copper' }, { hex: '#603010', label: 'Rich chestnut' }],
			skin: [{ hex: '#C89060', label: 'Medium warm' }, { hex: '#A07040', label: 'Medium-deep golden' }, { hex: '#785030', label: 'Deep warm' }],
		},
		{
			id: 'cool-winter', name: 'Cool Winter', family: 'Winter',
			fill: '#246A78', textColor: 'white',
			undertone: 'Cool · High contrast',
			desc: 'Crisp and precise. Icy pastels against deep cool backgrounds — silver, royal blue, pure white and cool pink define your season.',
			swatches: ['#246A78', '#5878B0', '#A8C0E0', '#E0E8F0', '#7878A8'],
			eyes: [{ hex: '#3868A0', label: 'Blue' }, { hex: '#507060', label: 'Blue-green' }, { hex: '#505098', label: 'Cool grey' }],
			hair: [{ hex: '#404858', label: 'Dark ash brown' }, { hex: '#202830', label: 'Very dark brown' }, { hex: '#585868', label: 'Dark cool' }],
			skin: [{ hex: '#D0B8C0', label: 'Medium cool' }, { hex: '#907080', label: 'Medium-deep cool' }, { hex: '#503040', label: 'Deep cool' }],
		},
		{
			id: 'dark-autumn', name: 'Dark Autumn', family: 'Autumn',
			fill: '#3CAA2C', textColor: 'white',
			undertone: 'Warm · High contrast',
			desc: 'Deep and dramatic. Rich forest green, burgundy, dark chocolate and burnt sienna — your colours are intense and earth-rooted.',
			swatches: ['#3CAA2C', '#8B3018', '#285018', '#681808', '#486018'],
			eyes: [{ hex: '#502810', label: 'Deep brown' }, { hex: '#604820', label: 'Dark hazel' }, { hex: '#485030', label: 'Olive-brown' }],
			hair: [{ hex: '#301808', label: 'Espresso' }, { hex: '#480808', label: 'Dark auburn' }, { hex: '#382010', label: 'Dark warm brown' }],
			skin: [{ hex: '#A87848', label: 'Medium warm brown' }, { hex: '#785030', label: 'Medium-deep warm' }, { hex: '#502818', label: 'Deep warm' }],
		},
		{
			id: 'dark-winter', name: 'Dark Winter', family: 'Winter',
			fill: '#2E2B5B', textColor: 'white',
			undertone: 'Cool · Very high contrast',
			desc: 'Intense and magnetic. Deep plum, midnight navy, charcoal and icy highlights — you are built for drama and high contrast dressing.',
			swatches: ['#2E2B5B', '#6B2880', '#1A1A2E', '#B8B0D0', '#7830A0'],
			eyes: [{ hex: '#1A1010', label: 'Near black' }, { hex: '#281808', label: 'Very dark brown' }, { hex: '#282038', label: 'Deep cool brown' }],
			hair: [{ hex: '#100808', label: 'Black' }, { hex: '#180808', label: 'Near black' }, { hex: '#201010', label: 'Very dark brown' }],
			skin: [{ hex: '#705870', label: 'Medium-deep cool' }, { hex: '#402840', label: 'Deep cool' }, { hex: '#201020', label: 'Very deep' }],
		},
	];

	const FAMILY_COLORS: Record<string, string> = {
		Spring: '#E8B830',
		Summer: '#5FD3E6',
		Autumn: '#B75628',
		Winter: '#2E2B5B'
	};

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
