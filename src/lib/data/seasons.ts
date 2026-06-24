export type ColorDot = { hex: string; label: string };

export type Season = {
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

// Ordered light → deep
export const SEASONS: Season[] = [
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

export const FAMILY_COLORS: Record<string, string> = {
	Spring: '#E8B830',
	Summer: '#5FD3E6',
	Autumn: '#B75628',
	Winter: '#2E2B5B'
};
