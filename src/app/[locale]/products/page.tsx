"use client";

import CustomHeroSection from "@/components/CustomHeroSection";
import ProductDetailsDialog from "@/components/ProductDetailsDialog";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import PageEnd from "@/components/PageEnd";
import { Product } from "@/types/product";
import { Category } from "@/types/category";
import { useCategories } from "@/hooks/useCategories";
import { useProducts } from "@/hooks/useProducts";
import { useFilteredProducts } from "@/hooks/useFilteredProducts";
import { CategoryFilter } from "@/components/CategoryFilter";
import { FeaturedProductsSection } from "@/components/FeaturedProductsSection";
import { ProductsGrid } from "@/components/ProductsGrid";

const ProductsPage = () => {
	const t = useTranslations();
	const locale = useLocale() as "en" | "ar" | "fr";

	const { categories, loading: categoriesLoading } = useCategories();
	const { products, loading: productsLoading } = useProducts();

	const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [dialogOpen, setDialogOpen] = useState(false);

	const filteredProducts = useFilteredProducts(
		products,
		selectedCategory,
		categories
	);

	const handleProductClick = (product: Product) => {
		setSelectedProduct(product);
		setDialogOpen(true);
	};

	return (
		<main className="relative">
			<CustomHeroSection title={t("Products")} imageSrc="/bg-products.webp" />
			<section className="bg-[#fffcf5] py-20" id="products">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
						<CategoryFilter
							categories={categories}
							loading={categoriesLoading}
							selectedCategory={selectedCategory}
							onCategoryChange={setSelectedCategory}
							locale={locale}
						/>

						<div className="lg:col-span-4">
							<FeaturedProductsSection
								products={products}
								loading={productsLoading}
								locale={locale}
								onProductClick={handleProductClick}
							/>

							<ProductsGrid
								products={filteredProducts}
								loading={productsLoading}
								selectedCategory={selectedCategory}
								locale={locale}
								onProductClick={handleProductClick}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Product Details Dialog */}
			{selectedProduct && (
				<ProductDetailsDialog
					open={dialogOpen}
					onOpenChange={setDialogOpen}
					product={selectedProduct}
					locale={locale}
				/>
			)}

			<PageEnd
				text={
					t(
						"Ready to place your order or need a custom solution? Get in touch with us today to discuss your requirements"
					) + "."
				}
				btnLabel={t("Contact Us")}
				btnLink="/contact"
			/>
		</main>
	);
};

export default ProductsPage;
