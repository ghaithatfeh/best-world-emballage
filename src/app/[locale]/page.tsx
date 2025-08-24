import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
// import { TopProducts } from "@/components/TopProducts";
import { ContactSection } from "@/components/ContactSection";

const HomePage = () => {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			{/* <TopProducts /> */}
			<ContactSection />
		</main>
	);
}

export default HomePage;