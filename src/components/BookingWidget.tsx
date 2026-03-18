import { useEffect, useRef } from "react";

const BookingWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;
    scriptLoadedRef.current = true;

    // Set bookero_config on window
    (window as any).bookero_config = {
      id: 'WBUupiC2KLPG',
      container: 'bookero',
      type: 'standard',
      position: '',
      plugin_css: true,
      lang: 'pl'
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.bookero.pl/plugin/v2/js/bookero-compiled.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      try { document.body.removeChild(script); } catch {}
    };
  }, []);

  return (
    <section id="rezerwacja" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-black text-gradient-rainbow mb-4">
            Viva Kolor - Studio kreatywnego malowania w Gdańsku
          </h2>
          <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '5px', color: '#e91e63' }}>
            &gt; Sesje klasyczne i FLUO &lt;
          </p>
          <p style={{ fontSize: '18px', marginBottom: '15px', color: '#000000' }}>
            <strong>Kliknij poniżej w wybraną sesję, aby zarezerwować termin.</strong>
          </p>
          <p style={{ fontSize: '15px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.5' }}>
            Wszystkie opcje dodatkowe oraz imprezy grupowe (urodziny, sesje szkolne) i ich koszt opisane zostały na naszej stronie vivakolor.pl
          </p>
        </div>

        <style>
          {`
            /* Główne zmienne kolorystyczne (Baza: Neonowy Róż) */
            #bookero-plugin {
              --bookero-plugin-color-link: #ff00ea;
              --bookero-plugin-color-primary: #ff00ea;
              --bookero-plugin-color-primary-dark: #cc00bb; 
              --bookero-plugin-color-primary-darker: #99008c; 
              --bookero-plugin-color-primary-light: #ff33ee; 
              --bookero-plugin-color-primary-lighter: #ff66f2; 
              --bookero-plugin-color-primary-lightest: rgba(255, 0, 234, 0.1);
            }

            /* --- ORYGINALNY KOD SUPPORTU BOOKERO DO OBSŁUGI ZMIENNYCH --- */
            #bookero-plugin .bookero-plugin-form .field .multiselect__option--highlight, #bookero-plugin .bookero-plugin-error-btn, #bookero-plugin .bookero-plugin-header, #bookero-plugin .switcher.is-active, #bookero-plugin .add-to-cart-section .add-button, #bookero-plugin .hours-section .hours-wrapper .hours-list-item.is-in-cart.is-selected, #bookero-plugin .hours-section .hours-wrapper .hours-list-item.is-selected, #bookero-plugin .result-popup-content-payment-link a, #bookero-plugin .payment-section.payment-methods-item.is-active, #bookero-plugin .calendar-days-list-cell.is-in-cart.is-selected, #bookero-plugin .calendar-days-list-cell.is-valid.is-selected, #bookero-plugin .week-days-hour.is-in-cart.is-selected, #bookero-plugin .week-days-hour.is-selected, #bookero-plugin .dates-section .vdp-datepicker__calendar .cell.selected, #bookero-plugin .submit-section .submit-button, body #bookero-plugin[data-mode="sticky"] .bookero-sticky-plugin-toggle { background: var(--bookero-plugin-color-primary); }
            #bookero-plugin .calendar-days-list-cell.is-sub-selected{ background: var(--bookero-plugin-color-primary-light)!important; border-color: var(--bookero-plugin-color-primary-light)!important; color: #fff!important; }
            #bookero-plugin .calendar-days-list-cell.is-sub-selected.is-valid{ color: #fff!important; }
            #bookero-plugin .calendar-days-list-cell.is-sub-selected:before{ background: var(--bookero-plugin-color-primary-light); }
            #bookero-plugin .calendar-days-list-cell.is-selected+.is-sub-selected:before { background: linear-gradient(to right, var(--bookero-plugin-color-primary), var(--bookero-plugin-color-primary-light)); }
            #bookero-plugin .products-list-add-icon:before, #bookero-plugin .products-list-add-icon:after, #bookero-plugin .inquiries-list-add-icon:before, #bookero-plugin .inquiries-list-add-icon:after{ background: var(--bookero-plugin-color-link); transition: all .3s ease-out; }
            #bookero-plugin .bookero-plugin-form-message[data-type="info"], #bookero-plugin .people-section .people-number-wrapper .people-number-plus:hover, #bookero-plugin .people-section .people-number-wrapper .people-number-minus:hover, #bookero-plugin .hours-section .hours-wrapper .hours-list-item:not(.is-selected) { color: var(--bookero-plugin-color-primary); }
            #bookero-plugin .bookero-plugin-form-wrapper a { color: var(--bookero-plugin-color-link); }
            #bookero-plugin .bookero-plugin-form-wrapper a:hover { color: var(--bookero-plugin-color-primary-darker); }
            #bookero-plugin .bookero-plugin-form .field input:focus, #bookero-plugin .bookero-plugin-form .field textarea:focus, #bookero-plugin .bookero-plugin-form .field select:focus, #bookero-plugin .calendar-days-list-cell.is-valid.is-selected { border-color: var(--bookero-plugin-color-primary); }
            #bookero-plugin .bookero-plugin-error-btn:hover, #bookero-plugin .submit-section .submit-button:hover { background: var(--bookero-plugin-color-primary-dark); }
            #bookero-plugin .workers-section .worker-info, #bookero-plugin .hours-section .hours-wrapper .hours-list-item, #bookero-plugin .calendar-days-list-cell.is-valid { background: var(--bookero-plugin-color-primary-lightest); border-color: var(--bookero-plugin-color-primary-lightest); }

            /* --- AUTORSKI TĘCZOWY TUNING ZDZISKA DLA GŁÓWNYCH PRZYCISKÓW --- */
            #bookero-plugin .submit-section .submit-button {
                background: linear-gradient(90deg, #ff00ea, #ffaa00, #00e5ff) !important;
                border: none !important;
                color: white !important;
                text-transform: uppercase !important;
                font-weight: 900 !important;
                letter-spacing: 1px !important;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
                transition: transform 0.2s ease, filter 0.2s ease !important;
            }

            #bookero-plugin .submit-section .submit-button:hover {
                background: linear-gradient(90deg, #00e5ff, #ffaa00, #ff00ea) !important;
                transform: scale(1.02) !important;
                filter: brightness(1.1) !important;
            }
          `}
        </style>

        <div id="bookero" ref={containerRef}></div>
      </div>
    </section>
  );
};

export default BookingWidget;
