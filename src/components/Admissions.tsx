import { useState } from "react";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="site-card p-4">
      <button
        className="cursor-pointer font-bold w-full text-left flex items-center justify-between gap-2"
        style={{ color: "hsl(var(--turquoise-dark))" }}
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown size={18} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="text-muted-foreground leading-relaxed mt-2.5 mb-0">{children}</p>}
    </div>
  );
};

const Admissions = () => {
  return (
    <section id="admissions" className="soft-bg py-[72px]">
      <div className="container-site">
        <h2 className="section-title">Admissions</h2>
        <p className="section-intro">
          Greystone College initially admits students for Forms 1 to 3. A clear, supportive process for new families.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="site-card p-6">
            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>How to Apply</h3>
            <ol className="list-decimal pl-5 text-muted-foreground leading-[1.8]">
              <li>Choose your pathway (Forms 1–3)</li>
              <li>Submit your application</li>
              <li>Submit required documents</li>
              <li>Interview / assessment (if required)</li>
              <li>Receive an offer and enrol</li>
            </ol>
            <div className="h-4" />
            <div className="flex gap-3 flex-wrap">
              <a href="#contact" className="btn-site-primary text-sm">Apply for Admission</a>
              <a href="#contact" className="btn-site-outline text-sm">Request Information</a>
            </div>
          </div>

          <div className="site-card p-6">
            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>Admissions Contact</h3>
            <p className="text-muted-foreground mb-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:admissions@greyston-college.com" className="underline" style={{ color: "hsl(var(--turquoise-dark))" }}>
                admissions@greyston-college.com
              </a>
            </p>

            <div className="space-y-3">
              <AccordionItem title="What documents are required?">
                Typically: student identification, previous school results/transcripts, and parent/guardian details.
              </AccordionItem>
              <AccordionItem title="Do you offer campus visits?">
                Yes — book a visit through the contact form and we will confirm a suitable time.
              </AccordionItem>
              <AccordionItem title="Scholarships & financial aid">
                We aim to support deserving learners through structured assistance options. Contact us for current
                availability and criteria.
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
