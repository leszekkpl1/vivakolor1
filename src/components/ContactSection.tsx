import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-10 md:py-14 bg-background scroll-mt-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-black text-center mb-12 text-foreground">
          Kontakt
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-lg text-foreground mb-1">
                VIVA KOLOR Studio Malowania
              </h3>
            </div>
            <div className="flex gap-3 items-start">
              <MapPin size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="font-medium text-foreground">ul. Partyzantów 8/112</p>
                <p className="text-muted-foreground">80-254 Gdańsk-Wrzeszcz</p>
                <p className="text-sm text-muted-foreground">Quattro Towers (przy CH Manhattan)</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Clock size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="text-foreground">Pon-Pt: 15:00–20:00</p>
                <p className="text-foreground">Czwartek - zamknięte</p>
                <p className="text-foreground">Sob-Ndz: 10:00–21:00</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <Phone size={20} className="text-primary shrink-0" />
              <a href="tel:+48533729279" className="text-foreground font-medium hover:text-primary transition-colors">
                +48 533 729 279
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <Mail size={20} className="text-primary shrink-0" />
              <a href="mailto:biuro@vivakolor.pl" className="text-foreground font-medium hover:text-primary transition-colors">
                biuro@vivakolor.pl
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <MessageCircle size={20} className="text-green-500 shrink-0" />
              <a
                href="https://wa.me/48533729279"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white font-medium text-sm hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
            </div>

            {/* Social media */}
            <div className="flex gap-4 items-center pt-2">
              <a href="https://www.facebook.com/viva.kolor" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/viva.kolor" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@viva.kolor" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2324.5!2d18.6056404!3d54.377478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd749c7b1b4c7d%3A0x5c5e7e8a7f0d3b1e!2sPartyzant%C3%B3w%208%2C%2080-254%20Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa lokalizacji Viva Kolor w Gdańsku-Wrzeszczu"
              ></iframe>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Studio VIVA Kolor znajduje się w centrum Wrzeszcza, na osiedlu Quattro Towers, tuż obok Galerii Manhattan. Po dotarciu do bram osiedla na domofonie wybieramy nr 1112. Po wejściu na teren kierujemy się prosto, aż do fontanny w kształcie kuli. Następnie skręcamy w lewo i na domofonie znowu wybieramy 1112. Studio VIVA Kolor znajduje się na pierwszym piętrze budynku usługowego, a nie mieszkalnego. Szukajcie naszych "dzikich" znaków na oknach i drzwiach. One zaprowadzą Was wprost do celu.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-12 space-y-4">
        <img
          src="/images/wejscie-do-studia-malowania-viva-kolor-gdansk-wrzeszcz.webp"
          alt="Główne wejście do kreatywnego studia malowania Viva Kolor w Gdańsku Wrzeszczu (Quattro Towers), wskazówki dojazdu w Trójmieście"
          title="Wejście do studia malowania - Gdańsk Wrzeszcz"
          loading="lazy"
          className="w-full h-auto object-cover"
        />
        <img
          src="/images/dokladne-wejscie-studio-malowania-viva-kolor-gdansk-wrzeszcz.webp"
          alt="Dokładna droga i drugie wejście do kreatywnego studia malowania Viva Kolor w Gdańsku Wrzeszczu, instrukcja dojścia na pierwsze piętro"
          title="Droga do studia Viva Kolor - Gdańsk Wrzeszcz"
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default ContactSection;
