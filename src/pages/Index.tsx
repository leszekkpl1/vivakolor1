import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OffersSection from "@/components/OffersSection";
import ParallaxDivider from "@/components/ParallaxDivider";
import PricingSection from "@/components/PricingSection";
import BookingWidget from "@/components/BookingWidget";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import artistNeonImg from "@/assets/artist-neon.webp";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <OffersSection />
        <ParallaxDivider
          image={artistNeonImg}
          alt="Artysta malujący neonowymi farbami w ciemnym studio – sesja FLUO w Viva Kolor Gdańsk"
          overlay="neon"
        />
        <PricingSection />
        <BookingWidget />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
