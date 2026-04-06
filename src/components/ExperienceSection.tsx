import { Building2, CalendarDays, CheckCircle2 } from "lucide-react";
import labMicroscope from "@/assets/lab-microscope.jpg";
import immunization1 from "@/assets/immunization-1.jpg";

const experiences = [
  {
    title: "Clinical Attachment – Kilifi County Referral Hospital",
    period: "3rd Year Attachment",
    image: labMicroscope,
    points: [
      "Participated in disease surveillance and outbreak investigation activities",
      "Assisted in data collection and analysis for health facility reports",
      "Supported community health outreach programs in Kilifi County",
      "Gained experience in hospital infection prevention and control",
    ],
  },
  {
    title: "Clinical Attachment – Bondo Sub-County Hospital",
    period: "2nd Year Attachment",
    image: immunization1,
    points: [
      "Conducted health education sessions on malaria prevention and maternal health",
      "Assisted in patient record management and data entry",
      "Participated in immunization campaigns in the community",
      "Supported the hospital's environmental health and sanitation programs",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="section-container">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-primary font-semibold uppercase text-xs sm:text-sm tracking-wider mb-2">Experience</p>
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Professional Experience</h2>
        <p className="section-subtitle mx-auto text-sm sm:text-base md:text-lg">Hands-on clinical and community health experience in diverse healthcare settings across Kenya.</p>
      </div>
      <div className="space-y-6 md:space-y-10">
        {experiences.map((exp, i) => (
          <div key={i} className={`glass-card overflow-hidden md:flex ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
            <div className="md:w-2/5 h-48 sm:h-56 md:h-auto">
              <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="md:w-3/5 p-5 md:p-8">
              <div className="flex items-center gap-2 text-primary text-xs md:text-sm font-medium mb-2">
                <CalendarDays size={14} />
                {exp.period}
              </div>
              <h3 className="text-base md:text-lg font-display font-bold text-foreground mb-3 flex items-center gap-2">
                <Building2 size={16} className="text-primary shrink-0" />
                <span>{exp.title}</span>
              </h3>
              <ul className="space-y-2">
                {exp.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-muted-foreground text-xs md:text-sm">
                    <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
