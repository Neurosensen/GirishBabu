import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { toast } from "sonner";
import weight from "@/assets/weight-management.jpg";
import active from "@/assets/active-lifestyle.jpg";
import nutrition from "@/assets/nutritional-planning.jpg";
import core from "@/assets/core-fitness.jpg";

const ITEMS = [
  { title: "Weight Management", img: weight, span: "md:col-span-7", aspect: "aspect-[4/3] md:aspect-[16/11]" },
  { title: "Active Lifestyle", img: active, span: "md:col-span-5", aspect: "aspect-[4/3] md:aspect-[16/11]" },
  { title: "Nutritional Planning", img: nutrition, span: "md:col-span-5", aspect: "aspect-[4/3] md:aspect-[16/11]" },
  { title: "Core Fitness", img: core, span: "md:col-span-7", aspect: "aspect-[4/3] md:aspect-[16/11]" },
];

const halftone = {
  backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
  backgroundSize: "4px 4px",
};

export const SelectedWorks = () => {
  const handleItemClick = () => {
    toast.info("Success story details coming soon!");
  };

  return (
    <section id="works" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Success Stories"
          title="Client transformations"
          italicWord="transformations"
          subtitle="Real results from people dedicated to changing their lifestyle and habits."
          cta={{ 
            label: "View all stories", 
            href: "#",
            onClick: (e) => {
              e.preventDefault();
              toast.info("Success stories gallery coming soon!");
            }
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={handleItemClick}
              className={`group relative overflow-hidden bg-surface border border-stroke rounded-3xl cursor-pointer ${it.span} ${it.aspect}`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-20 mix-blend-multiply" style={halftone} />
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-opacity duration-500 flex items-center justify-center">
                <div className="relative rounded-full p-[1.5px]">
                  <span className="absolute inset-0 rounded-full accent-gradient-animated" style={{ inset: "-2px" }} />
                  <span className="relative z-10 inline-flex items-center gap-2 bg-white text-bg rounded-full px-5 py-2.5 text-sm">
                    View — <span className="font-display italic">{it.title}</span> Story
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent">
                <h3 className="text-xl md:text-2xl text-text-primary">
                  <span className="font-display italic">{it.title.split(" ")[0]}</span>{" "}
                  <span className="font-body font-light">{it.title.split(" ").slice(1).join(" ")}</span>
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
