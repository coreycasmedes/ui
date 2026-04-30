import { Link, useNavigate, useLocation } from "react-router-dom";

const useScrollTo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (id: string) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };
};

const navigateLinks = [
  { label: "About", section: "about" },
  { label: "Experience", section: "experience" },
];

const connectLinks = [
  { label: "GitHub", href: "https://github.com/coreycasmedes" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/coreycasmedes" },
];

const cls = "text-sm text-secondary/60 hover:text-primary transition-colors";

export const Footer = () => {
  const scrollTo = useScrollTo();
  return (
  <footer className="border-t border-border/10 bg-background mt-20">
    <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">
      <div className="flex flex-col md:flex-row md:justify-between gap-12">

        {/* Brand */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-md bg-surface flex items-center justify-center">
              <img src="/favicon.svg" alt="CC" className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-primary">Corey Casmedes</span>
          </Link>
          <p className="text-xs text-secondary/50 max-w-[200px] leading-relaxed">
            © {new Date().getFullYear()} Corey Casmedes.<br />All rights reserved.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-3 gap-10 md:gap-16">
          {/* Navigate */}
          <div>
            <p className="text-xs font-semibold text-primary mb-4">Navigate</p>
            <ul className="space-y-1.5">
              {navigateLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollTo(link.section)} className={cls}>
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/travel" className={cls}>Travel</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold text-primary mb-4">Connect</p>
            <ul className="space-y-1.5">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer" className={cls}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  </footer>
  );
};
