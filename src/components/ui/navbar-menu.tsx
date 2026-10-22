import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, ChevronDown, Globe } from "lucide-react";

const connectItems = [
  { icon: Github, label: "GitHub", href: "https://github.com/coreycasmedes" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/coreycasmedes" },
];

const travelItems = [{ icon: Globe, label: "Travel Map", href: "/travel" }];

// section = scrollIntoView target id; route = internal Link; external = new tab
const simpleNavItems = [
  { label: "About", section: "about" },
  { label: "Experience", section: "experience" },
  { label: "Projects", section: "projects" },
];


type DropdownItemProps = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  href: string;
  onNavigate?: () => void;
};

const DropdownItem = ({ icon: Icon, label, href, onNavigate }: DropdownItemProps) => {
  const inner = (
    <>
      <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center flex-shrink-0 group-hover:bg-border/20 transition-colors">
        <Icon size={15} className="text-secondary" />
      </div>
      <p className="text-sm font-medium text-primary">{label}</p>
    </>
  );

  const cls = "flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface transition-colors group";

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={href} onClick={onNavigate} className={cls}>
      {inner}
    </Link>
  );
};

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // True while the dropdown is open only because the pointer is over it
  const hoverOpened = useRef(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (!dropdownOpen) hoverOpened.current = true;
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    if (!hoverOpened.current) return;
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };
  // A click pins a hover-opened dropdown open; otherwise it toggles
  const toggleDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (dropdownOpen && hoverOpened.current) {
      hoverOpened.current = false;
      return;
    }
    hoverOpened.current = false;
    setDropdownOpen((o) => !o);
  };

  // Any route change (including back/forward) closes both menus
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setDropdownOpen(false);
    setMobileOpen(false);
  }

  // Escape closes either menu; a pointer down outside closes the dropdown
  useEffect(() => {
    if (!dropdownOpen && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (dropdownOpen) {
        setDropdownOpen(false);
        triggerRef.current?.focus();
      }
      setMobileOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [dropdownOpen, mobileOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        mobileOpen
          ? "bg-background border-border/10"
          : scrolled
            ? "bg-background/95 border-border/10"
            : "bg-transparent border-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 flex items-center justify-between h-14">
        {/* Logo + Desktop nav */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 flex-shrink-0"
          >
            <div className="w-7 h-7 rounded-md bg-surface flex items-center justify-center">
              <img src="/favicon.svg" alt="" className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-primary">Corey Casmedes</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {simpleNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.section)}
                className="px-4 py-1.5 text-sm text-secondary hover:text-primary transition-colors rounded-full hover:bg-surface"
              >
                {item.label}
              </button>
            ))}

            {/* Dropdown trigger */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setDropdownOpen(false);
              }}
            >
              <button
                ref={triggerRef}
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
                aria-controls="more-menu"
                className="flex items-center gap-1 px-4 py-1.5 text-sm text-secondary hover:text-primary transition-colors rounded-full hover:bg-surface"
              >
                More
                <motion.span animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={13} />
                </motion.span>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    id="more-menu"
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-[calc(100%+0.75rem)] left-1/2 -translate-x-1/2 w-[380px] rounded-2xl bg-card border border-border/10 shadow-2xl overflow-hidden"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="grid grid-cols-2 divide-x divide-border/10">
                      <div className="p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary/60 mb-4">Travel</p>
                        <div className="space-y-1">
                          {travelItems.map((item) => (
                            <DropdownItem key={item.label} {...item} onNavigate={() => setDropdownOpen(false)} />
                          ))}
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary/60 mb-4">Connect</p>
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
          target="_blank"
          rel="noreferrer"
          className="hidden md:block flex-shrink-0 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-background hover:bg-primary transition-colors"
        >
          Contact
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
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
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {simpleNavItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { scrollTo(item.section); setMobileOpen(false); }}
                  className="py-2.5 text-left text-sm text-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => setMobileMoreOpen((o) => !o)}
                aria-expanded={mobileMoreOpen}
                className="flex items-center justify-between py-2.5 text-sm text-secondary hover:text-primary transition-colors"
              >
                More
                <motion.span animate={{ rotate: mobileMoreOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
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
                    {[...travelItems, ...connectItems].map(({ label, href }) => {
                      const cls = "block py-2 text-sm text-secondary/60 hover:text-primary transition-colors";
                      if (href.startsWith("http")) {
                        return (
                          <a key={label} href={href} target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)} className={cls}>
                            {label}
                          </a>
                        );
                      }
                      return (
                        <Link key={label} to={href} onClick={() => setMobileOpen(false)} className={cls}>
                          {label}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href="https://www.linkedin.com/in/coreycasmedes"
                target="_blank"
                rel="noreferrer"
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
