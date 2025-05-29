import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { Button } from "./ui/button";

const features = [
	<>
		<span className="text-primary">Innovation And </span>
		<span className="text-secondary">Development</span>
	</>,
	<>
		<span className="text-primary">Quality And </span>
		<span className="text-secondary">Precision</span>
	</>,
	<>
		<span className="text-primary">The Unique </span>
		<span className="text-secondary">Experience</span>
	</>,
	<>
		<span className="text-primary">Difference And </span>
		<span className="text-secondary">Excellence</span>
	</>,
];

const AboutSection = () => {
	return (
		<section
			className="bg-[url('/about-section-2.png')] md:bg-contain bg-no-repeat relative py-20"
			id="about"
		>
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row items-center justify-between gap-8">
					{/* Left Column */}
					<div className="flex-1 max-w-md">
						<Heading>About Us</Heading>
						<Paragraph>
							Whether you're looking for products for personal or commercial
							use, we offer solutions that meet all needs and requirements.
						</Paragraph>
						<Button variant="primary" size="primary" className="mt-6">
							Know More
						</Button>
					</div>

					{/* Center Image */}
					<div className="flex-1 flex justify-center">
						<img
							src="/about-section.png"
							alt="Colorful straws"
							className="rounded-2xl shadow-lg object-cover"
						/>
					</div>

					{/* Right Column */}
					<div className="flex-1 flex flex-col gap-10">
						{features.map((feature, idx) => (
							<div key={idx} className="text-xl font-semibold">
								{feature}
							</div>
						))}
					</div>
				</div>
				<div className="mt-28 relative">
					<p className="text-5xl leading-relaxed tracking-wide text-[#333] mt-5">
						More than{" "}
						<span className="text-secondary">ten years of experience</span> in
						this area, and we achieve our success through close cooperation with
						credible and powerful manufacturing companies that allow us to
						pursue the industrialization process directly.
					</p>
					<div className="absolute -right-0 top-0 w-1/3">
						<img src="/+10.png" className="w-full" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
