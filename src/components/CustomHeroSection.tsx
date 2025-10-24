import React from "react";

const CustomHeroSection = ({
	title,
	imageSrc,
}: {
	title: string;
	imageSrc: string;
}) => {
	return (
		<section
			className="flex items-center justify-center h-[600px] md:h-[365px] bg-cover bg-center"
			style={{
				backgroundImage: `url(${imageSrc})`,
				boxShadow: "inset 0 150px 150px #0000009e",
			}}
		>
			<h1 className="text-5xl text-white md:text-6xl font-bold tracking-wide text-center md:text-left rtl:text-right leading-[1.1] [text-shadow:_1px_1px_0_#0000007f] md:[text-shadow:none]">
				{title}
			</h1>
		</section>
	);
};

export default CustomHeroSection;
