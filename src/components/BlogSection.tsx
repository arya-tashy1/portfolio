import { ArrowRight, Clock } from "lucide-react";
import blogMalaria from "@/assets/blog-malaria.jpg";
import blogDigital from "@/assets/blog-digital-health.jpg";
import blogComms from "@/assets/blog-health-comms.jpg";

const posts = [
  {
    title: "The Role of Data in Combating Malaria in Rural Kenya",
    excerpt: "How data-driven approaches can improve malaria prevention strategies in underserved communities.",
    date: "Coming Soon",
    category: "Data & Health",
    image: blogMalaria,
  },
  {
    title: "Digital Health: Bridging the Gap in Community Healthcare",
    excerpt: "Exploring how technology can enhance healthcare delivery in remote areas of Kenya.",
    date: "Coming Soon",
    category: "Digital Health",
    image: blogDigital,
  },
  {
    title: "Designing Effective Health Communication Materials",
    excerpt: "Best practices for creating health campaign visuals that resonate with diverse communities.",
    date: "Coming Soon",
    category: "Health Communication",
    image: blogComms,
  },
];

const BlogSection = () => (
  <section className="section-padding gradient-bg-section">
    <div className="section-container">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-primary font-semibold uppercase text-sm tracking-wider mb-2">Blog</p>
        <h2 className="section-title">Public Health Insights</h2>
        <p className="section-subtitle mx-auto">Sharing knowledge and perspectives on public health and technology.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {posts.map((post, i) => (
          <div key={i} className="glass-card overflow-hidden group cursor-pointer">
            <div className="h-40 sm:h-44 overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width={800} height={512} />
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">{post.category}</span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock size={12} />
                  {post.date}
                </div>
              </div>
              <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-sm md:text-base leading-snug">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Read More <ArrowRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
