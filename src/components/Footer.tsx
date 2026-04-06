import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border gradient-bg-hero">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-primary-foreground/70 flex items-center gap-1">
        © 2025 Tatu Changaya. Built with <Heart size={14} className="text-accent" /> and purpose.
      </p>
      <div className="flex gap-6">
        {["About", "Projects", "Contact"].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{l}</a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
