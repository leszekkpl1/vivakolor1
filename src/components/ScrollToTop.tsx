import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="md:hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-rainbow shadow-colorful flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="Przewiń na górę"
    >
      <ChevronUp size={24} className="text-primary-foreground" />
    </button>
  );
};

export default ScrollToTop;
