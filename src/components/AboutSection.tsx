import { GraduationCap, Heart, BarChart3, Globe } from "lucide-react";
import communityOutreach from "@/assets/community-outreach-1.jpg";

const highlights = [
  { icon: Heart, label: "Community Health" },
  { icon: BarChart3, label: "Data-Driven Decisions" },
  { icon: Globe, label: "Digital Health" },
  { icon: GraduationCap, label: "Continuous Learning" },
];

const AboutSection = () => (
  <section id="about" className="section-padding gradient-bg-section">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <p className="text-primary font-semibold uppercase text-xs sm:text-sm tracking-wider mb-2">About Me</p>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Passionate About Health &amp; Technology</h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
            I am a passionate and detail-oriented Public Health professional trained at{" "}
            <span className="font-semibold text-foreground">
              Jaramogi Oginga Odinga University of Science and Technology
            </span>
            . With hands-on experience from attachments at Bondo Sub-County Hospital and Kilifi County Referral Hospital, I bring a unique blend of field experience and technical skills.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
            I am deeply interested in community health, disease prevention, health education, and data-driven decision making. My technical abilities in data analysis, frontend development, and graphic design allow me to bridge the gap between health and technology.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-lg bg-secondary/50">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center gradient-bg shrink-0">
                  <Icon size={16} className="text-primary-foreground md:hidden" />
                  <Icon size={20} className="text-primary-foreground hidden md:block" />
                </div>
                <span className="text-xs md:text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5 md:space-y-6">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={communityOutreach} alt="Tatu conducting community health education" className="w-full h-48 sm:h-56 md:h-64 object-cover" loading="lazy" />
          </div>
          <div className="glass-card p-5 md:p-8">
            <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
              <GraduationCap className="text-primary" size={22} />
              Education
            </h3>
            <div className="border-l-2 border-primary pl-4 space-y-4">
              <div>
                <p className="font-semibold text-foreground text-sm md:text-base">Bachelor of Science in Public Health</p>
                <p className="text-primary text-xs md:text-sm font-medium">Jaramogi Oginga Odinga University of Science and Technology</p>
                <p className="text-muted-foreground text-xs md:text-sm">Focused on epidemiology, health promotion, and biostatistics</p>
              </div>
            </div>
            <div className="mt-5 md:mt-6 p-3 md:p-4 rounded-lg bg-secondary/50">
              <p className="text-xs md:text-sm font-medium text-foreground mb-1">Career Interests</p>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {["Epidemiology", "Digital Health", "Health Data Analytics", "Community Health", "Disease Surveillance"].map(t => (
                  <span key={t} className="text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-primary/10 text-primary font-medium">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
