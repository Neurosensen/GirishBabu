import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { HlsVideo } from "./HlsVideo";

export const Footer = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  const phrase = "TRANSFORMING LIVES EVERY DAY • ";

  return (
    <footer className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <HlsVideo src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8" flipped />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden whitespace-nowrap py-8 mb-12">
          <div ref={marqueeRef} className="inline-flex">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary/90 px-4"
              >
                {phrase}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 text-center mb-16 md:mb-24">
          <h3 className="text-3xl md:text-5xl font-body font-light text-text-primary mb-3 text-balance">
            Ready to begin your <span className="font-display italic">transformation</span>?
          </h3>
          <p className="text-muted mb-8 max-w-md mx-auto">
            One conversation can change everything. Reach out and let's design your path forward.
          </p>
          <a
            href="https://wa.me/918884466677"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex rounded-full p-[1.5px] hover:scale-105 transition-transform"
          >
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 accent-gradient-animated transition-opacity" style={{ inset: "-2px" }} />
            <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-text-primary text-bg px-7 py-4 text-sm font-medium group-hover:bg-bg group-hover:text-text-primary transition-colors">
              Message on WhatsApp <span>↗</span>
            </span>
          </a>
        </div>

        {/* Footer bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-stroke">
          <div className="flex items-center gap-4">
            {[
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: MessageCircle, href: "https://wa.me/918884466677", label: "WhatsApp" },
              { Icon: Facebook, href: "#", label: "Facebook" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-stroke bg-surface/50 flex items-center justify-center text-muted hover:text-text-primary hover:border-accent/50 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="relative flex w-2.5 h-2.5">
              <span className="absolute inset-0 rounded-full bg-accent animate-pulse-soft" />
              <span className="relative rounded-full w-2.5 h-2.5 bg-accent" />
            </span>
            <span className="text-xs text-muted uppercase tracking-[0.2em]">
              Accepting new clients
            </span>
          </div>

          <div className="text-xs text-muted">© 2026 Girish Babu</div>
        </div>
      </div>
    </footer>
  );
};
