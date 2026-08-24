# Remix of vivakolor3 (75)

Role and Tech Stack:
Act as an expert Frontend Developer and UX/UI Designer. Build a modern, highly responsive website for a creative painting studio using React, Tailwind CSS, and Lucide Icons.

Visual Vibe & Inspiration:
The design should be inspired by primalpigment.com and splatterstudiola.com. It needs to be energetic, colorful, and highly expressive (paint splatters, brush strokes, artistic chaos) but constrained within a clean, modern UI layout.
Implement a dual-vibe aesthetic:

Light/Vibrant Mode: For "Classic Sessions" (white backgrounds with explosive, highly saturated color splatters).

Dark/Neon Mode: For "FLUO Sessions" (deep purples/blacks with glowing neon green, pink, and yellow accents).
Logo: Use the colorful lion logo (VIVA KOLOR creative painting studio).

SEO & Structure Rules:

The site must target local SEO keywords organically: "Gdańsk, Gdańsk-Wrzeszcz, Gdynia, Sopot, Trójmiasto, Gdańsk i okolice, warsztaty plastyczne Gdańsk, atrakcje edukacyjne Gdańsk".

Strictly follow semantic HTML. Use exactly one H1 per page, followed by logical H2 and H3 tags.

Booking System: Leave a dedicated 

 component where I can inject a Cal.com widget via iframe.

Pages & Routing:
Create a multi-page routing structure (or visually distinct sections in a smooth-scrolling SPA) for:

Home (Hero, About, Offers overview, Pricing, FAQ)

Urodziny dla dzieci (Detailed birthday offer)

Grupy zorganizowane (Schools & Kindergartens)

Kontakt

Regulamin (Text page)

Polityka Prywatności (Text page)

Here is the exact Polish content and logical structure to implement:

1. STRONA GŁÓWNA (Home)
Hero Section:

H1: Studio malowania Gdańsk | Viva Kolor – Sesje klasyczne i FLUO

Subtitle: Jedyne takie studio kreatywnego malowania w Gdańsku. Masz dość „nie dotykaj”, „nie brudź”, „uważaj”? U nas obowiązuje tylko jedna zasada: MALUJ JAK CHCESZ. GDZIE CHCESZ. CZYM CHCESZ.

Buttons: [ Zarezerwuj sesję ] (Scrolls to booking), [ Sprawdź ofertę ] (Scrolls to offers section).

Badges/Icons below: 🎨 Nie musisz umieć malować | 🖌️ Wszystkie materiały w cenie | 💡 Efekt, który zabierasz do domu

Sekcja O nas:

H2: Odkryj kreatywną przestrzeń w sercu Trójmiasta Tekst główny: Szukasz miejsca., gdzie możesz twórczo spędzić czas i stworzyć własny obraz? Studio malowania w Gdańsku Viva Kolor to przestrzeń, w której każdy – niezależnie od doświadczenia – może malować, eksperymentować z kolorem i zabrać do domu własne dzieło.
Akapit 2: To nie warsztaty. To kreatywne doświadczenie. Tu sztuka nie ma zasad. Ma emocje. Organizujemy sesje klasyczne oraz wyjątkowe malowanie w świetle UV. To idealna propozycja na randkę, spotkanie z przyjaciółkami, wieczór panieński czy kreatywną integrację firmową w Gdańsku.
Akapit 3: Tworzymy miejsce, do którego chce się wracać. Wskocz w kolor. Wyrzuć z siebie energię. Stwórz coś swojego.

H3: Jak to działa?

Steps (Use Icons): 1. Rezerwujesz termin -> 2. Przyjeżdżasz -> 3. Wybierasz kolory -> 4. Tworzysz -> 5. Zabierasz obraz do domu.

Oferta (Cards Section):

Card 1: 🌈 Sesja Klasyczna = DZIKA STREFA KOLORU. Malowanie na ścianach, płótnie, podłodze i na sobie. Czysta ekspresja.

Card 2: ✨ Sesja FLUO = EFEKT WOW. Farby świecące w świetle UV. Zobacz, jak Twoje dzieło zaczyna żyć w ciemności. Idealne na urodziny i wieczory panieńskie.

Card 3: 🎠 BUJAMY SIĘ I MALUJEMY. Huśtawki, dynamiczne chlapanie, totalna zabawa kolorem.

Cennik (Pricing Table):

H2: Przejrzysty Cennik (Bilety i Rezerwacje)

Build a highly responsive, easy-to-read table:

Ulgowy: 79zł (Pon-Czw) | 89zł (Pt-Ndz) || FLUO: 99zł (Pon-Czw) | 109zł (Pt-Ndz)

Normalny: 99zł | 109zł || FLUO: 109zł | 119zł

Normalny + dod. osoba przy stanowisku: 129zł | 139zł || FLUO: 139zł | 149zł

Rodzinny 2+2: 179zł | 189zł || FLUO: 189zł | 199zł

Info below table: Dzieci poniżej 12 lat z opiekunem (Opiekun: 10zł). Max 2 osoby przy jednym stanowisku. Opcje dodatkowe: farby zwykłe 5zł / fluo 7zł, dodatkowe płótna 35zł/100zł, strój ochronny 10zł. Bilet zawiera: płótno, farby, odzież, karton.

Booking Placeholder: [Here inject the component for cal.com iframe integration]

FAQ (Accordion):

Create an interactive accordion:

Czy trzeba mieć talent plastyczny? -> Nie, liczy się zabawa i kreatywność.

Czy farby pozostają na ubraniach? -> Są spieralne, dajemy poncha i ochraniacze, ale załóż gorsze ubranie.

Od jakiego wieku? -> Od 3 lat. Dzieci <12 lat przebywają z opiekunem na sali.

Co z obrazem? -> Zabierasz do domu w zabezpieczonym, tekturowym opakowaniu.

2. URODZINY DLA DZIECI (Subpage)
H1: Urodziny dla dzieci w Gdańsku – kreatywne przyjęcie w Viva Kolor

Text: Szukasz oryginalnego miejsca na urodziny dla dziecka w Trójmieście? To idealna alternatywa dla sal zabaw. Czas trwania: 120 minut. Salka urodzinowa na wyłączność.

H2: Przebieg przyjęcia

Grid with 4 steps:

Indywidualne malowanie (klasyczne lub FLUO). Każde dziecko pracuje pod okiem animatora.

Przerwa urodzinowa. Czas na tort (we własnym zakresie), życzenia i poczęstunek.

Wspólny obraz dla solenizanta. Dedykowane dzieło tworzone przez wszystkich uczestników.

Zakończenie i podsumowanie. Rozdanie prac.

H3: Koszty i organizacja

List: Od 89 PLN / os. + 300 zł salka urodzinowa. Min. 10 osób, max. 25 osób. Zapewniamy zastawę, szklane dzbanki, nóż do tortu.

Button: [ Skontaktuj się i zarezerwuj termin ] (Link to contact).

3. GRUPY ZORGANIZOWANE (Subpage)
H1: Sesje dla grup przedszkolnych i szkolnych w Gdańsku

Text: Warsztaty plastyczne i zajęcia kreatywne dla dzieci. Studio pomieści ok. 50 osób w trzech salach.

H2: Dlaczego warto?

List: Kreatywność (myślenie twórcze), Emocje (wyrażanie uczuć), Sensoryka (bezpieczna stymulacja dotyku), Współpraca (budowanie relacji i integracja).

H3: Koszt i rezerwacja

Text: Koszt ok. 65 zł/os (ustalany indywidualnie w zależności od grupy). Zadzwoń lub napisz, aby ustalić termin i wycenę.

4. KONTAKT & FOOTER
H2: Kontakt

Info: VIVA Kolor Creative Painting Studio

Adres: ul. Partyzantów 8/112u, 80-254 Gdańsk-Wrzeszcz, Quattro Towers (przy CH Manhattan).

Godziny otwarcia: Pon-Czw 12:00-20:00, Pt-Ndz 10:00-21:00. Grupy zorganizowane: Pon-Pt 09:00-12:00.

Email/Phone: vivakolor@wp.pl / +48507125652

Footer Links: NIP: 6040018127, Regulamin, Polityka Prywatności, Social Media.

5. REGULAMIN & POLITYKA PRYWATNOŚCI (Legal Subpages)
Create two simple, typography-focused text pages. Include clear H1 titles ("Regulamin Studia", "Polityka Prywatności") and format the placeholders well for readability (I will paste the raw legal text into these containers later).


Do formularza rezerwacyjnego zastosuj ten kod:
<div className="w-full max-w-4xl mx-auto h-[600px] md:h-[700px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
  <iframe
    src="https://cal.com/TWOJ_USERNAME/TWOJA_SESJA?hideEventTypeDetails=false&layout=month_view"
    style={{ width: '100%', height: '100%', border: 'none' }}
    title="Zarezerwuj sesję w Viva Kolor"
    loading="lazy"
  ></iframe>
</div>




FINAL SYSTEM REINFORCEMENT (CRITICAL CHECKLIST):
Strict Tech Stack (Static Frontend): You MUST use React, Vite, Tailwind CSS, and Shadcn UI. Do NOT build a plain HTML5 site without React, but keep it strictly frontend-only (NO BACKEND, no databases).

Lighthouse 90+ & Core Web Vitals: Ensure the code architecture supports 90+ Lighthouse scores. The Hero Image MUST have fetchpriority="high". All other images must use loading="lazy". Prevent Layout Shifts (CLS) by using aspect ratios.

Cloudflare SPA Fix & Local Assets: You MUST generate a _redirects file in the /public folder containing /* /index.html 200. All media (especially background videos) must be local in /public. No external Unsplash/Pexels links.

Typography Override: Use modern, energetic sans-serif fonts suitable for a neon painting studio (e.g., Poppins, Montserrat, or Inter) via local @fontsource packages. Do NOT use Playfair Display and do NOT use external Google Fonts  tags.

Accessibility (A11Y) & SEO: Every icon-based button (like the mobile menu "X") MUST have an aria-label. Maintain a strict semantic hierarchy (, 

, etc.) and ensure only one 

 per page. Generate static JSON-LD (LocalBusiness) and Open Graph meta tags.

Mobile UI: The mobile menu must have a glassmorphism effect, a high z-index (fixed), and auto-close when a link is clicked. Add CSS to prevent horizontal scrolling (overflow-x: hidden).

Privacy & Footer: STRICT Zero-Cookie policy. No GA4, no FB Pixel, no cookie banners. The footer MUST include the exact attribution: Projekt i realizacja: <a href="https://leszekweb.pl" title="Projektowanie stron dla małych lokalnych firm" target="_blank" style="color: inherit; text-decoration: underline;">Leszek Websites</a>.



Polityka prywatności.docx i regulamin studia.docx w załączeniu, zrób z nich podstrony. W załączeniu również logo: Logo-Viva-Kolor.webp oraz kilka grafik na stronę ale oprócz nich możesz też wygenerować swoje zdjęcia i grafiki podobne co są na tych stronach: 
https://primalpigment.com/ 
https://splatterstudiola.com/ 
- nie zapomnij o tych efektach co są na tych stronach, np. że jak strona się przesuwa w dół to w tle widać jakieś zdjęcie które zostaje sztywno w tle i dopiero po czasie znika jak się przesunie stronę jeszcze bardzie w dół to się chyba tak nazywa: "Parallax Scrolling Effect with Fixed Background Using HTML & CSS"  To logo co masz w załączeniu możesz zrobić tak że będzie był taki efekt pulsowania co 2 sekundy

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://viva-kolor-studio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e3b62712-c465-40d0-9fd7-95d4fde403fb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
