import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HlsVideo } from "./HlsVideo";
import portrait from "@/assets/girish-portrait.png";

const ROLES = ["Health Coach", "Wellness Mentor", "Nutrition Guide", "Fitness Advocate"];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".name-reveal", { opacity: 0, y: 50, duration: 1.2, delay: 0.1 })
        .from(".blur-in", { opacity: 0, filter: "blur(10px)", y: 20, duration: 1, stagger: 0.1 }, 0.3)
        .from(".portrait-reveal", { opacity: 0, scale: 1.05, y: 40, duration: 1.4 }, 0.2);
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={rootRef} className="relative w-full min-h-screen overflow-hidden bg-bg">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <HlsVideo src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8" />
        <div className="absolute inset-0 bg-bg/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/30" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 min-h-screen max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: text */}
        <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
          <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-6 lg:mb-8">
            WELLNESS JOURNEY '26
          </p>

          <h1 className="name-reveal text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-5">
            Girish Babu
          </h1>

          <p className="blur-in text-lg md:text-2xl lg:text-3xl text-text-primary/90 mb-5">
            A{" "}
            <span
              key={roleIndex}
              className="font-display italic text-text-primary animate-role-fade-in inline-block"
            >
              {ROLES[roleIndex]}
            </span>{" "}
            transforming lives.
          </p>

          <p className="blur-in text-sm md:text-base text-muted max-w-md mb-10 mx-auto lg:mx-0 text-balance">
            Empowering healthier, happier lifestyles. Guiding you step-by-step toward your ultimate
            physical and mental well-being.
          </p>

          <div className="blur-in inline-flex flex-col sm:flex-row gap-4">
            <button onClick={() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })} className="group relative rounded-full p-[1.5px] hover:scale-105 transition-transform cursor-pointer">
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 accent-gradient-animated transition-opacity" style={{ inset: "-2px" }} />
              <span className="relative z-10 inline-flex items-center justify-center rounded-full bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary text-sm px-7 py-3.5 font-medium transition-colors">
                Start Your Journey
              </span>
            </button>

            <a href="https://wa.me/918884466677" target="_blank" rel="noopener noreferrer" className="group relative rounded-full p-[1.5px] hover:scale-105 transition-transform">
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 accent-gradient-animated transition-opacity" style={{ inset: "-2px" }} />
              <span className="relative z-10 inline-flex items-center justify-center rounded-full border-2 border-stroke group-hover:border-transparent bg-bg text-text-primary text-sm px-7 py-3.5 font-medium transition-colors">
                WhatsApp +91 8884466677
              </span>
            </a>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="portrait-reveal relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-full lg:max-w-[460px] aspect-[4/5]">
            {/* Glow ring */}
            <div className="absolute -inset-3 rounded-[2rem] accent-gradient-animated opacity-30 blur-2xl" />
            {/* Frame */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-stroke bg-surface">
              <img
                src={portrait}
                alt="Girish Babu, wellness coach"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle bottom darkening */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/80 to-transparent" />
              {/* Floating credential pill */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-full bg-bg/70 backdrop-blur-md border border-white/10 px-4 py-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-accent animate-pulse-soft" />
                    <span className="relative rounded-full w-2 h-2 bg-accent" />
                  </span>
                  <span className="text-[11px] text-text-primary uppercase tracking-[0.2em]">
                    Coaching live
                  </span>
                </div>
                <span className="text-[11px] text-muted uppercase tracking-[0.15em] hidden sm:inline">
                  Bengaluru, IN
                </span>
              </div>
            </div>
            {/* Corner badge */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 rounded-full bg-bg border border-stroke px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg shadow-black/40">
              <span className="font-display italic text-text-primary text-sm sm:text-base">
                6+ <span className="text-muted text-xs not-italic font-body uppercase tracking-wider">yrs</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute inset-x-0 h-1/2 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};
