const Admissions = () => {
  return (
    <section id="admissions" className="soft-bg py-[72px]">
      <div className="container-site">
        <h2 className="section-title">Admissions</h2>
        <p className="section-intro">
          Greystone College initially welcomes students for Forms 1 to 3 and will expand
          as the college grows in line with its master development plan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="site-card p-6">
            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>Application Requirements</h3>
            <ul className="list-disc pl-5 text-muted-foreground leading-[1.8]">
              <li>Birth certificate copy</li>
              <li>Latest school report</li>
              <li>Passport-size photograph</li>
            </ul>
          </div>

          <div className="site-card p-6">
            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>Admissions Enquiries</h3>
            <p className="text-muted-foreground">
              To begin the application process, contact the admissions office using the official email below.
            </p>
            <p className="mt-2.5">
              <strong style={{ color: "hsl(var(--turquoise-dark))" }}>admissions@greyston-college.com</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
