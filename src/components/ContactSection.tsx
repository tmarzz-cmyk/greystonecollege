const emails = [
  "director-tm@greyston-college.com",
  "director-ag@greyston-college.com",
  "admissions@greyston-college.com",
  "accounts@greyston-college.com",
  "enquiries@greyston-college.com",
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="container-site">
        <p className="text-xs tracking-[0.3em] uppercase text-center mb-3 font-medium" style={{ color: "hsl(var(--sand))" }}>Get In Touch</p>
        <h2 className="section-title">Contact Greystone College</h2>
        <div className="premium-divider" />
        <p className="section-intro">
          Use the official contact emails below for all school communication.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-7 items-start">
          <div className="site-card p-7">
            <h3 className="font-bold text-lg mb-4" style={{ color: "hsl(var(--turquoise-dark))" }}>Official Emails</h3>
            <div className="space-y-3">
              {emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block font-bold break-all transition-colors hover:underline"
                  style={{ color: "hsl(var(--turquoise-dark))" }}
                >
                  {email}
                </a>
              ))}
            </div>
          </div>

          <div className="site-card-soft p-7">
            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>Location</h3>
            <p className="text-muted-foreground">Ruwa, Zimbabwe</p>

            <div className="premium-divider !my-6 !mx-0 !w-10" />

            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>School Motto</h3>
            <p><strong>Achieving Excellence Together</strong></p>
            <p className="italic text-muted-foreground">Kubudirira Mukurumbira Tiri Pamwechete</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
