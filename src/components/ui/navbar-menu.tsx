import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center">
            <img src="/favicon.svg" alt="CC" className="w-4 h-4 invert" />
          </div>
          <span className="text-sm font-semibold text-white">
            Corey Casmedes
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHovered(item.label)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-4 py-1.5 text-sm text-neutral-400 hover:text-white transition-colors rounded-full"
            >
              {hovered === item.label && (
                <motion.span
                  layoutId="navbar-pill"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.35 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://www.linkedin.com/in/coreycasmedes"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block flex-shrink-0 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black hover:bg-neutral-200 transition-colors"
        >
          Contact
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-px w-6 bg-white origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-px w-6 bg-white"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-px w-6 bg-white origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/coreycasmedes"
                target="_blank"
                rel="noreferrer"
                className="mt-3 text-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-neutral-200 transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
