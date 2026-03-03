import Cal from "@calcom/embed-react";

const BookingWidget = () => {
  return (
    <section id="rezerwacja" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-black text-center mb-4 text-foreground">
          Zarezerwuj sesję
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Wybierz termin, który Ci odpowiada i zarezerwuj swoją sesję malowania w Gdańsku.
        </p>
        <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
          <Cal
            calLink="vivakolor"
            config={{ layout: "month_view" }}
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          />
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;
