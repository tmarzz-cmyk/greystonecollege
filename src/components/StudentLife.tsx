import studentsTalking from "@/assets/students-talking.jpg";

const StudentLife = () => {
  return (
    <section id="life" className="container-site py-8" aria-label="Student Life">
      <div className="section-heading">
        <div>
          <h2 className="font-display text-2xl md:text-[2rem] text-navy m-0">Student Life</h2>
          <p className="text-muted-foreground mt-1">
            A supportive environment that builds confidence, leadership and community.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <div className="site-card overflow-hidden">
          <img
            src={studentsTalking}
            alt="Greyston College student life"
            className="w-full h-60 md:h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="site-card p-5">
          <ul className="list-disc pl-5 text-muted-foreground leading-[1.75]">
            <li>Clubs &amp; societies (leadership, debate, STEM initiatives)</li>
            <li>Sports and physical development</li>
            <li>Mentorship and student support services</li>
            <li>Career guidance and professional development</li>
            <li>Campus safety and wellbeing focus</li>
          </ul>
          <div className="h-3" />
          <a href="#contact" className="btn-site-gold text-sm">Book a Visit</a>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
