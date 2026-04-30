import { motion } from "framer-motion";

const STATS = [
  { value: "6+", label: "Years Experience", note: "Coaching transformations" },
  { value: "52kgs", label: "Weight Loss", note: "Personal record in 14 months" },
  { value: "100%", label: "Commitment", note: "To every client journey" },
];

export const Stats = () => {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative p-8 md:p-10 bg-surface/40 border border-stroke rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-6xl md:text-7xl font-display italic text-text-primary leading-none">
                {s.value}
              </div>
              <div className="mt-6 text-xs text-muted uppercase tracking-[0.25em]">{s.label}</div>
              <div className="mt-2 text-sm text-text-primary/80">{s.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
