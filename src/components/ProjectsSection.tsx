import { BarChart3, Megaphone, Globe, ExternalLink } from "lucide-react";
import projectData from "@/assets/project-data-analysis.jpg";
import projectCampaign from "@/assets/project-campaign.jpg";
import projectWeb from "@/assets/project-web.jpg";

const projects = [
  {
    icon: BarChart3,
    image: projectData,
    title: "Disease Trend Analysis Dashboard",
    category: "Data Analysis",
    desc: "Analyzed malaria and respiratory disease trends across Kilifi County using Excel and SPSS. Created data visualizations to support county health planning and resource allocation.",
    tags: ["Excel", "SPSS", "Data Visualization", "Epidemiology"],
  },
  {
    icon: Megaphone,
    image: projectCampaign,
    title: "HIV/AIDS Awareness Campaign",
    category: "Health Communication",
    desc: "Designed a comprehensive health awareness campaign targeting youth in Bondo Sub-County. Created educational posters, social media graphics, and community outreach materials.",
    tags: ["Canva", "Adobe", "Health Education", "Campaign Design"],
  },
  {
    icon: Globe,
    image: projectWeb,
    title: "Community Health Information Portal",
    category: "Web Development",
    desc: "Built a responsive frontend website providing accessible health information for community health workers. Features interactive disease prevention guides and resource directories.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="section-container">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-primary font-semibold uppercase text-sm tracking-wider mb-2">Projects</p>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle mx-auto">Showcasing how I merge public health knowledge with digital skills.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {projects.map(({ image, title, category, desc, tags }) => (
          <div key={title} className="glass-card overflow-hidden group">
            <div className="h-44 sm:h-48 overflow-hidden relative">
              <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width={800} height={512} />
              <span className="absolute top-3 left-3 text-xs font-semibold text-primary-foreground bg-black/40 backdrop-blur px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
            <div className="p-5 md:p-6">
              <h3 className="text-base md:text-lg font-display font-bold text-foreground mb-2 flex items-center gap-2">
                {title}
                <ExternalLink size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{desc}</p>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {tags.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 md:px-2.5 md:py-1 rounded-full bg-secondary text-secondary-foreground font-medium">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
