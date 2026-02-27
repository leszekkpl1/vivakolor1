import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-viva-kolor.webp";

const navLinks = [
  { to: "/", label: "Strona główna" },
  { to: "/urodziny", label: "Urodziny" },
  { to: "/grupy", label: "Grupy" },
  { to: "/kontakt", label: "Kontakt" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Viva Kolor - Studio Malowania Gdańsk"
            className="h-12 md:h-16 w-auto animate-pulse-logo"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Nawigacja główna">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-medium text-sm transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+48507125652"
            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Phone size={16} />
            <span className="hidden lg:inline">507 125 652</span>
          </a>
          <Link
            to="/#rezerwacja"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-rainbow font-semibold text-sm text-primary-foreground shadow-colorful hover:opacity-90 transition-opacity"
          >
            Zarezerwuj
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background/90 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col items-center gap-6 pt-12" aria-label="Menu mobilne">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-semibold transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+48507125652"
              className="flex items-center gap-2 text-lg font-medium text-primary"
            >
              <Phone size={20} /> 507 125 652
            </a>
            <a
              href="mailto:vivakolor@wp.pl"
              className="flex items-center gap-2 text-lg font-medium text-muted-foreground"
            >
              <Mail size={20} /> vivakolor@wp.pl
            </a>
            <Link
              to="/#rezerwacja"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex items-center px-8 py-3 rounded-full bg-gradient-rainbow font-bold text-primary-foreground shadow-colorful"
            >
              Zarezerwuj sesję
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
