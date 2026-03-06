import campusHero from "@/assets/campus-hero.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={campusHero}
          alt="Greyston College campus aerial view"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy/70 to-navy-deep/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding py-32 md:py-40 max-w-3xl">
        <p className="font-body text-gold font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
          Est. 1948 — Excellence in Education
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Shape Your <span className="italic text-gold-light">Future</span> at Greyston
        </h1>
        <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          A world-class education that empowers you to think critically, lead boldly, and make a lasting impact on the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="gold" size="lg" className="text-base px-8">
            Explore Programs
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8">
            Book a Campus Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
