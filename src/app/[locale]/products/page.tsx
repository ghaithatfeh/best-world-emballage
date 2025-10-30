"use client";

import CustomHeroSection from "@/components/CustomHeroSection";
import ProductCard from "@/components/ProductCard";
import FeaturedProductCard from "@/components/FeaturedProductCard";
import ProductDetailsDialog from "@/components/ProductDetailsDialog";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PageEnd from "@/components/PageEnd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ProductsPage = () => {
	const t = useTranslations();
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<any>(null);

	// Sample product data
	const products = [
		{
			code: "0303",
			title: "VIP Coffee Spoon",
			material: t("Type Material"),
			length: "165 mm",
			weight: "1.9 g",
			images: ["/hero-1.webp", "/hero-2.webp", "/hero-3.webp"],
			colors: ["#D4AF37", "#4A5568", "#E5E5E5", "#FF0000", "#00FF00"],
			additionalColors: 7,
			isFeatured: true,
		},
		{
			code: "0304",
			title: "Premium Fork",
			material: t("Type Material"),
			length: "180 mm",
			weight: "2.1 g",
			images: ["/hero-2.webp", "/hero-1.webp", "/hero-3.webp"],
			colors: ["#FFFFFF", "#000000", "#D4AF37"],
			additionalColors: 5,
			isFeatured: true,
		},
		{
			code: "0305",
			title: "Classic Knife",
			material: t("Type Material"),
			length: "170 mm",
			weight: "2.0 g",
			images: ["/hero-3.webp", "/hero-1.webp", "/hero-2.webp"],
			colors: ["#4A5568", "#FFFFFF"],
			additionalColors: 3,
			isFeatured: false,
		},
	];

	const categories = [
		{ id: "all", label: t("All") },
		{ id: "spoons", label: t("Spoons") },
		{ id: "forks", label: t("Forks") },
		{ id: "knifes", label: t("Knifes") },
		{ id: "straws", label: t("Straws") },
	];

	const filters = [
		{ id: "filter1", label: t("Filter 1") },
		{ id: "filter2", label: t("Filter 2") },
		{ id: "filter3", label: t("Filter 3") },
	];

	const handleProductClick = (product: any) => {
		setSelectedProduct(product);
		setDialogOpen(true);
	};


	const handleClearAll = () => {
		setSelectedCategory("all");
		setSelectedFilters([]);
	};

	const handleFilterToggle = (filterId: string) => {
		setSelectedFilters((prev) =>
			prev.includes(filterId)
				? prev.filter((id) => id !== filterId)
				: [...prev, filterId]
		);
	};

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
									<Button
										variant="ghost"
										size="sm"
										onClick={handleClearAll}
										className="bg-[#4A5568] hover:bg-[#4A5568]/90 text-white rounded-full px-4 h-9 text-sm"
									>
										{t("Clear All")}
									</Button>
								</div>

								<div className="flex flex-col gap-3">
									{categories.map((category) => (
										<label
											key={category.id}
											className="flex items-center gap-3 cursor-pointer group"
										>
											<div className="relative flex items-center">
												<input
													type="radio"
													name="category"
													value={category.id}
													checked={selectedCategory === category.id}
													onChange={() => setSelectedCategory(category.id)}
													className="appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-[#DC2626] checked:border-[6px] transition-all cursor-pointer"
												/>
											</div>
											<span
												className={`text-base ${
													selectedCategory === category.id
														? "text-[#DC2626] font-semibold"
														: "text-[#6B7280]"
												} group-hover:text-[#DC2626] transition-colors`}
											>
												{category.label}
											</span>
										</label>
									))}
								</div>
							</div>

							<Separator className="my-6" />

							{/* Filters Section */}
							<div className="">
								<h3 className="text-[#333333] text-xl font-semibold mb-6">
									{t("Filters title")}
								</h3>

								<div className="flex flex-col gap-3">
									{filters.map((filter) => (
										<label
											key={filter.id}
											className="flex items-center gap-3 cursor-pointer group"
										>
											<input
												type="checkbox"
												checked={selectedFilters.includes(filter.id)}
												onChange={() => handleFilterToggle(filter.id)}
												className="w-5 h-5 border-2 border-gray-300 rounded checked:bg-[#DC2626] checked:border-[#DC2626] cursor-pointer accent-[#DC2626]"
											/>
											<span className="text-base text-[#6B7280] group-hover:text-[#DC2626] transition-colors">
												{filter.label}
											</span>
										</label>
									))}
								</div>
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
									{products.filter((product) => product.isFeatured).map((product, index) => (
										<SwiperSlide key={index} className="pb-8">
											<FeaturedProductCard
												code={product.code}
												title={product.title}
												material={product.material}
												length={product.length}
												weight={product.weight}
												image={product.images[0]}
												colors={product.colors.slice(0, 3)}
												additionalColors={product.additionalColors}
												onClick={() => handleProductClick(product)}
											/>
										</SwiperSlide>
									))}
								</Swiper>
							</div>

							{/* Desktop Grid */}
							<div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
								{products.filter((product) => product.isFeatured).map((product, index) => (
									<FeaturedProductCard
										key={index}
										code={product.code}
										title={product.title}
										material={product.material}
										length={product.length}
										weight={product.weight}
										image={product.images[0]}
										colors={product.colors.slice(0, 3)}
										additionalColors={product.additionalColors}
										onClick={() => handleProductClick(product)}
									/>
								))}
							</div>

							<h3 className="text-[#333333] text-xl font-semibold mb-6">
								{t("All Products")}
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
								{products.map((product, index) => (
									<ProductCard
										key={index}
										code={product.code}
										title={product.title}
										image={product.images[0]}
										colors={product.colors.slice(0, 3)}
										additionalColors={product.additionalColors}
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
				/>
			)}

			<PageEnd
				text={t(
					"Ready to place your order or need a custom solution? Get in touch with us today to discuss your requirements"
				) + "."}
				btnLabel={t("Contact Us")}
				btnLink="/contact"
			/>
		</main>
	);
};

export default ProductsPage;
