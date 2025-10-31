"use client";

import Heading from "./Heading";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "@/i18n/routing";
import ProductDetailsDialog from "./ProductDetailsDialog";
import { useState } from "react";

const AboutSection = () => {
	const t = useTranslations();
	const [dialogOpen, setDialogOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<any>(null);

	const handleProductClick = (product: any) => {
		setSelectedProduct(product);
		setDialogOpen(true);
	};

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
	];

	return (
		<section
			className="bg-[url('/about-section-2.png')] bg-[#fffcf5] md:bg-contain bg-no-repeat relative pt-6 pb-12"
			id="products"
		>
			<div className="container mx-auto">
				<Heading className="text-center mb-12">{t("Top Products")}</Heading>
				<Swiper
					spaceBetween={20}
					slidesPerView={4}
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					modules={[Autoplay, Pagination]}
				>
					{products.map((product, index) => (
						<SwiperSlide key={index} className="pb-16">
							<ProductCard
								code={product.code}
								title={product.title}
								image={product.images[0]}
								colors={product.colors.slice(0, 3)}
								additionalColors={product.additionalColors}
								onClick={() => handleProductClick(product)}
							/>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Product Details Dialog */}
				{selectedProduct && (
					<ProductDetailsDialog
						open={dialogOpen}
						onOpenChange={setDialogOpen}
						product={selectedProduct}
					/>
				)}

				<div className="flex justify-center mt-8">
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
