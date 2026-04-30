import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { toast } from "sonner";
import j1 from "@/assets/journal-1.jpg";
import j2 from "@/assets/journal-2.jpg";
import j3 from "@/assets/journal-3.jpg";
import j4 from "@/assets/journal-4.jpg";

const ENTRIES = [
  { title: "Building Sustainable Eating Habits", img: j1, read: "5 min", date: "Apr 12, 2026" },
  { title: "Mindful Mornings: A Wellness Routine", img: j2, read: "7 min", date: "Mar 28, 2026" },
  { title: "Eat Local, Live Better", img: j3, read: "4 min", date: "Mar 14, 2026" },
  { title: "The Power of Daily Movement", img: j4, read: "6 min", date: "Feb 22, 2026" },
];

export const Journal = () => {
  const handleEntryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info("Journal article coming soon!");
  };

  return (
    <section id="philosophy" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Journal"
          title="Wellness insights"
          italicWord="insights"
          subtitle="Field notes, frameworks and reflections from years of guiding transformations."
          cta={{ 
            label: "Read all", 
            href: "#",
            onClick: (e) => {
              e.preventDefault();
              toast.info("Full journal coming soon!");
            }
          }}
        />

        <div className="space-y-4">
          {ENTRIES.map((e, i) => (
            <motion.a
              key={e.title}
              href="#"
              onClick={handleEntryClick}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: "easeOut" }}
              className="group flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors"
            >
              <div className="relative w-full sm:w-20 h-40 sm:h-20 rounded-3xl sm:rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0 px-2 sm:px-0">
                <h3 className="text-lg md:text-xl text-text-primary truncate">
                  <span className="font-body font-light">{e.title}</span>
                </h3>
                <p className="text-xs text-muted mt-1 uppercase tracking-wider">
                  {e.read} read · {e.date}
                </p>
              </div>
              <div className="flex items-center gap-3 sm:gap-5 sm:pr-6">
                <span className="text-xs text-muted uppercase tracking-[0.2em] hidden md:inline">
                  Read article
                </span>
                <span className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-bg transition-colors">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
