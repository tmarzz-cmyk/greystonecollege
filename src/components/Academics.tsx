import studentsIct from "@/assets/students-ict.jpg";

const subjects = [
  "English Language", "Mathematics", "Heritage Studies", "Geography", "History",
  "Biology", "Chemistry", "Physics", "Computer Studies", "ICT",
];

const houses = [
  { name: "Hunhu", meaning: "Character and Integrity" },
  { name: "Uchenjeri", meaning: "Wisdom and Knowledge" },
  { name: "Ushingi", meaning: "Courage and Determination" },
  { name: "Kubudirira", meaning: "Success and Achievement" },
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

        {/* Subject Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {subjects.map((s) => (
            <div key={s} className="subject-chip">{s}</div>
          ))}
        </div>

        <div className="h-7" />

        {/* House System + Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="site-card p-6">
            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>House System</h3>
            <div className="mb-3">
              {houses.map((h) => (
                <span key={h.name} className="house-tag">{h.name}</span>
              ))}
            </div>
            <p className="text-muted-foreground mb-3">
              Students are placed into one of four houses to promote leadership, teamwork and school spirit.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground leading-[1.8]">
              {houses.map((h) => (
                <li key={h.name}><strong>{h.name}</strong> – {h.meaning}</li>
              ))}
            </ul>
          </div>

          <div className="site-card overflow-hidden">
            <img
              src={studentsIct}
              alt="Students in ICT class"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
