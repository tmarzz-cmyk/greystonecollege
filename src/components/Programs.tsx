import { BookOpen, FlaskConical, Briefcase, Palette } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Arts & Humanities",
    description: "Explore literature, history, philosophy, and the creative arts in an intellectually vibrant community.",
  },
  {
    icon: FlaskConical,
    title: "Sciences & Technology",
    description: "Cutting-edge research and hands-on learning in biology, chemistry, computer science, and engineering.",
  },
  {
    icon: Briefcase,
    title: "Business & Management",
    description: "Develop leadership and analytical skills with programs in finance, marketing, and entrepreneurship.",
  },
  {
    icon: Palette,
    title: "Design & Media",
    description: "From graphic design to digital media production, unleash your creativity with industry-leading tools.",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="section-padding py-20 md:py-28 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Programs</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Academic Excellence
        </h2>
        <p className="font-body text-muted-foreground text-lg max-w-2xl mb-14">
          Choose from over 50 undergraduate and graduate programs designed to prepare you for a meaningful career.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-card rounded-lg p-8 border hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <program.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{program.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
