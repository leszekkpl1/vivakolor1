interface ParallaxDividerProps {
  image: string;
  alt: string;
  height?: string;
  overlay?: "dark" | "neon";
}

const ParallaxDivider = ({ image, alt, height = "h-64 md:h-96", overlay = "dark" }: ParallaxDividerProps) => {
  return (
    <div
      className={`relative ${height} parallax-section`}
      style={{ backgroundImage: `url(${image})` }}
      role="img"
      aria-label={alt}
    >
      <div
        className={`absolute inset-0 ${
          overlay === "neon"
            ? "bg-fluo-bg/70"
            : "bg-foreground/40"
        }`}
      />
    </div>
  );
};

export default ParallaxDivider;
