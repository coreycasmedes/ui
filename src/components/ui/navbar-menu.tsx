import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  ChevronDown,
  FileText,
  Lightbulb,
  Globe,
} from "lucide-react";

const connectItems = [
  { icon: Github, label: "GitHub", href: "https://github.com/coreycasmedes" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/coreycasmedes",
  },
];

const travelItems = [{ icon: Globe, label: "Travel Map", href: "/travel" }];

const blogItems = [
  { icon: FileText, label: "Writing", href: "#" },
  { icon: Lightbulb, label: "Notes", href: "#" },
];

const simpleNavItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
];

const DropdownItem = ({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  href: string;
}) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noreferrer"
    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface transition-colors group"
  >
    <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center flex-shrink-0 group-hover:bg-border/20 transition-colors">
      <Icon size={15} className="text-secondary" />
    </div>
    <p className="text-sm font-medium text-primary">{label}</p>
  </a>
);

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        scrolled
          ? "bg-background/95 border-border/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 flex items-center justify-between h-14">
        {/* Logo + Desktop nav */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-7 h-7 rounded-md bg-surface flex items-center justify-center">
              <img src="/favicon.svg" alt="CC" className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-primary">
              Corey Casmedes
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {simpleNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 text-sm text-secondary hover:text-primary transition-colors rounded-full hover:bg-surface"
              >
                {item.label}
              </a>
            ))}

            {/* Dropdown trigger */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button className="flex items-center gap-1 px-4 py-1.5 text-sm text-secondary hover:text-primary transition-colors rounded-full hover:bg-surface">
                More
                <motion.span
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={13} />
                </motion.span>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-[calc(100%+0.75rem)] left-1/2 -translate-x-1/2 w-[560px] rounded-2xl bg-card border border-border/10 shadow-2xl overflow-hidden"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="grid grid-cols-3 divide-x divide-border/10">
                      <div className="p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary/50 mb-4">
                          Travel
                        </p>
                        <div className="space-y-1">
                          {travelItems.map((item) => (
                            <DropdownItem key={item.label} {...item} />
                          ))}
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary/50 mb-4">
                          Blog
                        </p>
                        <div className="space-y-1">
                          {blogItems.map((item) => (
                            <DropdownItem key={item.label} {...item} />
                          ))}
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary/50 mb-4">
                          Connect
                        </p>
                        <div className="space-y-1">
                          {connectItems.map((item) => (
                            <DropdownItem key={item.label} {...item} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>

        {/* Desktop CTA */}
        <a
          href="https://www.linkedin.com/in/coreycasmedes"
          className="hidden md:block flex-shrink-0 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-background hover:bg-primary transition-colors"
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
            className="block h-px w-6 bg-primary origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-px w-6 bg-primary"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-px w-6 bg-primary origin-center"
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
            className="md:hidden border-t border-border/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {simpleNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-sm text-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <button
                onClick={() => setMobileMoreOpen((o) => !o)}
                className="flex items-center justify-between py-2.5 text-sm text-secondary hover:text-primary transition-colors"
              >
                More
                <motion.span
                  animate={{ rotate: mobileMoreOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {mobileMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.15 }}
                    className="overflow-hidden pl-3 border-l border-border/10 space-y-1"
                  >
                    {[...travelItems, ...blogItems, ...connectItems].map(
                      ({ label, href }) => (
                        <a
                          key={label}
                          href={href}
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noreferrer"
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-secondary/60 hover:text-primary transition-colors"
                        >
                          {label}
                        </a>
                      ),
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href="https://www.linkedin.com/in/coreycasmedes"
                className="mt-3 text-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background hover:bg-primary transition-colors"
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
