"use client";

import Heading from "./Heading";
import { Button } from "./ui/button";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "@/i18n/routing";
import ProductDetailsDialog from "./ProductDetailsDialog";
import { useState } from "react";
import { Product } from "@/types/product";

const AboutSection = () => {
	const t = useTranslations();
	const locale = useLocale() as "en" | "ar" | "fr";
	const [dialogOpen, setDialogOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	const handleProductClick = (product: Product) => {
		setSelectedProduct(product);
		setDialogOpen(true);
	};

	return (
		<section
			className="bg-[url('/about-section-2.png')] bg-[#fffcf5] md:bg-contain bg-no-repeat relative pt-6 pb-12"
			id="products"
		>
			<div className="container mx-auto">
				<Heading className="text-center mb-12">{t("Top Products")}</Heading>
				<Swiper
					spaceBetween={20}
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
						bulletClass: "swiper-pagination-bullet",
						bulletActiveClass: "swiper-pagination-bullet-active-primary",
					}}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						992: {
							slidesPerView: 4,
						},
					}}
					modules={[Autoplay, Pagination]}
					className="products-swiper"
				>
					{/* {products.filter((product) => product.topProducts).map((product, index) => (
						<SwiperSlide key={index} className="pb-16">
							<ProductCard
								code={product.code}
								title={product.title[locale]}
								image={product.images[0]}
								colors={product.colors.slice(0, 3)}
								additionalColors={product.additionalColors}
								onClick={() => handleProductClick(product)}
							/>
						</SwiperSlide>
					))} */}
				</Swiper>

				{/* Product Details Dialog */}
				{selectedProduct && (
					<ProductDetailsDialog
						open={dialogOpen}
						onOpenChange={setDialogOpen}
						product={selectedProduct}
						locale={locale}
					/>
				)}

				<div className="flex justify-center mt-6">
					<Link href="/products">
						<Button className="bg-primary rounded-full px-8 h-12">
							{t("See All Products")}
						</Button>
					</Link>
					<Link href="/products">
						<Button
							size="icon"
							className="bg-primary rounded-full h-12 w-12 ml-0"
						>
							<FaPaperPlane className="h-3 w-3" />
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
