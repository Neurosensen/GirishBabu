import { useEffect, useState } from "react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Transformations", href: "#works" },
  { label: "Journal", href: "#philosophy" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <nav
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-2 py-2 transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/40" : ""
        }`}
      >
        {NAV.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
              active === item.label
                ? "text-text-primary bg-stroke/50"
                : "text-muted hover:text-text-primary hover:bg-stroke/50"
            }`}
          >
            {item.label}
          </a>
        ))}

        <span className="w-px h-5 bg-stroke mx-1" />

        <a
          href="https://wa.me/918884466677"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-xs sm:text-sm rounded-full p-[1.5px]"
        >
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 accent-gradient-animated transition-opacity"
            style={{ inset: "-2px" }}
          />
          <span className="relative z-10 flex items-center gap-1 bg-surface rounded-full backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary">
            WhatsApp Me <span className="text-accent">↗</span>
          </span>
        </a>
      </nav>
    </header>
  );
};
