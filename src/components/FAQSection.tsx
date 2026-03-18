import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Jak wygląda proces płatności?",
    a: "Szczegóły dotyczące płatności przekazujemy podczas rezerwacji – możliwa jest płatność przelewem lub na miejscu.",
  },
  {
    q: "Czy można przełożyć zarezerwowany termin?",
    a: "Tak, zmiana terminu jest możliwa po wcześniejszym kontakcie z nami i w zależności od dostępności miejsc.",
  },
  {
    q: "Czy trzeba mieć talent plastyczny?",
    a: "Nie. Nasze studio jest otwarte dla każdego – bez względu na doświadczenie czy umiejętności. Liczy się zabawa i kreatywność.",
  },
  {
    q: "Czy farby pozostają na ubraniach lub skórze?",
    a: "Korzystamy z farb łatwo zmywalnych i spieralnych. Uczestnicy otrzymują jednorazowe poncha oraz ochraniacze na obuwie. Mimo to rekomendujemy założenie ubrania, którego ewentualne zabrudzenie nie będzie problemem.",
  },
  {
    q: "Czy można zorganizować wydarzenie zamknięte?",
    a: "Oczywiście. Organizujemy m.in. urodziny, wieczory panieńskie, integracje firmowe oraz wydarzenia prywatne.",
  },
  {
    q: "Jak dokonać rezerwacji?",
    a: "Termin można zarezerwować przez formularz online lub telefonicznie.",
  },
  {
    q: "Czy mogę przyjść bez wcześniejszej rezerwacji?",
    a: "Każda sesja ma ograniczoną liczbę miejsc. Rezerwacja gwarantuje udział. Zakup biletu na miejscu jest możliwy wyłącznie przy dostępnych wolnych miejscach.",
  },
  {
    q: "Od jakiego wieku można wziąć udział w zajęciach?",
    a: "Zapraszamy dzieci od 3. roku życia. Uczestnicy poniżej 12 lat muszą przebywać na sali pod opieką osoby dorosłej (10 zł).",
  },
  {
    q: "Co obejmuje bilet wstępu?",
    a: "Każdy bilet wstępu zawiera: płótno + karton na obraz, zestaw 5 wybranych kolorów farb, odzież ochronną, ochraniacze na buty, narzędzia malarskie i 60 minut świetnej zabawy.",
  },
  {
    q: "Jakie farby są używane podczas zajęć?",
    a: "Pracujemy na bezpiecznych, wysokiej jakości farbach plakatowych. Są nietoksyczne, wodorozcieńczalne, posiadają certyfikat CE oraz aktualne badania bezpieczeństwa zgodne z obowiązującymi normami.",
  },
  {
    q: "Czy obowiązują jakieś zasady?",
    a: "Tak – obowiązują podstawowe zasady bezpieczeństwa i wzajemnego szacunku (np. zakaz biegania czy celowego chlapania na prace innych osób). Dzięki temu każdy może komfortowo uczestniczyć w zabawie.",
  },
  {
    q: "Czy podczas zajęć obecni są animatorzy opiekujący się dziećmi?",
    a: "Nie. Dzieci przez cały czas trwania sesji pozostają pod opieką swoich opiekunów.",
  },
  {
    q: "Czy można robić zdjęcia i nagrywać filmy?",
    a: "Tak – zachęcamy do dokumentowania swojej zabawy. Będzie nam miło, jeśli oznaczycie nasze studio w mediach społecznościowych.",
  },
  {
    q: "Co dzieje się z obrazem po zakończeniu sesji?",
    a: "Gotową pracę zabieracie ze sobą do domu w zabezpieczonym, tekturowym opakowaniu.",
  },
  {
    q: "Jak do nas trafić?",
    a: "Studio VIVA Kolor znajduje się w Gdańsku w centrum Wrzeszcza, na osiedlu Quattro Towers, tuż obok Galerii Manhattan. Po dotarciu do bram osiedla na domofonie wybieramy nr 1112. Po wejściu na teren kierujemy się prosto, aż do fontanny w kształcie kuli. Następnie skręcamy w lewo i na domofonie znowu wybieramy 1112. Studio VIVA Kolor znajduje się na pierwszym piętrze budynku usługowego, a nie mieszkalnego. Szukajcie naszych \"dzikich\" znaków na oknach i drzwiach. One zaprowadzą Was wprost do celu.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="pt-20 pb-[3.25rem] md:pt-28 md:pb-[4.5rem] bg-background">
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
