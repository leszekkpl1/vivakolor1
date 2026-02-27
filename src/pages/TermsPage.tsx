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
            <li>Studio Kreatywnego Malowania działa pod firmą: VIVA Kolor Anna Rybaczek, ul. Partyzantów 8/112, 80-254 Gdańsk, NIP: 6040018127, REGON: 221863276</li>
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
            <li>Obecność osoby określanej jako opiekun/instruktor ma charakter wyłącznie organizacyjny i porządkowy oraz nie stanowi świadczenia usług edukacyjnych.</li>
            <li>Umowa zawierana poprzez rezerwację ma charakter umowy o świadczenie usług w rozumieniu przepisów Kodeks cywilny.</li>
          </ol>

          <h2>§3 Zasady korzystania ze Studia</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Malowanie dozwolone jest wyłącznie przy wyznaczonych stanowiskach, w strefach wskazanych przez Studio.</li>
            <li>Zabrania się malowania oraz używania materiałów poza wyznaczoną przestrzenią, w szczególności: na klatce schodowej, w korytarzach, w łazience, w częściach wspólnych budynku.</li>
            <li>Uczestnik zobowiązany jest do: przestrzegania zasad bezpieczeństwa, stosowania się do poleceń organizacyjnych, poszanowania mienia Studia oraz osób trzecich.</li>
            <li>Studio może odmówić świadczenia usługi osobie: naruszającej Regulamin, znajdującej się pod wpływem alkoholu lub środków odurzających, stwarzającej zagrożenie dla innych.</li>
          </ol>

          <h2>§4 Odpowiedzialność</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Uczestnik ponosi pełną odpowiedzialność cywilną za: swoje działania i zaniechania, szkody wyrządzone w mieniu Studia, szkody wyrządzone osobom trzecim.</li>
            <li>W przypadku osób niepełnoletnich pełną odpowiedzialność ponoszą ich rodzice lub opiekunowie prawni.</li>
            <li>Studio nie ponosi odpowiedzialności za: zabrudzenie odzieży, uszkodzenie rzeczy osobistych, reakcje alergiczne wynikające z indywidualnej wrażliwości, skutki nieprawidłowego korzystania z materiałów, rezultat artystyczny wykonanych prac.</li>
            <li>Odpowiedzialność Studia ograniczona jest do wysokości rzeczywiście poniesionej opłaty za daną sesję, z wyłączeniem szkód wyrządzonych umyślnie.</li>
            <li>W przypadku rażącego naruszenia zasad bezpieczeństwa Studio ma prawo natychmiast zakończyć sesję bez obowiązku zwrotu opłaty.</li>
          </ol>

          <h2>§5 Ryzyko materiałów</h2>
          <p>Korzystanie z farb i materiałów odbywa się dobrowolnie. Osoby z alergiami lub nadwrażliwością korzystają z materiałów na własne ryzyko. Studio nie ponosi odpowiedzialności za skutki niewłaściwego użycia materiałów.</p>

          <h2>§6 Czas trwania sesji</h2>
          <p>Sesja odbywa się w zarezerwowanym przedziale czasowym. Spóźnienie nie powoduje wydłużenia sesji. Przekroczenie czasu może skutkować naliczeniem dodatkowej opłaty. Po zakończeniu sesji uczestnik zobowiązany jest do niezwłocznego opuszczenia przestrzeni.</p>

          <h2>§6 Bezpieczeństwo</h2>
          <p>Uczestnicy zobowiązani są do ostrożnego korzystania z farb, narzędzi malarskich i urządzeń dostępnych w Studiu. Zabrania się zachowań mogących powodować zagrożenie życia, zdrowia lub mienia. W przypadku powstania szkody lub zagrożenia uczestnik ma obowiązek niezwłocznie poinformować opiekuna. Studio nie sprawuje stałego nadzoru indywidualnego nad uczestnikami.</p>

          <h2>§7 Rezerwacje i płatności</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Rezerwacja wymaga potwierdzenia przez Studio.</li>
            <li>Opłata należna jest za zarezerwowany czas, niezależnie od faktycznego wykorzystania.</li>
            <li>Nieobecność uczestnika nie stanowi podstawy do zwrotu opłaty, chyba że Studio wyrazi zgodę na zmianę terminu.</li>
            <li>W przypadku zawarcia umowy na odległość zastosowanie mają przepisy Ustawy o prawach konsumenta.</li>
          </ol>

          <h2>§8 Siła wyższa</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Studio może odwołać sesję z przyczyn niezależnych, w szczególności: awarii technicznych, decyzji administracyjnych, zdarzeń losowych.</li>
            <li>W takim przypadku uczestnikowi przysługuje: zmiana terminu, albo zwrot wniesionej opłaty.</li>
          </ol>

          <h2>§9 Postanowienia końcowe</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Rezerwacja sesji oznacza akceptację Regulaminu.</li>
            <li>W sprawach nieuregulowanych zastosowanie mają przepisy Kodeks cywilny.</li>
            <li>Studio zastrzega sobie prawo do zmiany Regulaminu z ważnych przyczyn prawnych lub organizacyjnych.</li>
            <li>Aktualna wersja Regulaminu publikowana jest w siedzibie Studia oraz w systemie rezerwacyjnym.</li>
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
