type HeroVideoProps = {
  className?: string;
};

export default function HeroVideo({ className = "" }: HeroVideoProps) {
  return (
    <video
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  );
}
