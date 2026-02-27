import { Link } from "react-router-dom";
import logo from "@/assets/logo-viva-kolor.webp";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <img src={logo} alt="Viva Kolor" className="h-16 w-auto mb-4" loading="lazy" />
            <p className="text-sm text-primary-foreground/70">
              Studio kreatywnego malowania w Gdańsku. Sesje klasyczne i FLUO.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Oferta</h3>
            <nav className="space-y-2 text-sm text-primary-foreground/70">
              <Link to="/#oferta" className="block hover:text-primary-foreground transition-colors">Sesje malowania</Link>
              <Link to="/urodziny" className="block hover:text-primary-foreground transition-colors">Urodziny dla dzieci</Link>
              <Link to="/grupy" className="block hover:text-primary-foreground transition-colors">Grupy zorganizowane</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Informacje</h3>
            <nav className="space-y-2 text-sm text-primary-foreground/70">
              <Link to="/regulamin" className="block hover:text-primary-foreground transition-colors">Regulamin</Link>
              <Link to="/polityka-prywatnosci" className="block hover:text-primary-foreground transition-colors">Polityka Prywatności</Link>
              <Link to="/kontakt" className="block hover:text-primary-foreground transition-colors">Kontakt</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>ul. Partyzantów 8/112u</p>
              <p>80-254 Gdańsk-Wrzeszcz</p>
              <a href="tel:+48507125652" className="block hover:text-primary-foreground transition-colors">+48 507 125 652</a>
              <a href="mailto:vivakolor@wp.pl" className="block hover:text-primary-foreground transition-colors">vivakolor@wp.pl</a>
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
