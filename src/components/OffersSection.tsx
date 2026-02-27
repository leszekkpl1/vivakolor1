import { motion } from "framer-motion";
import { Rainbow, Sparkles, Wind } from "lucide-react";
import kidsPaintImg from "@/assets/kids-painting.webp";
import artistFluoImg from "@/assets/artist-fluo.webp";
import familyImg from "@/assets/family-painting.webp";

const offers = [
  {
    icon: Rainbow,
    title: "Sesja Klasyczna",
    subtitle: "DZIKA STREFA KOLORU",
    description: "Malowanie na ścianach, płótnie, podłodze i na sobie. Czysta ekspresja.",
    image: kidsPaintImg,
    alt: "Dzieci malujące farbami w sesji klasycznej studio Viva Kolor Gdańsk",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Sparkles,
    title: "Sesja FLUO",
    subtitle: "EFEKT WOW",
    description: "Farby świecące w świetle UV. Zobacz, jak Twoje dzieło zaczyna żyć w ciemności. Idealne na urodziny i wieczory panieńskie.",
    image: artistFluoImg,
    alt: "Artystka malująca fluorescencyjnymi farbami pod UV w studio Viva Kolor",
    gradient: "from-neon-pink to-neon-blue",
    dark: true,
  },
  {
    icon: Wind,
    title: "Bujamy się i malujemy",
    subtitle: "TOTALNA ZABAWA",
    description: "Huśtawki, dynamiczne chlapanie, totalna zabawa kolorem.",
    image: familyImg,
    alt: "Rodzina malująca razem w studio kreatywnym Viva Kolor Gdańsk",
    gradient: "from-accent to-neon-yellow",
  },
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

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-2xl overflow-hidden shadow-lg group ${
                offer.dark ? "bg-fluo-bg text-fluo-text" : "bg-card text-card-foreground"
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
      </div>
    </section>
  );
};

export default OffersSection;
