import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { Button } from "./ui/button";

const features = [
	(
		<>
			<span className="text-primarycolor-1">Innovation And </span>
			<span className="text-secondrycolor">Development</span>
		</>
	),
	(
		<>
			<span className="text-primarycolor-1">Quality And </span>
			<span className="text-secondrycolor">Precision</span>
		</>
	),
	(
		<>
			<span className="text-primarycolor-1">The Unique </span>
			<span className="text-secondrycolor">Experience</span>
		</>
	),
	(
		<>
			<span className="text-primarycolor-1">Difference And </span>
			<span className="text-secondrycolor">Excellence</span>
		</>
	),
];

const AboutSection = () => {
	return (
		<section className="py-10 bg-[url('/about-section-2.png')] bg-cover md:bg-center relative py-20" id="about">
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
							<div key={idx} className="text-xl font-semibold">{feature}</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
