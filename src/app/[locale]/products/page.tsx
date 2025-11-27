"use client";

import CustomHeroSection from "@/components/CustomHeroSection";
import ProductCard from "@/components/ProductCard";
import FeaturedProductCard from "@/components/FeaturedProductCard";
import ProductDetailsDialog from "@/components/ProductDetailsDialog";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import PageEnd from "@/components/PageEnd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Product } from "@/types/product";
import { Category } from "@/types/category";
import { Separator } from "@/components/ui/separator";
import { toast } from "react-hot-toast";
import { supabase } from "@/integrations/supabase/client";

const ProductsPage = () => {
	const t = useTranslations();
	const locale = useLocale() as "en" | "ar" | "fr";

	const [categories, setCategories] = useState<Category[]>([]);
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(false);

	const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [dialogOpen, setDialogOpen] = useState(false);

	const handleProductClick = (product: Product) => {
		setSelectedProduct(product);
		setDialogOpen(true);
	};

	const fetchData = async () => {
		setLoading(true);
		const categoriesResult = await supabase
			.from("categories")
			.select("*, sub_categories:categories(*, products(*))")
			.is("parent_id", null);

		if (categoriesResult.error) {
			toast.error("Failed to fetch categories");
			console.error("Categories error:", categoriesResult.error);
		} else {
			const data = categoriesResult.data || [];
			setCategories(data);
			
			// Extract all products from nested structure
			const allProducts: Product[] = [];
			data.forEach((category) => {
				category.sub_categories?.forEach((subCategory) => {
					if (subCategory.products) {
						allProducts.push(...subCategory.products);
					}
				});
			});
			setProducts(allProducts);
		}

		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<main className="relative">
			<CustomHeroSection title={t("Products")} imageSrc="/bg-products.webp" />
			<section className="bg-[#fffcf5] py-20" id="products">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
						{/* Sidebar - Filters */}
						<aside className="lg:col-span-1">
							{/* Categories Section */}
							<div className="">
								<div className="flex items-center justify-between mb-6">
									<h3 className="text-[#333333] text-xl font-semibold">
										{t("Categories")}
									</h3>
								</div>

								{/* All Categories Option */}
								<label className="flex items-center gap-3 cursor-pointer group mb-3">
									<div className="relative flex items-center">
										<input
											type="radio"
											name="category"
											checked={!selectedCategory}
											onChange={() => setSelectedCategory(null)}
											className="appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-[#DC2626] checked:border-[6px] transition-all cursor-pointer"
										/>
									</div>
									<span
										className={`text-base ${
											!selectedCategory
												? "text-[#DC2626] font-semibold"
												: "text-[#6B7280]"
										} group-hover:text-[#DC2626] transition-colors`}
									>
										{t("All Products")}
									</span>
								</label>

								<Separator />

								{/* Accordion for Main Categories */}
								<Accordion
									type="multiple"
									className="w-full"
									defaultValue={categories.map((cat) => `category-${cat.id}`)}
								>
									{categories.map((mainCategory) => (
										<AccordionItem
											key={mainCategory.id}
											value={`category-${mainCategory.id}`}
											className="border-b border-gray-200"
										>
											<AccordionTrigger className="text-[#333333] hover:text-[#DC2626] hover:no-underline py-3">
												<span className="text-base font-medium">
													{mainCategory[`title_${locale}`]}
												</span>
											</AccordionTrigger>
											<AccordionContent>
												<div className="flex flex-col gap-3 pl-2">
													{/* All option for this main category */}
													<label className="flex items-center gap-3 cursor-pointer group">
														<div className="relative flex items-center">
															<input
																type="radio"
																name="category"
																checked={
																	selectedCategory?.id === mainCategory.id
																}
																onChange={() =>
																	setSelectedCategory(mainCategory)
																}
																className="appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-[#DC2626] checked:border-[6px] transition-all cursor-pointer"
															/>
														</div>
														<span
															className={`text-base ${
																selectedCategory?.id === mainCategory.id
																	? "text-[#DC2626] font-semibold"
																	: "text-[#6B7280]"
															} group-hover:text-[#DC2626] transition-colors`}
														>
															{t("All")}
														</span>
													</label>

													{/* Subcategories */}
													{mainCategory.sub_categories?.map((subCategory: Category) => (
														<label
															key={subCategory.id}
															className="flex items-center gap-3 cursor-pointer group"
														>
															<div className="relative flex items-center">
																<input
																	type="radio"
																	name="category"
																	value={subCategory.id}
																	checked={
																		selectedCategory?.id === subCategory.id
																	}
																	onChange={() =>
																		setSelectedCategory(subCategory)
																	}
																	className="appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-[#DC2626] checked:border-[6px] transition-all cursor-pointer"
																/>
															</div>
															<span
																className={`text-base ${
																	selectedCategory?.id === subCategory.id
																		? "text-[#DC2626] font-semibold"
																		: "text-[#6B7280]"
																} group-hover:text-[#DC2626] transition-colors`}
															>
																{subCategory[`title_${locale}`]}
															</span>
														</label>
													))}
												</div>
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</div>
						</aside>

						{/* Products Grid */}
						<div className="lg:col-span-4">
							<h3 className="text-[#333333] text-xl font-semibold mb-6">
								{t("Featured Product")}
							</h3>

							{/* Mobile Swiper */}
							<div className="sm:hidden">
								<Swiper
									spaceBetween={20}
									slidesPerView={1.3}
									loop={false}
									autoplay={{
										delay: 3000,
										disableOnInteraction: false,
									}}
									modules={[Autoplay]}
								>
									{products
										.filter((product) => product.is_featured)
										.map((product, index) => (
											<SwiperSlide key={index} className="pb-8">
												<FeaturedProductCard
													code={product.code}
													title={product[`title_${locale}`]}
													material={product[`material_${locale}`]}
													length={product.length?.toString() || ""}
													weight={product.weight?.toString()}
													diameter={product.diameter?.toString()}
													image={product.images?.[0] || ""}
													colors={product.colors?.slice(0, 3) || []}
													additionalColors={product.additional_colors || 0}
													onClick={() => handleProductClick(product)}
												/>
											</SwiperSlide>
										))}
								</Swiper>
							</div>

							{/* Desktop Grid */}
							<div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
								{products
									.filter((product) => product.is_featured)
									.map((product, index) => (
										<FeaturedProductCard
											key={index}
											code={product.code}
											title={product[`title_${locale}`]}
											material={product[`material_${locale}`]}
											length={product.length?.toString() || ""}
											weight={product.weight?.toString()}
											diameter={product.diameter?.toString()}
											image={product.images?.[0] || ""}
											colors={product.colors?.slice(0, 3) || []}
											additionalColors={product.additional_colors || 0}
											onClick={() => handleProductClick(product)}
										/>
									))}
							</div>

							<h3 className="text-[#333333] text-xl font-semibold mb-6">
								{selectedCategory
									? `${selectedCategory[`title_${locale}`]}`
									: t("All Products")}
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
								{products
									.filter((product: Product) => {
										if (!selectedCategory) return true;

										// Check if it's a main category or subcategory
										const mainCategory = categories.find(
											(cat) => cat.id === selectedCategory.id
										);

										if (mainCategory?.sub_categories) {
											// If it's a main category, show all products from its subcategories
											return mainCategory.sub_categories.some(
												(sub) => sub.id === product.category_id
											);
										}

										// If it's a subcategory, show products with that categoryId
										return product.category_id === selectedCategory.id;
									})
									.map((product: Product, index: number) => (
										<ProductCard
											key={index}
											code={product.code}
											title={product[`title_${locale}`]}
											image={product.primary_image_url || ""}
											colors={product.colors?.slice(0, 3) || []}
											additionalColors={product.additional_colors || 0}
											onClick={() => handleProductClick(product)}
										/>
									))}
							</div>
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
