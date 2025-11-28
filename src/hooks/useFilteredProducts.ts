import { useMemo } from "react";
import { Product } from "@/types/product";
import { Category } from "@/types/category";

export const useFilteredProducts = (
	products: Product[],
	selectedCategory: Category | null,
	categories: Category[]
) => {
	return useMemo(() => {
		if (!selectedCategory) return products;

		// Check if it's a main category or subcategory
		const mainCategory = categories.find(
			(cat) => cat.id === selectedCategory.id
		);

		if (mainCategory?.sub_categories && mainCategory.sub_categories.length > 0) {
			// If it's a main category, show all products from its subcategories
			return products.filter((product) =>
				mainCategory.sub_categories!.some(
					(sub) => sub.id === product.category_id
				)
			);
		}

		// If it's a subcategory, show products with that categoryId
		return products.filter(
			(product) => product.category_id === selectedCategory.id
		);
	}, [products, selectedCategory, categories]);
};

