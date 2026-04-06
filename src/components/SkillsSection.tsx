import { Activity, Code, Palette, Users, Shield, BarChart } from "lucide-react";

const publicHealthSkills = [
  { name: "Community Health Outreach", level: 90 },
  { name: "Health Education & Promotion", level: 85 },
  { name: "Disease Surveillance", level: 80 },
  { name: "Epidemiology & Biostatistics", level: 75 },
  { name: "Environmental Health", level: 78 },
];

const techSkills = [
  { name: "Data Analysis (Excel, SPSS)", level: 85 },
  { name: "Python (Basic Analytics)", level: 65 },
  { name: "HTML, CSS, JavaScript", level: 75 },
  { name: "Graphic Design (Canva, Adobe)", level: 80 },
  { name: "Report Writing & Documentation", level: 90 },
];

const skillCards = [
  { icon: Users, title: "Community Outreach", desc: "Engaging communities in health programs and education." },
  { icon: Activity, title: "Disease Prevention", desc: "Surveillance, investigation, and outbreak response." },
  { icon: BarChart, title: "Data Analysis", desc: "Transforming health data into actionable insights." },
  { icon: Code, title: "Web Development", desc: "Building health dashboards and informational websites." },
  { icon: Palette, title: "Graphic Design", desc: "Creating health campaign posters and visuals." },
  { icon: Shield, title: "Infection Control", desc: "Hospital infection prevention and safety protocols." },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div>
    <div className="flex justify-between mb-1.5">
      <span className="text-xs md:text-sm font-medium text-foreground">{name}</span>
      <span className="text-[10px] md:text-xs text-muted-foreground">{level}%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-bar-fill" style={{ width: `${level}%` }} />
    </div>
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="section-padding gradient-bg-section">
    <div className="section-container">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-primary font-semibold uppercase text-xs sm:text-sm tracking-wider mb-2">Skills</p>
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">What I Bring to the Table</h2>
        <p className="section-subtitle mx-auto text-sm sm:text-base md:text-lg">A unique combination of public health expertise and technical proficiency.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-14">
        {skillCards.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass-card p-4 md:p-6 text-center group">
            <div className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 gradient-bg shadow-lg">
              <Icon size={20} className="text-primary-foreground md:hidden" />
              <Icon size={26} className="text-primary-foreground hidden md:block" />
            </div>
            <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">{title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">{desc}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-5 md:gap-10">
        <div className="glass-card p-5 md:p-8">
          <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-4 md:mb-6">Public Health Skills</h3>
          <div className="space-y-4 md:space-y-5">
            {publicHealthSkills.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>
        <div className="glass-card p-5 md:p-8">
          <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-4 md:mb-6">Technical Skills</h3>
          <div className="space-y-4 md:space-y-5">
            {techSkills.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
