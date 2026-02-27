import { motion } from "framer-motion";
import { Palette, Brush, Lightbulb } from "lucide-react";
import heroImg from "@/assets/hero-party.webp";

const badges = [
  { icon: Palette, text: "Nie musisz umieć malować" },
  { icon: Brush, text: "Wszystkie materiały w cenie" },
  { icon: Lightbulb, text: "Efekt, który zabierasz do domu" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 parallax-ken-burns"
        style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: 'center 55%', backgroundSize: '100% auto' }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black leading-tight text-primary-foreground mb-6">
            Studio malowania Gdańsk{" "}
            <span className="text-gradient-rainbow bg-clip-text">Viva Kolor</span>
            {" "}– Sesje klasyczne i FLUO
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Jedyne takie studio kreatywnego malowania w Gdańsku. Masz dość „nie dotykaj",
            „nie brudź", „uważaj"? U nas obowiązuje tylko jedna zasada:{" "}
            <strong>
              <span className="hidden md:inline">
                <span className="text-secondary">MALUJ JAK CHCESZ.</span>{" "}
                <span className="text-green-400">GDZIE CHCESZ.</span>{" "}
                <span className="text-blue-400">CZYM CHCESZ.</span>
              </span>
              <span className="md:hidden flex flex-col">
                <span className="text-secondary">MALUJ JAK CHCESZ.</span>
                <span className="text-green-400">GDZIE CHCESZ.</span>
                <span className="text-blue-400">CZYM CHCESZ.</span>
              </span>
            </strong>
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => scrollTo("#rezerwacja")}
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-rainbow font-bold text-lg text-primary-foreground shadow-colorful hover:scale-105 transition-transform"
            >
              Zarezerwuj sesję
            </button>
            <button
              onClick={() => scrollTo("#oferta")}
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-primary-foreground/30 font-bold text-lg text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Sprawdź ofertę
            </button>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.15, type: "spring" }}
                className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20 hover:scale-110 transition-transform"
              >
                <badge.icon size={20} className="text-secondary" />
                <span className="text-sm font-medium text-primary-foreground">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
