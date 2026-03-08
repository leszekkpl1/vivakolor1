import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl prose prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          <h1 className="text-3xl md:text-4xl font-display font-black mb-8 text-foreground">
            Regulamin Studia
          </h1>

          <p className="text-sm text-muted-foreground mb-8">
            REGULAMIN STUDIA KREATYWNEGO MALOWANIA — VIVA Kolor Anna Rybaczek
          </p>

          <h2>§1 Dane przedsiębiorcy</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Studio Kreatywnego Malowania działa pod firmą: VIVA Kolor Anna Rybaczek, ul. Partyzantów 8/112, 80-254 Gdańsk, NIP: 6040018127, REGON: 221863276 (dalej zwaną jako „studio", „organizator" bądź „VIVA Kolor") a odbiorcą usługi, zwanym dalej „uczestnikiem".</li>
            <li>Studio prowadzi działalność polegającą wyłącznie na odpłatnym, czasowym udostępnianiu przestrzeni do samodzielnej aktywności twórczej.</li>
          </ol>

          <h2>§2 Charakter prawny usługi</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Usługa świadczona przez Studio polega wyłącznie na:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>czasowym udostępnieniu stanowiska do malowania,</li>
                <li>zapewnieniu dostępu do określonej przestrzeni,</li>
                <li>zapewnieniu organizacyjnego nadzoru porządkowego.</li>
              </ul>
            </li>
            <li>Studio:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>nie prowadzi warsztatów, kursów ani zajęć edukacyjnych,</li>
                <li>nie świadczy usług szkoleniowych ani pedagogicznych,</li>
                <li>nie zapewnia indywidualnej opieki artystycznej ani wychowawczej,</li>
                <li>nie gwarantuje osiągnięcia określonego efektu artystycznego.</li>
              </ul>
            </li>
            <li>Obecność osoby określanej jako instruktor ma charakter wyłącznie organizacyjny i porządkowy oraz nie stanowi świadczenia usług edukacyjnych.</li>
            <li>Umowa zawierana poprzez rezerwację ma charakter umowy o świadczenie usług w rozumieniu przepisów Kodeks cywilny.</li>
            <li>Studio VIVA Kolor świadczy usługi zarówno dla klientów indywidualnych jak i dla zorganizowanych grup jednak na odmiennych zasadach.</li>
            <li>Możliwe jest świadczenie usług w dwóch rodzajach sesji:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>sesja zwykła podczas której uczestnicy malują farbami plakatowymi;</li>
                <li>sesja fluo podczas której uczestnicy malują farbami plakatowymi świecącymi w świetle ultrafioletowym.</li>
              </ul>
            </li>
            <li>Korzystać z usług, a także przebywać na salach do malowania, mogą wyłącznie osoby po ukończeniu 3 roku życia.</li>
            <li>Osoby poniżej 12 roku życia mogą korzystać z usług wyłącznie będąc w towarzystwie osoby pełnoletniej (zwanej dalej opiekunem) która musi przebywać z tą osobą na sali do malowania przez cały czas trwania usługi.</li>
            <li>Jedna osoba pełnoletnia może mieć pod opieką maksymalnie 5 dzieci na sali.</li>
            <li>Przy jednym stanowisku mogą przebywać maksymalnie 2 osoby wliczając opiekuna.</li>
            <li>W przypadku pozostawienia obrazu u organizatora, uczestnik zrzeka się automatycznie wszystkich praw własnościowych i autorskich do obrazu.</li>
          </ol>

          <h2>§3 Zasady korzystania ze Studia</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Malowanie dozwolone jest wyłącznie:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>przy wyznaczonych stanowiskach,</li>
                <li>w strefach wskazanych przez Studio.</li>
              </ul>
            </li>
            <li>Zabrania się malowania oraz używania materiałów poza wyznaczoną przestrzenią, w szczególności:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>na klatce schodowej,</li>
                <li>w korytarzach,</li>
                <li>w łazience,</li>
                <li>w częściach wspólnych budynku.</li>
              </ul>
            </li>
            <li>Uczestnik zobowiązany jest do:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>przestrzegania zasad bezpieczeństwa,</li>
                <li>stosowania się do poleceń organizacyjnych,</li>
                <li>poszanowania mienia Studia oraz osób trzecich.</li>
              </ul>
            </li>
            <li>Studio może odmówić świadczenia usługi osobie:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>naruszającej Regulamin,</li>
                <li>znajdującej się pod wpływem alkoholu lub środków odurzających,</li>
                <li>stwarzającej zagrożenie dla innych.</li>
              </ul>
            </li>
          </ol>

          <h2>§4 Odpowiedzialność</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Uczestnik ponosi pełną odpowiedzialność cywilną za:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>swoje działania i zaniechania,</li>
                <li>szkody wyrządzone w mieniu Studia,</li>
                <li>szkody wyrządzone osobom trzecim.</li>
              </ul>
            </li>
            <li>W przypadku osób niepełnoletnich pełną odpowiedzialność ponoszą ich rodzice lub opiekunowie prawni.</li>
            <li>Studio nie ponosi odpowiedzialności za:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>zabrudzenie odzieży,</li>
                <li>uszkodzenie rzeczy osobistych,</li>
                <li>reakcje alergiczne wynikające z indywidualnej wrażliwości,</li>
                <li>skutki nieprawidłowego korzystania z materiałów,</li>
                <li>rezultat artystyczny wykonanych prac.</li>
              </ul>
            </li>
            <li>Odpowiedzialność Studia ograniczona jest do wysokości rzeczywiście poniesionej opłaty za daną sesję, z wyłączeniem szkód wyrządzonych umyślnie.</li>
            <li>W przypadku rażącego naruszenia zasad bezpieczeństwa Studio ma prawo natychmiast zakończyć sesję bez obowiązku zwrotu opłaty.</li>
          </ol>

          <h2>§5 Ryzyko materiałów</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Korzystanie z farb i materiałów odbywa się dobrowolnie.</li>
            <li>Osoby z alergiami lub nadwrażliwością korzystają z materiałów na własne ryzyko.</li>
            <li>Studio nie ponosi odpowiedzialności za skutki niewłaściwego użycia materiałów.</li>
          </ol>

          <h2>§6 Czas trwania sesji</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Sesja odbywa się w zarezerwowanym przedziale czasowym. Każda sesja trwa 60 minut i nie ma możliwości przedłużenia jej trwania.</li>
            <li>Spóźnienie nie powoduje wydłużenia sesji.</li>
            <li>Przekroczenie czasu może skutkować naliczeniem dodatkowej opłaty.</li>
            <li>Po zakończeniu sesji uczestnik zobowiązany jest do niezwłocznego opuszczenia przestrzeni.</li>
          </ol>

          <h2>§7 Bezpieczeństwo</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Uczestnicy zobowiązani są do ostrożnego korzystania z:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>farb,</li>
                <li>narzędzi malarskich,</li>
                <li>urządzeń dostępnych w Studiu.</li>
              </ul>
            </li>
            <li>Zabrania się zachowań mogących powodować zagrożenie życia, zdrowia lub mienia.</li>
            <li>W przypadku powstania szkody lub zagrożenia uczestnik ma obowiązek niezwłocznie poinformować opiekuna.</li>
            <li>Studio nie sprawuje stałego nadzoru indywidualnego nad uczestnikami.</li>
          </ol>

          <h2>§8 Rezerwacje i płatności</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Rezerwacja wymaga potwierdzenia przez Studio.</li>
            <li>Świadczenie usług jest uprzednio biletowane.</li>
            <li>Opłata należna jest za zarezerwowany czas, niezależnie od faktycznego wykorzystania.</li>
            <li>Rodzaje biletów to:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>bilet ulgowy,</li>
                <li>bilet ulgowy + dodatkowa osoba / opiekun,</li>
                <li>bilet normalny,</li>
                <li>bilet normalny + dodatkowa osoba.</li>
              </ul>
            </li>
            <li>Bilet ulgowy przysługuje osobom do 18 roku życia za okazaniem ważnej legitymacji szkolnej, studentom, seniorom oraz osobom z niepełnosprawnością – po okazaniu dokumentu potwierdzającego uprawnienia.</li>
            <li>Forma biletu zawierająca zwrot „+ dodatkowa osoba" uprawnia do korzystania z przestrzeni przez 2 osoby przy jednym stanowisku.</li>
            <li>Rezerwację można przełożyć telefonicznie, poprzez e-mail bądź osobiście w lokalu.</li>
            <li>Rezerwację można odwołać samodzielnie telefonicznie, poprzez e-mail bądź osobiście w lokalu.</li>
            <li>Nieobecność uczestnika nie stanowi podstawy do zwrotu opłaty, chyba że Studio wyrazi zgodę na zmianę terminu.</li>
            <li>W przypadku zawarcia umowy na odległość zastosowanie mają przepisy Ustawa o prawach konsumenta, z zastrzeżeniem, że rozpoczęcie świadczenia usługi przed upływem terminu do odstąpienia skutkuje utratą prawa odstąpienia za wyraźną zgodą konsumenta.</li>
            <li>Płatności za rezerwację można dokonać w lokalu w dniu rezerwacji: gotówką, kartą płatniczą, przelewem (tylko w przypadku firm, przedszkoli lub szkół). Numer konta: 64 1140 2004 0000 3202 8649 0359</li>
            <li>Możliwe jest wystawienie faktury za płatność za usługę po uprzednim poinformowaniu o takiej chęci obsługi Studia w dniu rezerwacji.</li>
            <li>Rezerwacja usługi dla zorganizowanych grup: Organizator umożliwia skorzystanie z usług zorganizowanym grupom na zasadach opisanych w poniższych ustępach. W kwestiach nieuregulowanych w tych ustępach i rozdziałach zastosowanie mają rozdziały dedykowane dla klientów indywidualnych.</li>
            <li>Rezerwacji usługi dla zorganizowanych grup można dokonać telefonicznie, mailowo lub osobiście w lokalu.</li>
            <li>Impreza urodzinowa w VIVA Kolor trwa 2 godziny i składa się z dwóch części: Malowania w wybranej przez uczestnika rezerwującego imprezę urodzinową sesji i czasem na poczęstunek dla uczestników urodzin w sali urodzinowej. Jeśli choć jeden uczestnik imprezy urodzinowej nie ukończył 12 roku życia w lokalu musi przebywać z nim pełnoletnia osoba. Minimalna liczba uczestników imprezy urodzinowej to 10 osób. Na czas imprezy urodzinowej uczestnikowi udostępniana jest sala urodzinowa. Całkowity koszt imprezy urodzinowej zależy od ilości uczestników jacy faktycznie byli obecni na imprezie urodzinowej i uczestniczyli w malowaniu podczas imprezy urodzinowej. Jednakże gdyby w imprezie urodzinowej ostatecznie uczestniczyło mniej niż 10 osób, to koszt imprezy urodzinowej będzie rozliczony jak gdyby na imprezie urodzinowej było obecne 10 osób. Po dokonaniu rezerwacji imprezy urodzinowej uczestnik otrzyma na podany przez siebie adres email wiadomość potwierdzającą dokonanie rezerwacji. Przy rezerwacji imprezy urodzinowej, uczestnik jest zobowiązany do wpłaty zadatku w wysokości 300 PLN. Uczestnik ma 3 dni na dokonanie wpłaty zadatku i przesłanie mailowo potwierdzenia jej wykonania, od momentu złożenia rezerwacji na imprezę urodzinową. W przypadku niedokonania czynności ze zdania poprzedzającego Studio anuluje rezerwację urodzin. Imprezę urodzinową można skutecznie odwołać lub przełożyć najpóźniej na 72 godziny przed godziną rozpoczęcia imprezy urodzinowej. W przypadku bezskutecznego odwołania imprezy urodzinowej, wpłacony zadatek nie podlega zwrotowi.</li>
            <li>Wycieczka szkolna w Studio trwa 60 minut i składa się z malowania w wybranej sesji przez uczestnika rezerwującego wycieczkę szkolną. Organizacja wycieczki szkolnej jest możliwa wyłącznie dla osób powyżej 3 roku życia. Całkowity koszt wycieczki szkolnej zależy od ilości uczestników jacy faktycznie uczestniczyli w malowaniu podczas wycieczki szkolnej. Jednakże gdyby w wycieczce szkolnej uczestniczyło mniej niż 10 osób, to koszt wycieczki szkolnej będzie rozliczony jak gdyby na wycieczce szkolnej było obecne 10 osób.</li>
          </ol>

          <h2>§9 Siła wyższa</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Studio może odwołać sesję z przyczyn niezależnych, w szczególności:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>awarii technicznych,</li>
                <li>decyzji administracyjnych,</li>
                <li>zdarzeń losowych.</li>
              </ul>
            </li>
            <li>W takim przypadku uczestnikowi przysługuje:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>zmiana terminu, albo</li>
                <li>zwrot wniesionej opłaty.</li>
              </ul>
            </li>
          </ol>

          <h2>§10 Postanowienia końcowe</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Rezerwacja sesji oznacza akceptację Regulaminu.</li>
            <li>W sprawach nieuregulowanych zastosowanie mają przepisy Kodeks cywilny.</li>
            <li>Studio zastrzega sobie prawo do zmiany Regulaminu z ważnych przyczyn prawnych lub organizacyjnych.</li>
            <li>Aktualna wersja Regulaminu publikowana jest w siedzibie Studia oraz na naszej stronie internetowej: vivakolor.pl i w systemie rezerwacyjnym.</li>
          </ol>

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

export default TermsPage;
