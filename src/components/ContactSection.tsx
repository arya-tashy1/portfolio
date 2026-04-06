import { useState } from "react";
import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:tatuchangaya137@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-primary font-semibold uppercase text-xs sm:text-sm tracking-wider mb-2">Contact</p>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Let's Connect</h2>
          <p className="section-subtitle mx-auto text-sm sm:text-base md:text-lg">Interested in working together? I'd love to hear from you.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            <div className="glass-card p-4 md:p-6 space-y-4 md:space-y-5">
              {[
                { icon: Mail, label: "Email", value: "tatuchangaya137@gmail.com", href: "mailto:tatuchangaya137@gmail.com" },
                { icon: Phone, label: "Phone", value: "+254 740 960 179", href: "tel:+254740960179" },
                { icon: Linkedin, label: "LinkedIn", value: "Tatu Changaya", href: "https://linkedin.com" },
                { icon: MapPin, label: "Location", value: "Kenya", href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-3 md:gap-4 group" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 gradient-bg shadow-lg">
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-muted-foreground">{label}</p>
                    <p className="text-xs md:text-sm font-medium text-foreground group-hover:text-primary transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="glass-card p-4 md:p-6 space-y-3 md:space-y-4">
            <div>
              <label className="text-xs md:text-sm font-medium text-foreground mb-1 md:mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-foreground mb-1 md:mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-foreground mb-1 md:mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center text-sm md:text-base">
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
