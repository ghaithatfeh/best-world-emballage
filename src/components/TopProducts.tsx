import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";

// Product data for mapping
const products = [
	{
		id: 1,
		image: "/image-29.png",
		avatars: [
			{ src: "/image-26.png", alt: "User avatar" },
			{ src: "/image-27.png", alt: "User avatar" },
			{ src: "/image-28.png", alt: "User avatar" },
		],
		extraAvatars: 7,
		code: "0303",
		name: "Vip Coffee Spoon",
	},
	{
		id: 2,
		image: "/image-29.png",
		avatars: [
			{ src: "/image-26.png", alt: "User avatar" },
			{ src: "/image-27.png", alt: "User avatar" },
			{ src: "/image-28.png", alt: "User avatar" },
		],
		extraAvatars: 2,
		code: "0303",
		name: "Fork",
	},
	{
		id: 3,
		image: "/image-29.png",
		avatars: [
			{ src: "/image-26.png", alt: "User avatar" },
			{ src: "/image-27.png", alt: "User avatar" },
			{ src: "/image-28.png", alt: "User avatar" },
		],
		code: "0303",
		name: "Vip Coffee Spoon",
	},
	{
		id: 4,
		image: "/image-29.png",
		avatars: [
			{ src: "/image-26.png", alt: "User avatar" },
			{ src: "/image-27.png", alt: "User avatar" },
			{ src: "/image-28.png", alt: "User avatar" },
		],
		extraAvatars: 2,
		code: "0303",
		name: "Knife",
	},
	{
		id: 5,
		image: "/image-29.png",
		avatars: [
			{ src: "/image-26.png", alt: "User avatar" },
			{ src: "/image-27.png", alt: "User avatar" },
			{ src: "/image-28.png", alt: "User avatar" },
		],
		extraAvatars: 7,
		code: "0303",
		name: "Straight Straw",
	},
	{
		id: 6,
		image: "/image-29.png",
		avatars: [
			{ src: "/image-30.png", alt: "User avatar" },
			{ src: "/image-31.png", alt: "User avatar" },
			{ src: "/image-32.png", alt: "User avatar" },
		],
		code: "0303",
		name: "Flexible Straw",
	},
	{
		id: 7,
		image: "/image-29.png",
		avatars: [
			{ src: "/image-26.png", alt: "User avatar" },
			{ src: "/image-27.png", alt: "User avatar" },
			{ src: "/image-28.png", alt: "User avatar" },
		],
		extraAvatars: 7,
		code: "0303",
		name: "Wrapped Straight Straw",
	},
	{
		id: 8,
		image: "/image-29.png",
		avatars: [
			{ src: "/image-30.png", alt: "User avatar" },
			{ src: "/image-31.png", alt: "User avatar" },
			{ src: "/image-32.png", alt: "User avatar" },
		],
		extraAvatars: 7,
		code: "0303",
		name: "Wrapped Flexible Straw",
	},
];

export const TopProducts = () => {
	return (
		<section className="flex flex-col items-center gap-6 py-12 w-full">
			<h2 className="[font-family:'Baloo_Bhaina_2',Helvetica] font-bold text-[#333333] text-5xl text-center tracking-[-1.20px] leading-10">
				Top Products
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-7xl">
				{products.slice(0, 4).map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-7xl">
				{products.slice(4, 8).map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>

			<div className="flex items-center">
				<Button className="bg-[#232b55] text-white rounded-full px-8 h-12 [font-family:'Baloo_Bhaina_2',Helvetica] font-semibold">
					See All
					<div className="w-6 h-6 ml-2 flex items-center justify-center">
						<img
							className="w-3 h-3"
							alt="Icon"
							src="/svgrepo-iconcarrier-2.png"
						/>
					</div>
				</Button>
			</div>
		</section>
	);
};
