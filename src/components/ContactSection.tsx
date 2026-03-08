const ContactSection = () => {
  return (
    <section id="contact" className="py-[72px]">
      <div className="container-site">
        <h2 className="section-title">Contact Greystone College</h2>
        <p className="section-intro">
          Use the official contact emails below for all school communication.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-7 items-start">
          <div className="site-card p-6">
            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>Official Emails</h3>
            <div className="space-y-2.5">
              {[
                "director-tm@greyston-college.com",
                "director-ag@greyston-college.com",
                "admissions@greyston-college.com",
                "accounts@greyston-college.com",
                "enquiries@greyston-college.com",
              ].map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block font-bold break-all"
                  style={{ color: "hsl(var(--turquoise-dark))" }}
                >
                  {email}
                </a>
              ))}
            </div>
          </div>

          <div className="site-card-soft p-6">
            <h3 className="font-bold text-lg mb-2.5" style={{ color: "hsl(var(--turquoise-dark))" }}>Location</h3>
            <p className="text-muted-foreground">Ruwa, Zimbabwe</p>

            <div className="h-5" />

            <h3 className="font-bold text-lg mb-2.5" style={{ color: "hsl(var(--turquoise-dark))" }}>School Motto</h3>
            <p><strong>Achieving Excellence Together</strong></p>
            <p className="italic text-muted-foreground">Kubudirira Mukurumbira Tiri Pamwechete</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
