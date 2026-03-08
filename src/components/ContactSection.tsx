import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-[72px]">
      <div className="container-site">
        <h2 className="section-title">Contact</h2>
        <p className="section-intro">Request information, book a visit, or ask about admissions.</p>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-7 items-start">
          {/* Info */}
          <div className="site-card p-6">
            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>Greystone College</h3>
            <p className="text-muted-foreground my-1">Ruwa, Zimbabwe</p>

            <div className="h-4" />

            <div className="space-y-2.5">
              <p className="text-muted-foreground">
                <strong>Director Tony Mazaiwana</strong><br />
                <a href="mailto:director-tm@greyston-college.com" className="underline font-bold" style={{ color: "hsl(var(--turquoise-dark))" }}>
                  director-tm@greyston-college.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <strong>Director Aqueline Garamukanwa</strong><br />
                <a href="mailto:director-ag@greyston-college.com" className="underline font-bold" style={{ color: "hsl(var(--turquoise-dark))" }}>
                  director-ag@greyston-college.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <strong>General Enquiries</strong><br />
                <a href="mailto:enquiries@greyston-college.com" className="underline font-bold" style={{ color: "hsl(var(--turquoise-dark))" }}>
                  enquiries@greyston-college.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <strong>Accounts</strong><br />
                <a href="mailto:accounts@greyston-college.com" className="underline font-bold" style={{ color: "hsl(var(--turquoise-dark))" }}>
                  accounts@greyston-college.com
                </a>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="site-card p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input required name="name" placeholder="Full name" aria-label="Full name" className="input-site" />
                <input required type="email" name="email" placeholder="Email address" aria-label="Email address" className="input-site" />
              </div>
              <div className="h-3" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input name="phone" placeholder="Phone number" aria-label="Phone number" className="input-site" />
                <select name="topic" aria-label="Topic" className="input-site">
                  <option value="Admissions">Admissions</option>
                  <option value="Campus Visit">Campus Visit</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>
              <div className="h-3" />
              <textarea
                required
                name="message"
                placeholder="Your message"
                aria-label="Message"
                className="input-site min-h-[120px] resize-y"
              />
              <div className="h-3" />
              <button type="submit" className="btn-site-primary text-sm">Send message</button>

              {submitted && (
                <div
                  className="mt-3 p-3 rounded-[14px] border text-sm font-bold"
                  style={{
                    background: "rgba(214,179,106,.14)",
                    borderColor: "rgba(214,179,106,.3)",
                    color: "hsl(var(--turquoise-dark))",
                  }}
                >
                  Thank you — we've received your message and will respond shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
