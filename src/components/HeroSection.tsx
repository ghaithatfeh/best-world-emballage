"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Lottie from "lottie-react";
import animationData from "@/assets/scroll-down-animation.json";
import "swiper/css";
import "swiper/css/pagination";

const HeroSection = () => {
	const slides = [
		{
			id: 1,
			title: "Best World Emballage",
			description:
				"Little things for comfort and ease in your life. <br/>Our company specializes in importing and distributing plastic table tools at the Moroccan market.",
			image: "/hero-1.png",
		},
		{
			id: 2,
			title: "Your Healthy Choice",
			description:
				"Little things for comfort and ease in your life. <br/>Our company specializes in importing and distributing plastic table tools at the Moroccan market.",
			image: "/hero-2.png",
		},
		{
			id: 3,
			title: "Personal or Commercial Use",
			description:
				"Little things for comfort and ease in your life. <br/>Our company specializes in importing and distributing plastic table tools at the Moroccan market.",
			image: "/hero-3.png",
		},
	];

	return (
		<section className="relative">
			<Swiper
				spaceBetween={0}
				loop={true}
				// autoplay={{
				// 	delay: 3500,
				// 	disableOnInteraction: false,
				// }}
				// effect={'fade'}
				// fadeEffect={{
				//     crossFade: false,
				// }}
				speed={1800}
				// pagination={{
				// 	clickable: true,
				// }}
				modules={[EffectFade, Autoplay, Pagination]}
			>
				{slides.map((slide) => (
					<SwiperSlide
						key={slide.id}
						className={`w-full !h-[80vh] bg-cover bg-center`}
						style={{ backgroundImage: `url(${slide.image})` }}
					>
						<div className="container mx-auto text-white h-full">
							<div className="flex flex-col justify-center h-full md:px-2 pt-20 md:pt-0">
								<h1 className="text-5xl md:text-6xl font-bold tracking-wide text-center md:text-left leading-[1.1]">
									{slide.title}
								</h1>
								<p
									className="text-xl font-light leading-10 tracking-wide mt-6 text-white text-center md:text-left"
									dangerouslySetInnerHTML={{ __html: slide.description }}
								/>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<button className="bg-primary hover:bg-primary/90 transition duration-300 w-20 h-20 rounded-full border-white border-8 mx-auto z-10 absolute -bottom-10 left-1/2 -translate-x-1/2">
				<a href="#about">
					<Lottie
						animationData={animationData}
						rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
						loop
						autoplay
					/>
				</a>
			</button>
		</section>
	);
};

export default HeroSection;
