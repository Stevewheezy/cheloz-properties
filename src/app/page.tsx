import HeroSection from "../../components/HeroSection";
import PropertyListings from "../../components/PropertyListings";
import FAQ from "../../components/FAQ";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer"; // Import the Footer component

export default function Home() {
  return (
    <>
      <HeroSection />
      <PropertyListings />
      <FAQ />
      <Contact />
      <Footer /> {/* Add the Footer component here */}
    </>
  );
}