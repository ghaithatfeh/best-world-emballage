import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { HomePage } from "@/screens/HomePage/HomePage";
import Footer from "@/components/Footer";
import { TopProducts } from "@/components/TopProducts";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
	return (
		<>
			{/* <HomePage /> */}
			<HeroSection />
			<AboutSection />
			{/* <TopProducts /> */}
			<ContactSection />
			<Footer />
		</>
	);
}