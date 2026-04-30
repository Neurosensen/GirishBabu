import { motion } from "framer-motion";
import { ReactNode } from "react";

export const SectionHeader = ({
  eyebrow,
  title,
  italicWord,
  subtitle,
  cta,
}: {
  eyebrow: string;
  title: string;
  italicWord: string;
  subtitle: string;
  cta?: { label: string; href: string; onClick?: (e: React.MouseEvent) => void };
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
    >
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">{eyebrow}</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light text-text-primary leading-tight tracking-tight">
          {title.split(italicWord)[0]}
          <span className="font-display italic">{italicWord}</span>
          {title.split(italicWord)[1]}
        </h2>
        <p className="mt-5 text-base text-muted max-w-md">{subtitle}</p>
      </div>
      {cta && (
        <a
          href={cta.href}
          onClick={cta.onClick}
          className="group relative rounded-full p-[1.5px] hidden md:inline-flex self-end"
        >
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 accent-gradient-animated transition-opacity" style={{ inset: "-2px" }} />
          <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-stroke bg-surface text-text-primary text-sm px-5 py-2.5">
            {cta.label} <span className="text-accent">→</span>
          </span>
        </a>
      )}
    </motion.div>
  );
};
