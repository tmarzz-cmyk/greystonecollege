import campusLab from "@/assets/campus-lab.jpg";
import campusLife from "@/assets/campus-life.jpg";

const CampusLife = () => {
  return (
    <section id="campus-life" className="section-padding py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-gold font-semibold text-sm tracking-widest uppercase mb-3">Campus Life</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          More Than a Classroom
        </h2>
        <p className="font-body text-primary-foreground/70 text-lg max-w-2xl mb-14">
          From research labs to student clubs, every corner of Greyston is designed to inspire growth, creativity, and connection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src={campusLab}
              alt="Students in science laboratory"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h3 className="font-display text-xl font-semibold mb-1">Research & Innovation</h3>
              <p className="font-body text-primary-foreground/70 text-sm">Hands-on learning in world-class facilities</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg group">
            <img
              src={campusLife}
              alt="Students socializing on campus"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h3 className="font-display text-xl font-semibold mb-1">Student Community</h3>
              <p className="font-body text-primary-foreground/70 text-sm">100+ clubs, events, and organizations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
