const newsItems = [
  { type: "News", title: "Greyston College STEM Focus Launch", desc: "Our STEM-forward learning plan strengthens ICT, science and problem-solving across pathways." },
  { type: "Event", title: "Open Day & Campus Tours", desc: "Meet our team, learn about admissions, and view our development plan." },
  { type: "News", title: "Campus Development Update", desc: "Progress toward ICT facilities, science lab readiness, and infrastructure upgrades." },
  { type: "Event", title: "Leadership & Skills Workshop", desc: "A practical session supporting student confidence, discipline and future readiness." },
];

const NewsEvents = () => {
  return (
    <section id="news" className="container-site py-8" aria-label="News and Events">
      <div className="section-heading">
        <div>
          <h2 className="font-display text-2xl md:text-[2rem] text-navy m-0">News &amp; Events</h2>
          <p className="text-muted-foreground mt-1">Updates, announcements and upcoming dates.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {newsItems.map((item) => (
          <div key={item.title} className="site-card p-5">
            <span className="badge-tag">{item.type}</span>
            <h3 className="text-navy mt-2.5 mb-1 text-base font-semibold">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed m-0">{item.desc}</p>
            <div className="text-sm text-muted-foreground mt-2.5">Date: —</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsEvents;
