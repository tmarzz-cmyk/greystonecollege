import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="container-site py-8" aria-label="Contact">
      <div className="section-heading">
        <div>
          <h2 className="font-display text-2xl md:text-[2rem] text-navy m-0">Contact</h2>
          <p className="text-muted-foreground mt-1">Request information, book a visit, or ask about admissions.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {/* Info */}
        <div className="site-card p-5">
          <h3 className="font-display text-navy mb-2">Greyston College</h3>
          <p className="text-muted-foreground my-1">Ruwa, Zimbabwe</p>
          <p className="text-muted-foreground my-1">
            <b>Phone:</b> +263 77 670 6614
          </p>
          <p className="text-muted-foreground my-1">
            <b>Email:</b>{" "}
            <a href="mailto:tonaqprojects@gmail.com" className="underline">
              tonaqprojects@gmail.com
            </a>
          </p>

          <div className="h-3" />

          <div className="rounded-2xl border bg-background/60 p-3.5 text-sm space-y-1">
            <div><b>Admissions:</b> admissions@greystoncollege.co.zw (placeholder)</div>
            <div><b>Registrar:</b> registrar@greystoncollege.co.zw (placeholder)</div>
            <div><b>Financial Aid:</b> aid@greystoncollege.co.zw (placeholder)</div>
          </div>

          <div className="h-3" />
          <div className="text-sm text-muted-foreground">
            Map: add an embedded Google Map here once you have the exact address.
          </div>
        </div>

        {/* Form */}
        <div className="site-card p-5">
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
                <option value="Secondary School">Secondary School</option>
                <option value="College & Skills">College &amp; Skills</option>
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
              <div className="mt-3 p-3 rounded-[14px] border text-sm font-semibold text-navy" style={{
                background: "rgba(201,162,39,.14)",
                borderColor: "rgba(201,162,39,.3)",
              }}>
                Thank you — we've received your message and will respond shortly.
              </div>
            )}

            <p className="text-sm text-muted-foreground mt-3">
              Note: This demo shows a success state. When you deploy, connect the form to email or a database.
            </p>
          </form>
        </div>
      </div>

      {/* Staff Login placeholder */}
      <div id="apply" className="site-card p-5 mt-4">
        <h2 className="font-display text-navy m-0">Staff Login (placeholder)</h2>
        <p className="text-muted-foreground leading-[1.75] mt-2">
          A staff portal can be added here once authentication is set up.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
