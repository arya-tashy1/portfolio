import { ArrowDown, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden gradient-bg-hero">
    <div className="absolute top-20 -left-32 w-64 md:w-96 h-64 md:h-96 rounded-full opacity-30 blur-3xl gradient-bg" />
    <div className="absolute bottom-20 -right-32 w-52 md:w-80 h-52 md:h-80 rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-secondary)" }} />

    <div className="relative section-container w-full pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Mobile: photo first */}
        <div className="flex justify-center lg:hidden animate-fade-up">
          <div className="relative">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-2xl ring-4 ring-accent/20 ring-offset-4 ring-offset-transparent">
              <img src={profilePhoto} alt="Tatu Changaya - Public Health Professional" width={320} height={320} className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-16 h-16 rounded-full flex items-center justify-center text-primary-foreground text-[10px] font-bold shadow-lg gradient-bg">
              Open to<br />Work
            </div>
          </div>
        </div>

        <div>
          <p className="text-accent font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3 md:mb-4 animate-fade-up text-center lg:text-left">
            Welcome to my portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight mb-4 md:mb-6 text-primary-foreground animate-fade-up-delay-1 text-center lg:text-left">
            Hi, I'm{" "}
            <span className="gradient-text" style={{ backgroundImage: "var(--gradient-secondary)" }}>Tatu Changaya</span>
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-primary-foreground/70 font-light mb-2 md:mb-3 animate-fade-up-delay-2 text-center lg:text-left">
            Public Health Professional | Data Analyst | Digital Solutions Enthusiast
          </p>
          <p className="text-primary-foreground/60 text-sm sm:text-base lg:text-lg max-w-xl mb-6 md:mb-8 animate-fade-up-delay-2 text-center lg:text-left mx-auto lg:mx-0">
            Combining public health expertise with digital and analytical skills to create impactful, data-driven health solutions.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 animate-fade-up-delay-3 justify-center lg:justify-start">
            <a href="#projects" className="btn-primary text-sm md:text-base py-2.5 md:py-3 px-5 md:px-6">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold border-2 border-primary-foreground/30 text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10 text-sm md:text-base">
              Contact Me
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold border-2 border-primary-foreground/30 text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10 text-sm md:text-base" title="Download CV">
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>

        {/* Desktop photo */}
        <div className="hidden lg:flex justify-end animate-fade-up-delay-2">
          <div className="relative">
            <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-2xl ring-4 ring-accent/20 ring-offset-4 ring-offset-transparent">
              <img src={profilePhoto} alt="Tatu Changaya - Public Health Professional" width={320} height={320} className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold shadow-lg gradient-bg">
              Open to<br />Work
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="#about" className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce" aria-label="Scroll down">
      <ArrowDown size={24} />
    </a>
  </section>
);

export default HeroSection;
