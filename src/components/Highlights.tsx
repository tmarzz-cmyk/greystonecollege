const highlights = [
  { title: "Academics", desc: "Structured learning and high expectations that support strong results and disciplined study habits." },
  { title: "STEM Focus", desc: "ICT and science-forward learning that builds problem-solving, creativity, and real-world capability." },
  { title: "Boarding & Growth Vision", desc: "Expanding facilities to deliver a premium experience — labs, ICT, sports, canteen, and boarding." },
];

const stats = [
  { value: "—%", label: "Graduation rate (placeholder)" },
  { value: "—:—", label: "Student–faculty ratio (placeholder)" },
  { value: "—%", label: "Students receiving support (placeholder)" },
];

const Highlights = () => {
  return (
    <section className="container-site py-8" aria-label="Highlights">
      <div className="section-heading">
        <div>
          <h2 className="font-display text-2xl md:text-[2rem] text-navy m-0">A focused pathway to excellence</h2>
          <p className="text-muted-foreground mt-1 max-w-2xl">
            Academic strength, STEM confidence, leadership development — and a campus vision built for the future.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        {highlights.map((h) => (
          <div key={h.title} className="site-card p-5">
            <h3 className="font-display text-lg text-navy mb-1">{h.title}</h3>
            <p className="text-muted-foreground leading-relaxed m-0">{h.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {stats.map((s) => (
          <div key={s.label} className="site-card p-5">
            <b className="text-2xl text-navy">{s.value}</b>
            <small className="block text-muted-foreground mt-1">{s.label}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
