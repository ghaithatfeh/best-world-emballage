import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { HomePage } from "@/screens/HomePage/HomePage";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			{/* <HomePage /> */}
			<HeroSection />
			<AboutSection />
			<Footer />
		</>
	);
}