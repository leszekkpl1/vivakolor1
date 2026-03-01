import { MapPin, Clock, Phone, Mail } from "lucide-react";

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
                VIVA Kolor Creative Painting Studio
              </h3>
            </div>
            <div className="flex gap-3 items-start">
              <MapPin size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="font-medium text-foreground">ul. Partyzantów 8/112u</p>
                <p className="text-muted-foreground">80-254 Gdańsk-Wrzeszcz</p>
                <p className="text-sm text-muted-foreground">Quattro Towers (przy CH Manhattan)</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Clock size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="text-foreground">Pon-Czw: 12:00–20:00</p>
                <p className="text-foreground">Pt-Ndz: 10:00–21:00</p>
                <p className="text-sm text-muted-foreground">Grupy zorganizowane: Pon-Pt 09:00–12:00</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <Phone size={20} className="text-primary shrink-0" />
              <a href="tel:+48507125652" className="text-foreground font-medium hover:text-primary transition-colors">
                +48 507 125 652
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <Mail size={20} className="text-primary shrink-0" />
              <a href="mailto:vivakolor@wp.pl" className="text-foreground font-medium hover:text-primary transition-colors">
                vivakolor@wp.pl
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <iframe
              src="https://maps.google.com/maps?q=54.377478,18.6056404&z=17&output=embed"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa lokalizacji Viva Kolor w Gdańsku-Wrzeszczu"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
