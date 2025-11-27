export interface ProductTranslations {
	en: string;
	ar: string;
	fr: string;
}

export interface Product {
	code: string;
	categoryId: number;
	title: ProductTranslations;
	material: ProductTranslations;
	length: number;
	weight?: number;
	diameter?: number;
	quantityBag: number;
	quantityBox: number;
	images: string[];
	colors: string[];
	additionalColors: number;
	isFeatured?: boolean;
	topProducts?: boolean;
}

export const products: Product[] = [
	{
		code: "0303",
		categoryId: 3,
		title: {
			en: "Table Spoon",
			ar: "العاشق كبيرة",
			fr: "Cuillère à soupe",
		},
		material: {
			en: "Plastic",
			ar: "بلاستك",
			fr: "Plastique",
		},
		length: 165,
		weight: 1.9,
		quantityBag: 100,
		quantityBox: 6000,
		images: ["/products/table-spoon-pice.png", "/products/table-spoon-bag.png", "/products/table-spoon-box.png"],
		colors: ["#fff", "#000", "#A9A9A9", "#FFD700"],
		additionalColors: 1,
		isFeatured: true,
		topProducts: true,
	},
	{
		code: "0307",
		categoryId: 3,
		title: {
			en: "Coffee Spoon",
			ar: "العاشق صغيرة",
			fr: "Petite Cuillère",
		},
		material: {
			en: "Plastic",
			ar: "بلاستك",
			fr: "Plastique",
		},
		length: 115,
		weight: 0.8,
		quantityBag: 100,
		quantityBox: 6000,
		images: ["/products/coffee-spoon-pice.png", "/products/coffee-spoon-bag.png", "/products/coffee-spoon-box.png"],
		colors: ["#fff", "#000", "#A9A9A9", "#FFD700"],
		additionalColors: 1,
		topProducts: true,
	},
	{
		code: "0307",
		categoryId: 3,
		title: {
			en: "VIP Coffee Spoon",
			ar: "العاشق صغيرة (مرتبة)",
			fr: "VIP Petite Cuillère",
		},
		material: {
			en: "Plastic",
			ar: "بلاستك",
			fr: "Plastique",
		},
		length: 115,
		weight: 0.8,
		quantityBag: 100,
		quantityBox: 6000,
		images: ["/products/vip-coffee-spoon-pice.png", "/products/vip-coffee-spoon-bag.png", "/products/vip-coffee-spoon-box.png"],
		colors: ["#fff", "#000", "#A9A9A9", "#FFD700"],
		additionalColors: 1,
		topProducts: true,
	},
	{
		code: "0311",
		categoryId: 4,
		title: {
			en: "Fork",
			ar: "الفرشيت",
			fr: "Fourchette",
		},
	material: {
			en: "Plastic",
			ar: "بلاستك",
			fr: "Plastique",
		},
		length: 165,
		weight: 1.9,
		quantityBag: 100,
		quantityBox: 6000,
		images: ["/products/fork-pice.png", "/products/fork-bag.png", "/products/fork-box.png"],
		colors: ["#fff", "#000", "#A9A9A9", "#FFD700"],
		additionalColors: 1,
		topProducts: true,
	},
	{
		code: "0309",
		categoryId: 5,
		title: {
			en: "Knife",
			ar: "الموس",
			fr: "Couteau",
		},
		material: {
			en: "Plastic",
			ar: "بلاستك",
			fr: "Plastique",
		},
		length: 165,
		weight: 1.9,
		quantityBag: 100,
		quantityBox: 6000,
		images: ["/products/knife-pice.png", "/products/knife-bag.png", "/products/knife-box.png"],
		colors: ["#fff", "#000", "#A9A9A9", "#FFD700"],
		additionalColors: 1,
		topProducts: true,
	},
	// straws
	{
		code: "0101",
		categoryId: 6,
		title: {
			en: "Straight Straw",
			ar: "ليباي مستقيمة",
			fr: "Paille droite",
		},
		material: {
			en: "Plastic",
			ar: "بلاستك",
			fr: "Plastique",
		},
		length: 225,
		diameter: 6,
		quantityBag: 500,
		quantityBox: 10000,
		images: ["/products/straight-straw-pice.png", "/products/straight-straw-bag.png", "/products/straight-straw-box.png"],
		colors: ["#fff", "#000", "#A9A9A9", "#FFD700"],
		additionalColors: 1,
		topProducts: true,
		isFeatured: true,
	},
];

