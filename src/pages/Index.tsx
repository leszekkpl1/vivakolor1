import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OffersSection from "@/components/OffersSection";
import ParallaxDivider from "@/components/ParallaxDivider";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingWidget from "@/components/BookingWidget";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <OffersSection />
        <ParallaxDivider
          image="/images/cennik-biletow-studio-malowania-gdansk-neon.webp"
          alt="Mężczyzna malujący ścianę neonową farbą za pomocą wałka w trójmiejskim splatter roomie Viva Kolor"
          title="Cennik biletów - Studio malowania"
          overlay="neon"
        />
        <PricingSection />
        <BookingWidget />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
