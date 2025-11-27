export interface CategoryTranslations {
	en: string;
	ar: string;
	fr: string;
}

export interface Category {
	id: number;
	title: CategoryTranslations;
	subCategory?: Category[];
}

export const categories: Category[] = [
	{
		id: 1,
		title: {
			en: "Tableware",
			ar: "ادوات الطعام",
			fr: "Ustensiles de table",
		},
		subCategory: [
			{
				id: 3,
				title: {
					en: "Spoons",
					ar: "ملاعق",
					fr: "Cuillères",
				},
			},
			{
				id: 4,
				title: {
					en: "Forks",
					ar: "شوك",
					fr: "Fourchettes",
				},
			},
			{
				id: 5,
				title: {
					en: "Knifes",
					ar: "سكاكين",
					fr: "Couteaux",
				},
			},
		],
	},
	{
		id: 2,
		title: {
			en: "Straws",
			ar: "مصاصات",
			fr: "Pailles",
		},
		subCategory: [
			{
				id: 6,
				title: {
					en: "Straight Straws",
					ar: "مصاصات مستقيمة",
					fr: "Pailles droites",
				},
			},
			{
				id: 7,
				title: {
					en: "Curved Straws",
					ar: "مصاصات منحنية",
					fr: "Pailles courbes",
				},
			},
		],
	},
];