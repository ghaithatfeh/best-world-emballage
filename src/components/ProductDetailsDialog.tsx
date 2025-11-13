"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Phone, Mail } from "lucide-react";
import { Product } from "@/data/products";

interface ProductDetailsDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	product: Product;
	locale: "en" | "ar" | "fr";
}

const ProductDetailsDialog = ({
	open,
	onOpenChange,
	product,
	locale: currentLocale,
}: ProductDetailsDialogProps) => {
	const t = useTranslations();
	const locale = useLocale();
	const isRTL = locale === "ar";
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	const handlePrevImage = () => {
		setSelectedImageIndex((prev) =>
			prev === 0 ? product.images.length - 1 : prev - 1
		);
	};

	const handleNextImage = () => {
		setSelectedImageIndex((prev) =>
			prev === product.images.length - 1 ? 0 : prev + 1
		);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-6xl p-0 gap-0 bg-[#fffcf5] overflow-y-auto max-h-[90vh]">
                <DialogHeader>
					<DialogTitle className="md:hidden text-3xl font-bold text-[#333333] pt-6">
						{product.title[currentLocale]}
					</DialogTitle>
				</DialogHeader>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-9">
					{/* Left Side - Images */}
					<div className="space-y-4">
						{/* Main Image */}
						<div className="relative bg-[#3B4054] rounded-3xl overflow-hidden aspect-square">
							<img
								src={product.images[selectedImageIndex]}
								alt={product.title[currentLocale]}
								className="w-full h-full object-cover"
							/>
						</div>

						{/* Thumbnail Gallery */}
						<div className="flex justify-center items-center gap-4">
							<button
								onClick={handlePrevImage}
								className="hidden lg:block p-2 rounded-full hover:bg-gray-100 transition-colors"
							>
								{isRTL ? (
									<ChevronRight className="w-6 h-6" />
								) : (
									<ChevronLeft className="w-6 h-6" />
								)}
							</button>

							<div className="flex gap-3 justify-center">
								{product.images.map((image, index) => (
									<button
										key={index}
										onClick={() => setSelectedImageIndex(index)}
										className={`w-24 h-24 rounded-2xl overflow-hidden border-4 transition-all ${
											selectedImageIndex === index
												? "border-primary"
												: "border-gray-200 opacity-60 hover:opacity-100"
										}`}
									>
										<img
											src={image}
											alt={`${product.title[currentLocale]} ${index + 1}`}
											className="w-full h-full object-cover"
										/>
									</button>
								))}
							</div>

							<button
								onClick={handleNextImage}
								className="hidden lg:block p-2 rounded-full hover:bg-gray-100 transition-colors"
							>
								{isRTL ? (
									<ChevronLeft className="w-6 h-6" />
								) : (
									<ChevronRight className="w-6 h-6" />
								)}
							</button>
						</div>
					</div>

				{/* Right Side - Details */}
				<div className="space-y-6">
					{/* Product Title */}
					<h2 className="hidden md:block text-3xl font-bold text-[#333333]">
						{product.title[currentLocale]}
					</h2>

					{/* Product Code */}
					<p className="text-[#DC2626] text-lg font-semibold">
						{t("Product Code")}: {product.code}
					</p>

					{/* Product Description */}
					<div className="space-y-1">
						<h3 className="text-lg font-bold text-[#333333]">
							{t("Product Description")}
						</h3>
						<div className="space-y-1">
							<p className="text-[#333333] text-base">
								{t("Type Material")}: {product.material[currentLocale]}
							</p>
							<p className="text-[#333333] text-base">
								{t("Length Piece")}: {product.length} {t("mm")}
							</p>
							{product.weight && (
								<p className="text-[#333333] text-base">
									{t("Weight Piece")}: {product.weight} {t("g")}
								</p>
							)}
							{product.diameter && (
								<p className="text-[#333333] text-base">
									{t("Diameter")}: {product.diameter} {t("mm")}
								</p>
							)}
							<p className="text-[#333333] text-base">
								{t("Quantity Per Bag")}: {product.quantityBag} {t("pcs")}
							</p>
							<p className="text-[#333333] text-base">
								{t("Quantity Per Box")}: {product.quantityBox} {t("pcs")}
							</p>
						</div>
					</div>

						{/* Available Colors */}
						<div className="space-y-2">
							<h3 className="text-lg font-bold text-[#333333]">
								{t("Available Colors")}
							</h3>
							<div className="flex items-center gap-3 flex-wrap">
								{product.colors.map((color, index) => (
									<div
										key={index}
										className="w-12 h-12 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
										style={{ backgroundColor: color }}
										title={color}
									/>
								))}
								{product.additionalColors && product.additionalColors > 0 && (
									<div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[#333333] font-bold text-base cursor-pointer hover:scale-110 transition-transform shadow-lg">
										+{product.additionalColors}
									</div>
								)}
							</div>
						</div>

						{/* Contact Information */}
						<div className="pt-6 border-t border-gray-200">
							<h3 className="text-lg font-bold text-[#333333] mb-4">
								{t("Like this product? Contact us if you need any further information")}
							</h3>
							<div className="flex flex-col sm:flex-row gap-4">
								<div className="flex items-center gap-3">
									<div className="bg-[#232B55] rounded-full p-3">
										<Phone className="w-5 h-5 text-white" />
									</div>
									<div>
										<p className="text-sm text-[#6B7280]">{t("Phone")}</p>
										<p className="font-semibold text-[#333333]" dir="ltr">
											+212 520 397 044
										</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<div className="bg-[#232B55] rounded-full p-3">
										<Mail className="w-5 h-5 text-white" />
									</div>
									<div>
										<p className="text-sm text-[#6B7280]">{t("E-Mail")}</p>
										<p className="font-semibold text-[#333333]" dir="ltr">
											info@bestworldemballage.com
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ProductDetailsDialog;

