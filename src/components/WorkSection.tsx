"use client";

import {
	motion,
	MotionValue,
	useScroll,
	useTransform,
} from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";
import { useTranslations } from "next-intl";

const useParallax = (value: MotionValue<number>, distance: number) => {
	return useTransform(value, [0, 1], [-distance, distance]);
};

const WorkRow = ({ children, imageSrc }: { children: ReactNode; imageSrc: string }) => {
	const rowRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({ target: rowRef, offset: ["start 80%", "end 20%"] });
	const y = useParallax(scrollYProgress, 10);
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);

	return (
		<div ref={rowRef} className="flex flex-col md:flex-row justify-between items-center my-16 lg:my-0 gap-10">
			<motion.p className="text-gray-600 tracking-wide leading-7 max-w-[700px] ltr:border-l-2 ltr:pl-4 rtl:border-r-2 rtl:pr-4 border-gray-500 border-dotted" style={{ y, opacity }}>
				{children}
			</motion.p>
			<motion.img src={imageSrc} className="w-full md:w-[270px]" alt="Work illustration" style={{ y, opacity }} />
		</div>
	);
};

const WorkSection = () => {
	const t = useTranslations('work');
	return (
		<div className="bg-[#fffcf5] pt-8 pb-16">
			<div className="container mx-auto" id="work-section">
				<h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 md:mb-0">{t("title")}</h2>
				<WorkRow imageSrc="/manufacturing.png">
					{t("r1")}
				</WorkRow>
				<WorkRow imageSrc="/manufacturing2.png">
					{t("r2")}
				</WorkRow>
				<WorkRow imageSrc="/manufacturing3.png">
					{t("r3")}
				</WorkRow>
			</div>
		</div>
	);
};

export default WorkSection;