import { motion } from "framer-motion";

const pricingData = [
  { type: "Ulgowy", classic: ["79 zł", "89 zł"], fluo: ["99 zł", "109 zł"] },
  { type: "Normalny", classic: ["99 zł", "109 zł"], fluo: ["109 zł", "119 zł"] },
];

const PricingSection = () => {
  return (
    <section id="cennik" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-black text-center mb-4 text-foreground">
            Przejrzysty Cennik
          </h2>
          <p className="text-center text-muted-foreground mb-12">Bilety i Rezerwacje</p>
        </motion.div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th rowSpan={2} className="p-3 text-left border-b border-border align-bottom text-pricing-green font-bold text-sm">
                  Bilet \ <span className="text-pricing-blue">Dni tygodnia</span>
                </th>
                <th colSpan={2} className="p-4 font-display font-bold text-center border-b border-border">
                  <span className="inline-flex items-center gap-2">
                    🌈 <span className="text-gradient-rainbow">Sesja Klasyczna</span>
                  </span>
                </th>
                <th colSpan={2} className="p-4 font-display font-bold text-center border-b border-border">
                  <span className="inline-flex items-center gap-2 text-neon-pink">
                    ✨ Sesja FLUO
                  </span>
                </th>
              </tr>
              <tr className="text-sm">
                <th className="p-3 border-b border-border text-pricing-blue">Pon-Czw</th>
                <th className="p-3 border-b border-border text-pricing-blue">Pt-Ndz</th>
                <th className="p-3 border-b border-border text-pricing-blue">Pon-Czw</th>
                <th className="p-3 border-b border-border text-pricing-blue">Pt-Ndz</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row, i) => (
                <motion.tr
                  key={row.type}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <td className="p-4 font-semibold text-pricing-green">{row.type}</td>
                  {row.classic.map((price, j) => (
                    <td key={`c${j}`} className="p-4 text-center font-medium text-pricing-orange">
                      {price}
                    </td>
                  ))}
                  {row.fluo.map((price, j) => (
                    <td key={`f${j}`} className="p-4 text-center font-medium text-neon-pink">
                      {price}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile vertical cards */}
        <div className="md:hidden space-y-8">
          {/* Bilet Ulgowy */}
          <div className="bg-muted/30 rounded-2xl p-6">
            <h3 className="font-display font-bold text-xl text-center text-foreground mb-6">Bilet Ulgowy</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="inline-flex items-center gap-1.5 font-display font-bold mb-3">
                  🌈 <span className="text-gradient-rainbow text-sm">Sesja Klasyczna</span>
                </p>
                <p className="text-foreground text-sm">Pon-Czw: <span className="font-bold text-pricing-orange">79 zł</span></p>
                <p className="text-foreground text-sm">Pt-Ndz: <span className="font-bold text-pricing-orange">89 zł</span></p>
              </div>
              <div className="text-center">
                <p className="inline-flex items-center gap-1.5 font-display font-bold text-neon-pink mb-3 text-sm">
                  ✨ Sesja FLUO
                </p>
                <p className="text-foreground text-sm">Pon-Czw: <span className="font-bold text-neon-pink">99 zł</span></p>
                <p className="text-foreground text-sm">Pt-Ndz: <span className="font-bold text-neon-pink">109 zł</span></p>
              </div>
            </div>
          </div>

          {/* Bilet Normalny */}
          <div className="bg-muted/30 rounded-2xl p-6">
            <h3 className="font-display font-bold text-xl text-center text-foreground mb-6">Bilet Normalny</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="inline-flex items-center gap-1.5 font-display font-bold mb-3">
                  🌈 <span className="text-gradient-rainbow text-sm">Sesja Klasyczna</span>
                </p>
                <p className="text-foreground text-sm">Pon-Czw: <span className="font-bold text-pricing-orange">99 zł</span></p>
                <p className="text-foreground text-sm">Pt-Ndz: <span className="font-bold text-pricing-orange">109 zł</span></p>
              </div>
              <div className="text-center">
                <p className="inline-flex items-center gap-1.5 font-display font-bold text-neon-pink mb-3 text-sm">
                  ✨ Sesja FLUO
                </p>
                <p className="text-foreground text-sm">Pon-Czw: <span className="font-bold text-neon-pink">109 zł</span></p>
                <p className="text-foreground text-sm">Pt-Ndz: <span className="font-bold text-neon-pink">119 zł</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-muted rounded-xl p-6 space-y-2 text-sm text-muted-foreground">
          <p>Dzieci <strong>poniżej 12 lat</strong> muszą przebywać z opiekunem, a koszt udziału opiekuna lub dodatkowej osoby przy stanowisku wynosi <strong>10 zł</strong> (cena obejmuje strój ochronny i ochraniacze na buty), przy czym przy jednym stanowisku mogą przebywać maksymalnie <strong>2 osoby</strong>.</p>
          <p><strong>Opcje dodatkowe:</strong> farby zwykłe 5zł / fluo 7zł, dodatkowe płótna 35 zł / 100 zł, strój ochronny 10 zł.</p>
          <p><strong>Bilet zawiera:</strong> płótno, farby, odzież ochronną, karton do transportu.</p>
          <p>Minimalny wiek uczestnika to ukończone{" "}<br className="md:hidden" /><strong>3 lata</strong>.</p>
          <p>Honorujemy Kartę Dużej Rodziny{" "}<br className="md:hidden" />- <strong>zniżka 10%</strong> na bilet wstępu.</p>
          <p>Bilet ulgowy przysługuje dzieciom i młodzieży uczącej się <strong>do 18 roku</strong> życia, studentom, osobom z niepełnosprawnością oraz seniorom – za okazaniem ważnego dokumentu potwierdzającego uprawnienia.</p>
          <p>Jedna osoba dorosła może mieć pod opieką maksymalnie <strong>5 dzieci</strong> na sali.</p>
          <p>Czas trwania sesji to <strong>60 minut</strong>.{" "}<br className="md:hidden" />W przypadku urodzin <strong>120 minut</strong>.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
