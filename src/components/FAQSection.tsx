import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Czy trzeba mieć talent plastyczny?",
    a: "Nie, liczy się zabawa i kreatywność. Nie musisz umieć malować – u nas każdy jest artystą!",
  },
  {
    q: "Czy farby pozostają na ubraniach?",
    a: "Farby są spieralne, dajemy poncha i ochraniacze, ale zalecamy założyć gorsze ubranie na wszelki wypadek.",
  },
  {
    q: "Od jakiego wieku można uczestniczyć?",
    a: "Od 3 lat. Dzieci poniżej 12 lat przebywają z opiekunem na sali.",
  },
  {
    q: "Co z obrazem po sesji?",
    a: "Zabierasz do domu w zabezpieczonym, tekturowym opakowaniu. To Twoje dzieło!",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-black text-center mb-12 text-foreground">
          Najczęściej zadawane pytania
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-xl px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
