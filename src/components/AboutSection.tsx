import { motion } from "framer-motion";
import { CalendarCheck, MapPin, Palette, Sparkles, Home } from "lucide-react";
import groupImg from "@/assets/group-fun.webp";

const steps = [
  { icon: CalendarCheck, label: "Rezerwujesz termin" },
  { icon: MapPin, label: "Przyjeżdżasz" },
  { icon: Palette, label: "Wybierasz kolory" },
  { icon: Sparkles, label: "Tworzysz" },
  { icon: Home, label: "Zabierasz obraz do domu" },
];

const AboutSection = () => {
  return (
    <section id="o-nas" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-black mb-6 text-foreground">
              Odkryj kreatywną przestrzeń w sercu{" "}
              <span className="text-gradient-rainbow">Trójmiasta</span>
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Szukasz miejsca, gdzie możesz twórczo spędzić czas i stworzyć własny obraz?
              Studio malowania w Gdańsku Viva Kolor to przestrzeń, w której każdy –
              niezależnie od doświadczenia – może malować, eksperymentować z kolorem
              i zabrać do domu własne dzieło.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              To nie warsztaty. To kreatywne doświadczenie. Tu sztuka nie ma zasad. Ma emocje.
              Organizujemy sesje klasyczne oraz wyjątkowe malowanie w świetle UV. To idealna
              propozycja na randkę, spotkanie z przyjaciółkami, wieczór panieński czy kreatywną
              integrację firmową w Gdańsku.
            </p>
            <p className="text-foreground font-semibold leading-relaxed">
              Tworzymy miejsce, do którego chce się wracać. Wskocz w kolor.
              Wyrzuć z siebie energię. Stwórz coś swojego.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-colorful aspect-[4/3]">
              <img
                src={groupImg}
                alt="Grupa przyjaciół malująca w studio Viva Kolor w Gdańsku"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* How it works */}
        <div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12 text-foreground">
            Jak to działa?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-rainbow flex items-center justify-center mb-3 shadow-colorful">
                  <step.icon size={28} className="text-primary-foreground" />
                </div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Krok {i + 1}
                </span>
                <span className="text-sm font-semibold text-foreground mt-1">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
