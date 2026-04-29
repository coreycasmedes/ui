import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  ScrollText,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  FileText,
  Lightbulb,
} from "lucide-react";

const connectItems = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/coreycasmedes",
    desc: "Open source & personal projects",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/coreycasmedes",
    desc: "Professional profile",
  },
];

const projectItems = [
  {
    icon: ScrollText,
    label: "Patent",
    href: "https://patents.justia.com/patent/20240089325",
    desc: "Vehicle Trip Loss Risk Assessment",
  },
  {
    icon: FolderGit2,
    label: "Wireguard Tunnel",
    href: "#",
    desc: "Domain-based VPN split tunnel",
  },
];

const blogItems = [
  { icon: FileText, label: "Writing", href: "#", desc: "Coming soon" },
  { icon: Lightbulb, label: "Notes", href: "#", desc: "Ideas & learnings" },
];

const simpleNavItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
];

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 flex items-center justify-between h-14">
        {/* Logo + Desktop nav */}
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center">
              <img src="/favicon.svg" alt="CC" className="w-4 h-4 invert" />
            </div>
            <span className="text-sm font-semibold text-white">
              Corey Casmedes
            </span>
          </a>

        <nav className="hidden md:flex items-center gap-1">
          {simpleNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-1.5 text-sm text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
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
            <button className="flex items-center gap-1 px-4 py-1.5 text-sm text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/10">
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
                  className="absolute top-[calc(100%+0.75rem)] left-1/2 -translate-x-1/2 w-[620px] rounded-2xl bg-[#111111] border border-white/[0.08] shadow-2xl overflow-hidden"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
                    {/* Projects */}
                    <div className="p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 mb-4">
                        Projects
                      </p>
                      <div className="space-y-1">
                        {projectItems.map(
                          ({ icon: Icon, label, href, desc }) => (
                            <a
                              key={label}
                              href={href}
                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                                <Icon size={15} className="text-neutral-400" />
                              </div>
                              <p className="text-sm font-medium text-neutral-200">
                                {label}
                              </p>
                            </a>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Blog */}
                    <div className="p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 mb-4">
                        Blog
                      </p>
                      <div className="space-y-1">
                        {blogItems.map(({ icon: Icon, label, href, desc }) => (
                          <a
                            key={label}
                            href={href}
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                              <Icon size={15} className="text-neutral-400" />
                            </div>
                            <p className="text-sm font-medium text-neutral-200">
                              {label}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Connect */}
                    <div className="p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 mb-4">
                        Connect
                      </p>
                      <div className="space-y-1">
                        {connectItems.map(
                          ({ icon: Icon, label, href, desc }) => (
                            <a
                              key={label}
                              href={href}
                              target={
                                href.startsWith("http") ? "_blank" : undefined
                              }
                              rel="noreferrer"
                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                                <Icon size={15} className="text-neutral-400" />
                              </div>
                              <p className="text-sm font-medium text-neutral-200">
                                {label}
                              </p>
                            </a>
                          ),
                        )}
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
          href="mailto:corey.casm@gmail.com"
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
              {simpleNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile "More" accordion */}
              <button
                onClick={() => setMobileMoreOpen((o) => !o)}
                className="flex items-center justify-between py-2.5 text-sm text-neutral-400 hover:text-white transition-colors"
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
                    className="overflow-hidden pl-3 border-l border-white/[0.06] space-y-1"
                  >
                    {[...projectItems, ...blogItems, ...connectItems].map(
                      ({ label, href }) => (
                        <a
                          key={label}
                          href={href}
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noreferrer"
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-neutral-500 hover:text-white transition-colors"
                        >
                          {label}
                        </a>
                      ),
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href="mailto:corey.casm@gmail.com"
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
