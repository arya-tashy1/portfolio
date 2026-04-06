import labMicroscope from "@/assets/lab-microscope.jpg";
import labMicroscope2 from "@/assets/lab-microscope-2.jpg";
import communityOutreach1 from "@/assets/community-outreach-1.jpg";
import communityOutreach2 from "@/assets/community-outreach-2.jpg";
import communityOutreach3 from "@/assets/community-outreach-3.jpg";
import immunization1 from "@/assets/immunization-1.jpg";
import immunization2 from "@/assets/immunization-2.jpg";
import workplaceCert from "@/assets/workplace-cert.jpg";

const galleryItems = [
  { src: communityOutreach1, title: "School Health Education", category: "Community Outreach" },
  { src: labMicroscope, title: "Laboratory Analysis", category: "Clinical Attachment" },
  { src: immunization1, title: "Immunization Campaign", category: "Public Health" },
  { src: communityOutreach2, title: "Health Talk Session", category: "Community Outreach" },
  { src: labMicroscope2, title: "Microscopy Work", category: "Clinical Attachment" },
  { src: immunization2, title: "Child Vaccination", category: "Public Health" },
  { src: communityOutreach3, title: "Community Health Education", category: "Community Outreach" },
  { src: workplaceCert, title: "Workplace Registration", category: "Occupational Health" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding" style={{ background: "var(--section-gradient)" }}>
    <div className="section-container">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-primary font-semibold uppercase text-xs sm:text-sm tracking-wider mb-2">Gallery</p>
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Field Work & Experience</h2>
        <p className="section-subtitle mx-auto text-sm sm:text-base md:text-lg">Photos from clinical attachments, community outreach, and public health fieldwork.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {galleryItems.map((item, i) => (
          <div key={i} className={`group relative rounded-lg md:rounded-xl overflow-hidden cursor-pointer ${i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""}`}>
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5 md:p-4">
              <h3 className="text-xs md:text-sm font-semibold text-white">{item.title}</h3>
              <span className="text-[10px] md:text-xs text-white/70 mt-0.5">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
