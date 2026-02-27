import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl prose prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          <h1 className="text-3xl md:text-4xl font-display font-black mb-8 text-foreground">
            Polityka Prywatności
          </h1>

          <p>Niniejsza polityka prywatności i plików cookies opisuje zasady postępowania z danymi osobowymi oraz wykorzystywania plików cookies i innych technologii w ramach strony internetowej www.vivakolor.pl.</p>
          <p>Administratorem strony jest VIVA Kolor Anna Rybaczek z siedzibą w Gdańsku 80-254, ul. Partyzantów 8/112u, NIP: 6040018127.</p>
          <p>Kontakt z administratorem możliwy pod adresem e-mail vivakolor@wp.pl.</p>

          <h2>1. Definicje</h2>
          <p>Na potrzeby niniejszej polityki prywatności, przyjmuje się następujące znaczenie poniższych pojęć:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Administrator</strong> – VIVA Kolor Anna Rybaczek z siedzibą w Gdańsku 80-254, ul. Partyzantów 8/112u, NIP: 6040018127.</li>
            <li><strong>Serwis</strong> – strona internetowa dostępna pod adresem www.vivakolor.pl.</li>
            <li><strong>Użytkownik</strong> – każdy podmiot, który korzysta ze Strony.</li>
          </ul>

          <h2>2. Dane osobowe</h2>
          <p>Administratorem danych osobowych w rozumieniu przepisów o ochronie danych osobowych jest VIVA Kolor Anna Rybaczek z siedzibą w Gdańsku 80-254, ul. Partyzantów 8/112u, NIP: 6040018127.</p>
          <p>Cele, podstawy prawne oraz okres przetwarzania danych osobowych wskazane są odrębnie w stosunku do każdego celu przetwarzania danych.</p>
          <p>W związku z przetwarzaniem przez nas Twoich danych osobowych, przysługują Ci następujące uprawnienia:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>prawo do żądania dostępu do swoich danych osobowych, ich sprostowania, usunięcia („prawo do bycia zapomnianym") lub ograniczenia przetwarzania,</li>
            <li>prawo do wniesienia sprzeciwu wobec przetwarzania,</li>
            <li>prawo do przenoszenia danych,</li>
            <li>prawo do cofnięcia zgody na przetwarzanie danych osobowych w określonym celu, jeżeli uprzednio wyraziłeś taką zgodę,</li>
            <li>prawo do wniesienia skargi do organu nadzorczego w związku z przetwarzaniem przez nas danych osobowych.</li>
          </ul>
          <p>Powyższe uprawnienia możesz realizować zgodnie z zasadami opisanymi w art. 16 – 21 RODO, kontaktując się z nami pod adresem vivakolor.pl. Podanie przez Ciebie danych osobowych jest zawsze dobrowolne, ale niezbędne, by dokonać rezerwacji w serwisie, skontaktować z nami, przesłać zapytanie lub inny formularz.</p>
          <p>Gwarantujemy Ci poufność wszelkich przekazanych nam danych osobowych. Zapewniamy podjęcie wszelkich środków bezpieczeństwa i ochrony danych osobowych wymaganych przez przepisy o ochronie danych osobowych. Dane osobowe przetwarzane są wyłącznie na terytorium Unii Europejskiej.</p>
          <p>Powierzamy przetwarzanie danych osobowych następującym podmiotom:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Hostido.pl oraz Cloudflare.com – w celu przechowywania danych na serwerze,</li>
            <li>Wp.pl – w celu korzystania z usługi zewnętrznego serwera pocztowego,</li>
            <li>Biuro Rachunkowe Iwona Jemielity – w celu korzystania z usług zewnętrznego biura rachunkowego.</li>
          </ul>

          <h2>3. Rezerwacja usługi</h2>
          <p>Rezerwując wejście do VIVA Kolor Creative Painting Studio za pośrednictwem serwisu, musisz podać swoje dane osobowe niezbędne do realizacji zamówienia, tj. imię i nazwisko, adres e-mail i numer telefonu. Podstawą prawną przetwarzania Twoich danych osobowych zawartych w zamówieniu jest wykonanie umowy, którą zawierasz na podstawie regulaminu serwisu.</p>
          <p>Dane związane z zamówieniem będą przechowywane w bazie administratora przez czas funkcjonowania serwisu.</p>

          <h2>4. Faktury</h2>
          <p>Jeżeli w związku z korzystaniem z serwisu, wystawiamy lub doręczamy Ci fakturę, to w tym celu przetwarzamy Twoje dane osobowe w zakresie niezbędnym do wystawienia faktury. Podstawą prawną przetwarzania Twoich danych w tym przypadku jest wypełnienie prawnego obowiązku wystawienia faktury.</p>

          <h2>5. Kontakt e-mailowy</h2>
          <p>Kontaktując się z administratorem serwisu za pośrednictwem poczty elektronicznej, w sposób naturalny przekazujesz administratorowi swój adres e-mail jako adres nadawcy wiadomości. Twoje dane osobowe przekazywane nam w ramach kontaktu e-mailowego przetwarzane są wyłącznie w celu obsługi Twojego zapytania.</p>

          <h2>6. Pliki cookies</h2>
          <p>Strona nie wykorzystuje plików cookies do śledzenia użytkowników. Nie stosujemy narzędzi analitycznych typu Google Analytics ani Facebook Pixel.</p>

          <h2>7. Logi serwera</h2>
          <p>Korzystanie ze Strony wiąże się z przesyłaniem zapytań do serwera. Każde zapytanie skierowane do serwera zapisywane jest w logach serwera. Logi obejmują m.in. adres IP Użytkownika, datę i czas serwera, informacje o przeglądarce internetowej i systemie operacyjnym. Dane zapisane w logach serwera nie są kojarzone z konkretnymi osobami korzystającymi ze Strony.</p>

          <h2>8. Zmiany polityki prywatności</h2>
          <p>Polityka prywatności może być aktualizowana. Aktualna wersja zawsze znajduje się na niniejszej stronie internetowej. Zmiany wchodzą w życie z dniem publikacji nowej wersji. Niniejsza polityka prywatności obowiązuje od dnia 01.03.2026r.</p>

          <div className="mt-12 text-center not-prose">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-rainbow font-bold text-primary-foreground shadow-colorful hover:scale-105 transition-transform"
            >
              Powrót do strony głównej
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPage;
