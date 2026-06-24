function hexToHsl(hex: string): { h: number; s: number; l: number } {
	const r = parseInt(hex.slice(1, 3), 16) / 255;
	const g = parseInt(hex.slice(3, 5), 16) / 255;
	const b = parseInt(hex.slice(5, 7), 16) / 255;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const l = (max + min) / 2;

	if (max === min) return { h: 0, s: 0, l };

	const d = max - min;
	const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

	let h: number;
	if (max === r) h = ((g - b) / d) % 6;
	else if (max === g) h = (b - r) / d + 2;
	else h = (r - g) / d + 4;
	h *= 60;
	if (h < 0) h += 360;

	return { h, s, l };
}

/** Maps a hex colour to a single-word colour-psychology mood, based on hue and lightness. */
export function colorMood(hex: string): string {
	const { h, s, l } = hexToHsl(hex);

	if (l > 0.93 && s < 0.15) return 'Pure';
	if (l < 0.12) return 'Powerful';
	if (s < 0.12) return 'Balanced';

	const pale = l >= 0.72;

	if (h < 15 || h >= 345) return pale ? 'Romantic' : 'Passionate';
	if (h < 45) return pale ? 'Comforting' : 'Confident';
	if (h < 65) return pale ? 'Optimistic' : 'Joyful';
	if (h < 170) return pale ? 'Fresh' : 'Grounded';
	if (h < 200) return pale ? 'Calm' : 'Clear';
	if (h < 260) return pale ? 'Serene' : 'Trustworthy';
	if (h < 290) return pale ? 'Whimsical' : 'Luxurious';
	return pale ? 'Sweet' : 'Bold';
}
