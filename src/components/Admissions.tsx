import { useState } from "react";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card/80 border rounded-2xl p-3.5">
      <button
        className="cursor-pointer font-bold text-navy w-full text-left flex items-center justify-between gap-2"
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
    <section id="admissions" className="container-site py-8" aria-label="Admissions">
      <div className="section-heading">
        <div>
          <h2 className="font-display text-2xl md:text-[2rem] text-navy m-0">Admissions</h2>
          <p className="text-muted-foreground mt-1">
            A clear, supportive process for both Secondary and College &amp; Skills pathways.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <div className="site-card p-5">
          <h3 className="font-display text-navy mb-2">How to apply</h3>
          <ol className="list-decimal pl-5 text-muted-foreground leading-[1.75]">
            <li>Choose your pathway (Secondary or College &amp; Skills)</li>
            <li>Submit your application</li>
            <li>Submit required documents</li>
            <li>Interview/assessment (if required)</li>
            <li>Receive an offer and enrol</li>
          </ol>
          <div className="h-3" />
          <div className="flex gap-3 flex-wrap">
            <a href="#contact" className="btn-site-primary text-sm">Request Information</a>
            <a href="#contact" className="btn-site-outline text-sm">Download Checklist</a>
          </div>
        </div>

        <div className="site-card p-5">
          <h3 className="font-display text-navy mb-2">Tuition &amp; fees (placeholders)</h3>
          <div className="text-muted-foreground text-sm">Replace the amounts once finalised.</div>
          <div className="h-3" />
          <div className="rounded-2xl border bg-background/60 p-3 text-sm space-y-1">
            <div><b>Secondary:</b> $— per term</div>
            <div><b>College &amp; Skills:</b> $— per course</div>
            <div><b>Boarding:</b> $— per term</div>
          </div>
          <div className="h-3" />
          <div className="space-y-3">
            <AccordionItem title="Scholarships & financial aid">
              We aim to support deserving learners through structured assistance options. Contact us for current
              availability and criteria.
            </AccordionItem>
            <AccordionItem title="International students">
              International applicants are welcome. We provide guidance on requirements, documentation, and enrolment
              steps.
            </AccordionItem>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <AccordionItem title="What documents are required?">
          Typically: student identification, previous school results/transcripts, and parent/guardian details for
          secondary applicants (placeholders).
        </AccordionItem>
        <AccordionItem title="Do you offer campus visits?">
          Yes — book a visit through the contact form and we will confirm a suitable time.
        </AccordionItem>
      </div>
    </section>
  );
};

export default Admissions;
