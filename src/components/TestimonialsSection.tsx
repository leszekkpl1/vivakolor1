import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    text: "Robiliśmy tam urodziny dla 8-latka i to był strzał w dziesiątkę! Dzieciaki zachwycone, bo w końcu nikt im nie mówił, że mają się nie brudzić. Salka na tort super, a gotowe obrazy wiszą już u każdego w pokoju. Zdecydowanie polecam.",
    author: "Ania",
    city: "Gdańsk",
  },
  {
    text: "Byliśmy z dziewczyną na sesji fluo i mega pozytywne zaskoczenie. Fajny klimat, lampy UV, świecące farby. Coś zupełnie innego niż zwykłe wyjście do kina czy na kolację. Na pewno jeszcze wrócimy.",
    author: "Tomek",
    city: "Gdynia",
  },
  {
    text: "Rewelacyjne miejsce na odstresowanie po ciężkim tygodniu w pracy. Wziąłem farby, płótno i po prostu chlapałem jak leci na ściany i podłogę. Niby prosta rzecz, a daje tyle frajdy. Fartuchy dają radę, moje ubranie wyszło z tego bez szwanku.",
    author: "Jakub",
    city: "Gdańsk",
  },
  {
    text: "Córka uwielbia malować, więc poszłyśmy we dwie na sesję klasyczną. Świetnie spędzony czas, obsługa bardzo miła i wszystko dokładnie tłumaczy. Zabawa niesamowita, następnym razem bierzemy też te farby fluo!",
    author: "Basia",
    city: "Sopot",
  },
  {
    text: "Idealne miejsce na babskie wyjście! Zorganizowałyśmy tu część wieczoru panieńskiego. Śmiechu było co niemiara, rzucałyśmy w siebie farbą, a zdjęcia z tej fluorescencyjnej sali wyszły nam wręcz obłędnie.",
    author: "Daria",
    city: "Gdańsk",
  },
  {
    text: "Zawsze myślałam, że kompletnie nie umiem malować, a tutaj okazało się, że to w ogóle nie ma znaczenia! Liczy się sama zabawa, chwila oddechu i rzucanie balonami z farbą. Polecam spróbować malowania na huśtawce, świetne doświadczenie.",
    author: "Weronika",
    city: "Gdynia",
  },
  {
    text: "Byliśmy całą ekipą z biura w ramach integracji. Szczerze mówiąc myślałem na początku, że to będzie nuda, a bawiłem się jak dzieciak. Dobra organizacja, zabezpieczenia i sprzęt na miejscu, a swój obraz dumnie zabrałem do domu. Super sprawa.",
    author: "Adam",
    city: "Rumia",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, [next]);

  const getVisible = () => {
    const items = [];
    for (let offset = -1; offset <= 1; offset++) {
      const idx = (current + offset + testimonials.length) % testimonials.length;
      items.push({ ...testimonials[idx], offset, idx });
    }
    return items;
  };

  return (
    <section id="opinie" className="relative py-20 md:py-28 overflow-hidden">
      {/* Neon paint splatter background */}
      <div
        className="absolute inset-0 parallax-ken-burns"
        style={{ backgroundImage: `url(/images/swobodne-malowanie-farby-neonowe-viva-kolor.webp)` }}
      />
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-black text-center mb-4 text-neon-green">
          Niektóre opinie naszych zadowolonych klientów
        </h2>
        <div className="flex justify-center gap-1 mb-12">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={28} className="text-secondary fill-secondary" />
          ))}
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:block relative">
          <div className="flex justify-center gap-6 items-stretch min-h-[360px]">
            <AnimatePresence mode="popLayout">
              {getVisible().map((item) => (
                <motion.div
                  key={item.idx}
                  initial={{ opacity: 0, scale: 0.8, x: item.offset * 100 }}
                  animate={{ opacity: item.offset === 0 ? 1 : 0.85, scale: item.offset === 0 ? 1.05 : 0.95, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="w-1/3 bg-primary-foreground/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl flex flex-col"
                >
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-neon-orange fill-neon-orange" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed flex-1 text-sm italic">
                    „{item.text}"
                  </p>
                  <p className="mt-4 font-bold text-foreground text-right">
                    – {item.author}, {item.city}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-12 h-12 rounded-full bg-primary-foreground/80 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Poprzednia opinia"
          >
            <ChevronLeft size={24} className="text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-12 h-12 rounded-full bg-primary-foreground/80 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Następna opinia"
          >
            <ChevronRight size={24} className="text-foreground" />
          </button>
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="bg-primary-foreground/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-neon-orange fill-neon-orange" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed text-sm italic">
                „{testimonials[current].text}"
              </p>
              <p className="mt-4 font-bold text-foreground text-right">
                – {testimonials[current].author}, {testimonials[current].city}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-primary-foreground/80 shadow-lg flex items-center justify-center"
              aria-label="Poprzednia opinia"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-primary-foreground/80 shadow-lg flex items-center justify-center"
              aria-label="Następna opinia"
            >
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-neon-green scale-125" : "bg-primary-foreground/40"
              }`}
              aria-label={`Opinia ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
