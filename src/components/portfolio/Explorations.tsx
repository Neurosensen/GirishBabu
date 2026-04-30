import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const LEFT = [
  { src: g1, rot: -3, aspect: "aspect-square", label: "115kg → 63kg" },
  { src: g3, rot: 2, aspect: "aspect-[3/4]", label: "Stage day" },
  { src: g5, rot: -2, aspect: "aspect-[3/4]", label: "Mid-journey" },
];
const RIGHT = [
  { src: g2, rot: 3, aspect: "aspect-[3/4]", label: "The starting point" },
  { src: g4, rot: -2, aspect: "aspect-[3/4]", label: "Plateau days" },
  { src: g6, rot: 2, aspect: "aspect-[3/4]", label: "Before the change" },
];

export const Explorations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });
      gsap.fromTo(
        leftColRef.current,
        { y: 100 },
        {
          y: -200,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        rightColRef.current,
        { y: -100 },
        {
          y: 200,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[300vh] bg-bg overflow-hidden">
      {/* Layer 1: pinned content */}
      <div ref={contentRef} className="relative z-10 h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">My Story</span>
            <span className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-5xl md:text-7xl font-body font-light text-text-primary leading-tight tracking-tight">
            From 115kg to <span className="font-display italic">63kg</span>
          </h2>
          <p className="mt-5 text-base text-muted text-balance">
            14 months. 52 kilograms. A complete lifestyle rewrite. The same path I now guide my clients through, every single day.
          </p>
          <a
            href="https://wa.me/918884466677"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex rounded-full p-[1.5px] mt-8"
          >
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 accent-gradient-animated transition-opacity" style={{ inset: "-2px" }} />
            <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-stroke bg-surface text-text-primary text-sm px-6 py-3">
              Start your journey on WhatsApp <span className="text-accent">↗</span>
            </span>
          </a>
        </div>
      </div>

      {/* Layer 2: parallax columns */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
        <div className="max-w-[1400px] mx-auto h-full px-6 md:px-12 grid grid-cols-2 gap-40">
          <div ref={leftColRef} className="flex flex-col gap-24 pt-[20vh]">
            {LEFT.map((it, i) => (
              <button
                key={i}
                onClick={() => setLightbox(it.src)}
                style={{ transform: `rotate(${it.rot}deg)` }}
                className="pointer-events-auto relative self-start aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl border border-stroke bg-surface group"
              >
                <img src={it.src} alt={it.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-text-primary font-display italic">{it.label}</span>
                </div>
              </button>
            ))}
          </div>
          <div ref={rightColRef} className="flex flex-col gap-24 pt-[40vh]">
            {RIGHT.map((it, i) => (
              <button
                key={i}
                onClick={() => setLightbox(it.src)}
                style={{ transform: `rotate(${it.rot}deg)` }}
                className="pointer-events-auto relative self-end aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-2xl border border-stroke bg-surface group"
              >
                <img src={it.src} alt={it.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-text-primary font-display italic">{it.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt=""
              className="max-w-full max-h-full rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
