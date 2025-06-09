import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { TopProducts } from "@/components/TopProducts";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			{/* <TopProducts /> */}
			<ContactSection />
		</>
	);
}