const subjects = [
  "English Language", "Mathematics", "Heritage Studies", "Geography", "History",
  "Biology", "Chemistry", "Physics", "Computer Studies", "ICT",
];

const Academics = () => {
  return (
    <section id="academics" className="soft-bg py-20 md:py-24">
      <div className="container-site">
        <p className="text-xs tracking-[0.3em] uppercase text-center mb-3 font-medium" style={{ color: "hsl(var(--sand))" }}>Curriculum</p>
        <h2 className="section-title">Academic Programme</h2>
        <div className="premium-divider" />
        <p className="section-intro">
          Greystone College offers a balanced curriculum with a strong emphasis on
          academic excellence, STEM learning, and character formation.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {subjects.map((s) => (
            <div key={s} className="subject-chip">{s}</div>
          ))}
        </div>

        <div className="h-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="site-card p-7">
            <h3 className="font-bold text-lg mb-4" style={{ color: "hsl(var(--turquoise-dark))" }}>House System</h3>
            <div className="mb-4">
              {["Hunhu", "Uchenjeri", "Ushingi", "Kubudirira"].map((h) => (
                <span key={h} className="house-tag">{h}</span>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The house system promotes teamwork, school spirit, leadership,
              healthy competition, and a strong sense of belonging.
            </p>
          </div>

          <div className="site-card p-7">
            <h3 className="font-bold text-lg mb-4" style={{ color: "hsl(var(--turquoise-dark))" }}>Educational Focus</h3>
            <p className="text-muted-foreground leading-relaxed">
              Greystone College is committed to strong learning in sciences, technology,
              heritage, leadership, discipline, and real-world preparation through
              practical knowledge and responsible citizenship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
