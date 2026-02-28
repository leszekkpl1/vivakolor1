import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo-viva-kolor.webp";

const navLinks = [
  { href: "#hero", label: "Strona główna", color: "text-orange-700", mobileColor: "text-orange-400" },
  { href: "#o-nas", label: "O nas", color: "text-orange-400", mobileColor: "text-orange-300" },
  { href: "#oferta", label: "Oferta", color: "text-yellow-500", mobileColor: "text-yellow-300" },
  { href: "#cennik", label: "Cennik", color: "text-green-400", mobileColor: "text-green-300" },
  { href: "#opinie", label: "Opinie", color: "text-green-700", mobileColor: "text-green-500" },
  { href: "#faq", label: "FAQ", color: "text-blue-500", mobileColor: "text-blue-400" },
  { href: "#kontakt", label: "Kontakt", color: "text-purple-500", mobileColor: "text-purple-400" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (href: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname !== "/") {
              navigate("/");
            } else {
              document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="Viva Kolor - Studio Malowania Gdańsk"
            className="h-12 md:h-16 w-auto animate-pulse-logo"
          />
          <span
            className="text-gradient-rainbow bg-clip-text text-lg md:text-xl font-bold"
            style={{ fontFamily: "'Nosifer', cursive" }}
          >
            VIVA KOLOR
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Nawigacja główna">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className={`font-medium text-sm transition-all hover:opacity-70 nav-link-neon ${link.color}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+48507125652"
            className="flex items-center gap-1.5 text-sm font-medium text-primary nav-link-neon hover:text-primary/80 transition-all"
          >
            <Phone size={16} />
            <span className="hidden lg:inline">507 125 652</span>
          </a>
          <a
            href="#rezerwacja"
            onClick={(e) => { e.preventDefault(); scrollTo("#rezerwacja"); }}
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-rainbow font-semibold text-sm text-primary-foreground shadow-colorful hover:opacity-90 transition-opacity"
          >
            Zarezerwuj
          </a>
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
        <div className="fixed inset-0 top-16 z-40 md:hidden" onClick={() => setIsOpen(false)}>
          <div
            className="absolute top-0 left-0 right-0 max-h-[66vh] bg-foreground/85 backdrop-blur-2xl border-b border-border overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col items-center gap-5 py-8" aria-label="Menu mobilne">
              <span
                className="text-gradient-rainbow bg-clip-text text-2xl font-bold mb-2"
                style={{ fontFamily: "'Nosifer', cursive" }}
              >
                VIVA KOLOR
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`text-xl font-semibold transition-colors hover:opacity-70 ${link.mobileColor}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+48507125652"
                className="flex items-center gap-2 text-lg font-medium text-neon-green"
              >
                <Phone size={20} /> 507 125 652
              </a>
              <a
                href="mailto:vivakolor@wp.pl"
                className="flex items-center gap-2 text-lg font-medium text-primary-foreground/70"
              >
                <Mail size={20} /> vivakolor@wp.pl
              </a>
              <a
                href="#rezerwacja"
                onClick={(e) => { e.preventDefault(); scrollTo("#rezerwacja"); }}
                className="mt-2 inline-flex items-center px-8 py-3 rounded-full bg-gradient-rainbow font-bold text-primary-foreground shadow-colorful"
              >
                Zarezerwuj sesję
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
