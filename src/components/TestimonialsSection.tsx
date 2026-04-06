import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Tatu demonstrated exceptional dedication during her attachment. Her ability to combine data analysis with community outreach was impressive.",
    name: "Dr. Jane Atieno",
    role: "Medical Superintendent, Bondo Sub-County Hospital",
  },
  {
    text: "An outstanding student who brought innovative ideas to our disease surveillance program. Her technical skills added great value to our team.",
    name: "Dr. Peter Mwangi",
    role: "Public Health Officer, Kilifi County",
  },
  {
    text: "Tatu's health campaign designs effectively communicated complex health messages to the community. A true blend of creativity and knowledge.",
    name: "Mary Wanjiru",
    role: "Community Health Coordinator",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-primary font-semibold uppercase text-xs sm:text-sm tracking-wider mb-2">Testimonials</p>
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">What People Say</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="glass-card p-5 md:p-6 relative">
            <Quote size={28} className="text-primary/20 absolute top-4 right-4" />
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-5 md:mb-6 italic">"{t.text}"</p>
            <div>
              <p className="text-xs md:text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-[10px] md:text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
