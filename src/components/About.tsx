import campusLibrary from "@/assets/campus-library.jpg";

const stats = [
  { value: "12,000+", label: "Students" },
  { value: "95%", label: "Employment Rate" },
  { value: "200+", label: "Faculty Members" },
  { value: "50+", label: "Programs" },
];

const About = () => {
  return (
    <section id="about" className="section-padding py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src={campusLibrary}
            alt="Greyston College library"
            className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 bg-gold rounded-lg p-6 shadow-lg hidden md:block">
            <p className="font-display text-3xl font-bold text-accent-foreground">75+</p>
            <p className="font-body text-sm text-accent-foreground/80">Years of Excellence</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="font-body text-gold font-semibold text-sm tracking-widest uppercase mb-3">About Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            A Legacy of Learning
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            Since 1948, Greyston College has been committed to providing transformative education that blends rigorous academics with real-world experience. Our diverse community of scholars, researchers, and innovators drives meaningful change.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-10">
            With state-of-the-art facilities, an award-winning faculty, and a vibrant campus culture, we empower every student to reach their full potential and make a positive impact on the world.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-display text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
