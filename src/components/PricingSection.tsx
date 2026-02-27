import { motion } from "framer-motion";

const pricingData = [
  { type: "Ulgowy", classic: ["79 zł", "89 zł"], fluo: ["99 zł", "109 zł"] },
  { type: "Normalny", classic: ["99 zł", "109 zł"], fluo: ["109 zł", "119 zł"] },
  { type: "Normalny + dod. osoba", classic: ["129 zł", "139 zł"], fluo: ["139 zł", "149 zł"] },
  { type: "Rodzinny 2+2", classic: ["179 zł", "189 zł"], fluo: ["189 zł", "199 zł"] },
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

        <div className="overflow-x-auto">
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

        <p className="md:hidden text-xs text-muted-foreground text-center mt-3 italic">
          👉 Przesuń w prawo aby zobaczyć pełny cennik
        </p>

        <div className="mt-8 bg-muted rounded-xl p-6 space-y-2 text-sm text-muted-foreground">
          <p>👶 Dzieci poniżej 12 lat z opiekunem (opiekun: 10 zł). Max 2 osoby przy jednym stanowisku.</p>
          <p><strong>Opcje dodatkowe:</strong> farby zwykłe 5 zł /<br className="md:hidden" /> fluo 7 zł, dodatkowe płótna 35 zł / 100 zł, strój ochronny 10 zł.</p>
          <p><strong>Bilet zawiera:</strong> płótno, farby, odzież ochronną, karton do transportu.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
