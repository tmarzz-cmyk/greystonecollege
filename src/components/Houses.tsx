const houses = [
  { name: "Hunhu", meaning: "Character and Integrity" },
  { name: "Uchenjeri", meaning: "Wisdom and Knowledge" },
  { name: "Ushingi", meaning: "Courage and Determination" },
  { name: "Kubudirira", meaning: "Success and Achievement" },
];

const Houses = () => {
  return (
    <section id="houses" className="container-site py-8" aria-label="Houses">
      <div className="section-heading">
        <div>
          <h2 className="font-display text-2xl md:text-[2rem] text-navy m-0">House System</h2>
          <p className="text-muted-foreground mt-1">
            Students are placed into one of four houses to promote leadership, teamwork and school spirit.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5">
        {houses.map((house) => (
          <div key={house.name} className="site-card p-5 text-center">
            <b className="font-display text-lg text-navy">{house.name}</b>
            <p className="text-muted-foreground text-sm mt-1 m-0">{house.meaning}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Houses;
