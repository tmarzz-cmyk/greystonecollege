import studentsIct from "@/assets/students-ict.jpg";

const subjects = [
  "English Language", "Mathematics", "Heritage Studies", "Geography", "History",
  "Biology", "Chemistry", "Physics", "Computer Studies", "ICT",
];

const Academics = () => {
  return (
    <section id="academics" className="soft-bg py-[72px]">
      <div className="container-site">
        <h2 className="section-title">Academic Programme</h2>
        <p className="section-intro">
          Greystone College offers a balanced curriculum with a strong emphasis on
          academic excellence, STEM learning, and character formation.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {subjects.map((s) => (
            <div key={s} className="subject-chip">{s}</div>
          ))}
        </div>

        <div className="h-7" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="site-card p-6">
            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>House System</h3>
            <div className="mb-3">
              {["Hunhu", "Uchenjeri", "Ushingi", "Kubudirira"].map((h) => (
                <span key={h} className="house-tag">{h}</span>
              ))}
            </div>
            <p className="text-muted-foreground">
              The house system promotes teamwork, school spirit, leadership,
              healthy competition, and a strong sense of belonging.
            </p>
          </div>

          <div className="site-card p-6">
            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>Educational Focus</h3>
            <p className="text-muted-foreground">
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
