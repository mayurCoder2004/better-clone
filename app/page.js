import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductsFaqSection from "./components/ProductsFaqSection";
import WhyBetterSection from "./components/WhyBetterSection";

export default function HomePage() {
  return (
    <>
      <Navbar theme="dark" />
      <div className="pt-18">  
        <HeroSection />
        <WhyBetterSection />
        <ProductsFaqSection />
        <Footer />
      </div>
    </>
  );
}
