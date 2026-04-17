import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cake, Paintbrush, Users, Gift } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import kidsPaintImg from "@/assets/kids-painting.webp";

const steps = [
  {
    icon: Paintbrush,
    title: "Indywidualne malowanie",
    desc: "Klasyczne lub FLUO. Każde dziecko pracuje pod okiem animatora.",
  },
  {
    icon: Cake,
    title: "Przerwa urodzinowa",
    desc: "Czas na tort (we własnym zakresie), życzenia i poczęstunek.",
  },
  {
    icon: Gift,
    title: "Wspólny obraz dla solenizanta",
    desc: "Dedykowane dzieło tworzone przez wszystkich uczestników.",
  },
  {
    icon: Users,
    title: "Zakończenie i podsumowanie",
    desc: "Rozdanie prac i wspomnienia na lata.",
  },
];

const BirthdayPage = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section
          className="relative py-20 md:py-32 parallax-section"
          style={{ backgroundImage: `url(${kidsPaintImg})` }}
        >
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-display font-black text-primary-foreground mb-4"
            >
              Urodziny dla dzieci w Gdańsku
            </motion.h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
Szukasz oryginalnego miejsca na urodziny dla dziecka w Trójmieście?{" "}
              To idealna alternatywa dla sal zabaw. Czas trwania: 120 minut.{" "}
              Salka urodzinowa na wyłączność.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-black text-center mb-14 text-foreground">
              Przebieg przyjęcia
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-rainbow flex items-center justify-center mx-auto mb-4">
                    <step.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Costs */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-2xl">
            <h3 className="text-2xl font-display font-bold mb-6 text-foreground">Koszty i organizacja</h3>
            <ul className="space-y-3 text-foreground mb-8">
              <li className="flex gap-2"><span className="text-primary">•</span> Od 89 PLN / os. + 300 zł salka urodzinowa</li>
              <li className="flex gap-2"><span className="text-primary">•</span> <span>Min. 10 osób, max. 22 osób</span></li>
              <li className="text-sm text-muted-foreground pl-4">(w przypadku większej liczby osób prosimy o kontakt telefoniczny lub <span className="whitespace-nowrap">e-mailowy</span>)</li>
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BirthdayPage;
