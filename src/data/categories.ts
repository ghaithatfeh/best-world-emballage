export interface CategoryTranslations {
	en: string;
	ar: string;
	fr: string;
}

export interface Category {
	id: number;
	title: CategoryTranslations;
}

export const categories: Category[] = [
	{
		id: 1,
		title: {
			en: "Spoons",
			ar: "ملاعق",
			fr: "Cuillères",
		},
	},
	{
		id: 2,
		title: {
			en: "Forks",
			ar: "شوك",
			fr: "Fourchettes",
		},
	},
	{
		id: 3,
		title: {
			en: "Knifes",
			ar: "سكاكين",
			fr: "Couteaux",
		},
	},
	{
		id: 4,
		title: {
			en: "Straws",
			ar: "مصاصات",
			fr: "Pailles",
		},
	},
];