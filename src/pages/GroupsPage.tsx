import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Heart, Hand, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import familyImg from "@/assets/family-painting.webp";

const benefits = [
  { icon: Brain, title: "Kreatywność", desc: "Rozwija myślenie twórcze i wyobraźnię." },
  { icon: Heart, title: "Emocje", desc: "Pomaga w wyrażaniu uczuć przez sztukę." },
  { icon: Hand, title: "Sensoryka", desc: "Bezpieczna stymulacja dotyku i zmysłów." },
  { icon: Users, title: "Współpraca", desc: "Budowanie relacji i integracja grupy." },
];

const GroupsPage = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section
          className="relative py-20 md:py-32 parallax-section"
          style={{ backgroundImage: `url(${familyImg})` }}
        >
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-display font-black text-primary-foreground mb-4"
            >
              Sesje dla grup przedszkolnych i szkolnych w Gdańsku
            </motion.h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Warsztaty plastyczne i zajęcia kreatywne dla dzieci. Studio pomieści ok. 50 osób
              w trzech salach.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-black text-center mb-14 text-foreground">
              Dlaczego warto?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-rainbow flex items-center justify-center mx-auto mb-3">
                    <b.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-2xl">
            <h3 className="text-2xl font-display font-bold mb-6 text-foreground">Koszt i rezerwacja</h3>
            <p className="text-foreground mb-6">
              Koszt ok. 60 zł/os (ustalany indywidualnie w zależności od grupy).{" "}
              Zadzwoń lub napisz, aby ustalić termin i wycenę.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-rainbow font-bold text-primary-foreground shadow-colorful hover:scale-105 transition-transform"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GroupsPage;
