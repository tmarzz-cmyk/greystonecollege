import { useState } from "react";
import studentsTalking from "@/assets/students-talking.jpg";

const Academics = () => {
  const [activeTab, setActiveTab] = useState<"secondary" | "skills">("secondary");

  return (
    <section id="academics" className="container-site py-8" aria-label="Academics">
      <div className="section-heading">
        <div>
          <h2 className="font-display text-2xl md:text-[2rem] text-navy m-0">Academics</h2>
          <p className="text-muted-foreground mt-1">Two pathways, one standard: excellence.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2.5 flex-wrap mt-4" role="tablist" aria-label="Academics tabs">
        <button
          className={`py-2.5 px-4 rounded-full border font-semibold cursor-pointer transition-all text-sm ${
            activeTab === "secondary"
              ? "bg-navy text-primary-foreground border-transparent"
              : "bg-card/60 text-foreground border-foreground/15"
          }`}
          role="tab"
          aria-selected={activeTab === "secondary"}
          onClick={() => setActiveTab("secondary")}
        >
          Secondary School
        </button>
        <button
          className={`py-2.5 px-4 rounded-full border font-semibold cursor-pointer transition-all text-sm ${
            activeTab === "skills"
              ? "bg-navy text-primary-foreground border-transparent"
              : "bg-card/60 text-foreground border-foreground/15"
          }`}
          role="tab"
          aria-selected={activeTab === "skills"}
          onClick={() => setActiveTab("skills")}
        >
          College &amp; Skills
        </button>
      </div>

      {/* Panels */}
      {activeTab === "secondary" && (
        <div className="site-card p-5 mt-4" role="tabpanel">
          <h3 className="font-display text-navy mb-2">Secondary School Pathway</h3>
          <p className="text-muted-foreground leading-[1.75] mb-3">
            Our secondary programme is structured, disciplined, and results-driven — designed to build strong academic
            foundations while nurturing character and leadership.
          </p>
          <ul className="list-disc pl-5 text-muted-foreground leading-[1.75]">
            <li>STEM-centred learning: Mathematics, Sciences, ICT and analytical thinking</li>
            <li>Strong study culture and mentorship</li>
            <li>Leadership development and values-based education</li>
          </ul>
        </div>
      )}

      {activeTab === "skills" && (
        <div className="site-card p-5 mt-4" role="tabpanel">
          <h3 className="font-display text-navy mb-2">College &amp; Skills Pathway</h3>
          <p className="text-muted-foreground leading-[1.75] mb-3">
            Greyston College is expanding into practical, career-ready programmes designed to equip learners and young
            professionals with relevant skills for the modern economy.
          </p>
          <ul className="list-disc pl-5 text-muted-foreground leading-[1.75]">
            <li>Business &amp; Entrepreneurship</li>
            <li>Information Technology &amp; Digital Skills</li>
            <li>Project Management</li>
            <li>Leadership Development</li>
          </ul>
        </div>
      )}

      {/* Campus Development */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="site-card p-5">
          <h3 className="font-display text-navy mb-2">Campus Development Plan</h3>
          <p className="text-muted-foreground leading-[1.75] mb-3">
            We are implementing upgrades to create a modern, premium learning environment.
          </p>
          <ul className="list-disc pl-5 text-muted-foreground leading-[1.75]">
            <li>ICT block &amp; computers</li>
            <li>Science laboratory &amp; equipment</li>
            <li>Food canteen</li>
            <li>Upgrading existing infrastructure</li>
            <li>Sports hall</li>
            <li>Boarding facilities (100 students)</li>
          </ul>
        </div>

        <div className="site-card overflow-hidden">
          <img
            src={studentsTalking}
            alt="Greyston College students in uniform"
            className="w-full h-60 md:h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Academics;
