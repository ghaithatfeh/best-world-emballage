import { Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import ProductsSection from "@/components/ProductsSection";

const HomePage = () => {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<ProductsSection />
			<Suspense fallback={<div className="pt-20" />}>
				<ContactSection />
			</Suspense>
		</main>
	);
}

export default HomePage;