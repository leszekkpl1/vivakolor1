import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo-viva-kolor.webp";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <img src={logo} alt="Viva Kolor" className="h-24 w-auto mb-4" loading="lazy" />
            <p className="text-sm text-primary-foreground/70">
              Studio kreatywnego malowania w Gdańsku.<br className="md:hidden" /> Sesje klasyczne i FLUO.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Oferta</h3>
            <nav className="space-y-2 text-sm text-primary-foreground/70">
              <button onClick={() => scrollTo("#oferta")} className="block hover:text-primary-foreground transition-colors text-left">Sesje malowania</button>
              <button onClick={() => scrollTo("#urodziny")} className="block hover:text-primary-foreground transition-colors text-left">Urodziny dla dzieci</button>
              <button onClick={() => scrollTo("#grupy")} className="block hover:text-primary-foreground transition-colors text-left">Grupy zorganizowane</button>
            </nav>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Informacje</h3>
            <nav className="space-y-2 text-sm text-primary-foreground/70">
              <a href="/regulamin" className="block hover:text-primary-foreground transition-colors">Regulamin</a>
              <a href="/polityka-prywatnosci" className="block hover:text-primary-foreground transition-colors">Polityka Prywatności</a>
              <button onClick={() => scrollTo("#kontakt")} className="block hover:text-primary-foreground transition-colors text-left">Kontakt</button>
            </nav>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>ul. Partyzantów 8/112</p>
              <p>80-254 Gdańsk-Wrzeszcz</p>
              <a href="tel:+48533729279" className="block hover:text-primary-foreground transition-colors">+48 533 729 279</a>
              <a href="mailto:biuro@vivakolor.pl" className="block hover:text-primary-foreground transition-colors">biuro@vivakolor.pl</a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} VIVA Kolor Anna Rybaczek | NIP: 6040018127</p>
          <p>
            Projekt i realizacja:{" "}
            <a
              href="https://leszekweb.pl"
              title="Projektowanie stron dla małych lokalnych firm"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground/70 transition-colors"
            >
              Leszek Websites
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
