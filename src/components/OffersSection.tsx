import { motion } from "framer-motion";
import { Rainbow, Sparkles, Wind, Paintbrush, Cake, Gift, Users, Brain, Heart, Hand } from "lucide-react";

const offers = [
  {
    icon: Rainbow,
    title: "Sesja Klasyczna",
    subtitle: "DZIKA STREFA KOLORU",
    description: "Malowanie na ścianach, płótnie, podłodze i na sobie. Czysta ekspresja.",
    image: "/images/warsztaty-plastyczne-gdansk-sesja-klasyczna-rodzinna.webp",
    alt: "Rodzinne warsztaty plastyczne w Gdańsku, swobodne malowanie abstrakcyjnych wzorów na ścianach w splatter room",
    title_attr: "Sesja klasyczna w studio malowania",
    dark: false,
  },
  {
    icon: Sparkles,
    title: "Sesja FLUO",
    subtitle: "EFEKT WOW",
    description: "Farby świecące w świetle UV. Zobacz, jak Twoje dzieło zaczyna żyć w ciemności. Idealne na urodziny i wieczory panieńskie.",
    image: "/images/malowanie-farbami-uv-fluo-gdynia-sopot.webp",
    alt: "Kobieta malująca świecące kwiaty farbami UV podczas sesji fluo w studio kreatywnym blisko Sopotu i Gdyni",
    title_attr: "Malowanie w świetle UV - Atrakcje Pomorskie",
    dark: true,
  },
  {
    icon: Wind,
    title: "Bujamy się i malujemy",
    subtitle: "TOTALNA ZABAWA",
    description: "Huśtawki, dynamiczne chlapanie, totalna zabawa kolorem.",
    image: "/images/atrakcje-dla-dzieci-gdansk-malowanie-na-hustawkach.webp",
    alt: "Dzieci malujące na huśtawkach w świetle neonowym, unikalna atrakcja edukacyjna dla najmłodszych w Gdańsku i Redzie",
    title_attr: "Zabawa farbami na huśtawce - Viva Kolor",
    dark: false,
  },
];

const birthdaySteps = [
  { icon: Paintbrush, title: "Indywidualne malowanie", desc: "Klasyczne lub FLUO. Każde dziecko pracuje pod okiem animatora." },
  { icon: Cake, title: "Przerwa urodzinowa", desc: "Czas na tort (we własnym zakresie), życzenia i poczęstunek." },
  { icon: Gift, title: "Wspólny obraz dla solenizanta", desc: "Dedykowane dzieło tworzone przez wszystkich uczestników." },
  { icon: Users, title: "Zakończenie i podsumowanie", desc: "Rozdanie prac i wspomnienia na lata." },
];

const groupBenefits = [
  { icon: Brain, title: "Kreatywność", desc: "Rozwija myślenie twórcze i wyobraźnię." },
  { icon: Heart, title: "Emocje", desc: "Pomaga w wyrażaniu uczuć przez sztukę." },
  { icon: Hand, title: "Sensoryka", desc: "Bezpieczna stymulacja dotyku i zmysłów." },
  { icon: Users, title: "Współpraca", desc: "Budowanie relacji i integracja grupy." },
];

const OffersSection = () => {
  return (
    <section id="oferta" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-black text-center mb-4 text-foreground">
          Nasza Oferta
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Wybierz swój rodzaj kreatywności – od klasycznego malowania po neonowe szaleństwo w świetle UV.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-2xl overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300 ${
                offer.dark ? "bg-fluo-bg text-fluo-text" : "bg-card text-card-foreground"
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.alt}
                  title={offer.title_attr}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <offer.icon size={24} className={offer.dark ? "text-neon-green" : "text-primary"} />
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    offer.dark ? "text-neon-pink" : "text-primary"
                  }`}>
                    {offer.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{offer.title}</h3>
                <p className={offer.dark ? "text-fluo-text/80" : "text-muted-foreground"}>
                  {offer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Birthday section */}
        <div id="urodziny" className="mb-20">
          <div
            className="relative py-16 md:py-24 rounded-2xl overflow-hidden mb-12 parallax-ken-burns"
            style={{ backgroundImage: `url(/images/kreatywne-urodziny-dla-dzieci-gdansk-splatter-room.webp)` }}
          >
            <div className="absolute inset-0 bg-foreground/60" />
            <div className="relative z-10 text-center px-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-display font-black text-primary-foreground mb-4"
              >
                Urodziny dla dzieci w Gdańsku
              </motion.h3>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Szukasz oryginalnego miejsca na urodziny dla dziecka w Trójmieście?<br className="hidden md:inline" />
                To idealna alternatywa dla sal zabaw. Czas trwania: 120 minut.<br className="hidden md:inline" />
                Salka urodzinowa na wyłączność.
              </p>
            </div>
          </div>

          <h4 className="text-2xl md:text-3xl font-display font-bold text-center mb-10 text-foreground">
            Przebieg przyjęcia
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {birthdaySteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-rainbow flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                  <step.icon size={24} className="text-primary-foreground" />
                </div>
                <h5 className="font-display font-bold text-lg mb-2 text-foreground">{step.title}</h5>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-card rounded-xl p-6 max-w-2xl mx-auto border border-border">
            <h5 className="text-xl font-display font-bold mb-4 text-foreground">Koszty i organizacja</h5>
            <ul className="space-y-3 text-foreground mb-6">
              <li className="flex gap-2"><span className="text-primary">•</span> Od 89 PLN / os. + 300 zł salka urodzinowa</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Min. 10 osób, max. 25 osób</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Zapewniamy zastawę, szklane dzbanki, nóż do tortu</li>
            </ul>
            <a
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-rainbow font-bold text-primary-foreground shadow-colorful hover:scale-105 transition-transform"
            >
              Skontaktuj się z nami
            </a>
          </div>
        </div>

        {/* Groups section */}
        <div id="grupy">
          <div
            className="relative py-16 md:py-24 rounded-2xl overflow-hidden mb-12 parallax-ken-burns"
            style={{ backgroundImage: `url(/images/wycieczki-szkolne-przedszkolne-warsztaty-gdansk-rumia.webp)` }}
          >
            <div className="absolute inset-0 bg-foreground/60" />
            <div className="relative z-10 text-center px-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-display font-black text-primary-foreground mb-4"
              >
                <span className="hidden md:inline">Sesje dla grup przedszkolnych i szkolnych w Gdańsku</span>
                <span className="md:hidden">Sesje dla grup przedszkolnych<br />i szkolnych w Gdańsku</span>
              </motion.h3>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Warsztaty plastyczne i zajęcia kreatywne dla dzieci.<br className="hidden md:inline" />
                Studio pomieści ok. 50 osób w trzech salach.
              </p>
            </div>
          </div>

          <h4 className="text-2xl md:text-3xl font-display font-bold text-center mb-10 text-foreground">
            Dlaczego warto?
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-10">
            {groupBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-rainbow flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform">
                  <b.icon size={24} className="text-primary-foreground" />
                </div>
                <h5 className="font-display font-bold text-foreground mb-1">{b.title}</h5>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-card rounded-xl p-6 max-w-2xl mx-auto border border-border">
            <h5 className="text-xl font-display font-bold mb-4 text-foreground">Koszt i rezerwacja</h5>
            <p className="text-foreground mb-6">
              Koszt ok. 60 zł/os (ustalany indywidualnie w zależności od grupy).{" "}
              <br className="hidden md:inline" />
              Zadzwoń lub napisz, aby ustalić termin i wycenę.
            </p>
            <a
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-rainbow font-bold text-primary-foreground shadow-colorful hover:scale-105 transition-transform"
            >
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
