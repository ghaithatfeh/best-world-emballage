import { useTranslations } from "next-intl";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import { Category } from "@/types/category";
import { ProductCardSkeleton } from "@/components/skeletons/ProductCardSkeleton";

interface ProductsGridProps {
	products: Product[];
	loading: boolean;
	selectedCategory: Category | null;
	locale: "en" | "ar" | "fr";
	onProductClick: (product: Product) => void;
}

export const ProductsGrid = ({
	products,
	loading,
	selectedCategory,
	locale,
	onProductClick,
}: ProductsGridProps) => {
	const t = useTranslations();

	return (
		<>
			<h3 className="text-[#333333] text-xl font-semibold mb-6">
				{selectedCategory
					? `${selectedCategory[`title_${locale}`]}`
					: t("All Products")}
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
				{loading ? (
					<>
						{[...Array(6)].map((_, i) => (
							<ProductCardSkeleton key={i} />
						))}
					</>
				) : (
					products.map((product, index) => (
						<ProductCard
							key={index}
							code={product.code}
							title={product[`title_${locale}`]}
							image={product.primary_image_url || ""}
							colors={product.colors?.slice(0, 3) || []}
							additionalColors={product.additional_colors || 0}
							onClick={() => onProductClick(product)}
						/>
					))
				)}
			</div>
		</>
	);
};

