import { Link } from "react-router-dom";

const columns = [
  {
    heading: "Navigate",
    links: [
      { label: "About", href: "/#about" },
      { label: "Experience", href: "/#experience" },
      { label: "Travel", href: "/travel" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com/coreycasmedes" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/coreycasmedes" },
    ],
  },
];

export const Footer = () => (
  <footer className="border-t border-border/10 bg-background mt-20">
    <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        {/* Brand */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-md bg-surface flex items-center justify-center">
              <img src="/favicon.svg" alt="CC" className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-primary">
              Corey Casmedes
            </span>
          </Link>
          <p className="text-xs text-secondary/50 max-w-[200px] leading-relaxed">
            © {new Date().getFullYear()} Corey Casmedes. <br />
            All rights reserved.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-3 gap-10 md:gap-16">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold text-primary mb-4">
                {col.heading}
              </p>
              <ul className="space-y-1.5">
                {col.links.map((link) => {
                  const external =
                    link.href.startsWith("http") ||
                    link.href.startsWith("mailto");
                  return (
                    <li key={link.label}>
                      {external ? (
                        <a
                          href={link.href}
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noreferrer"
                          className="text-sm text-secondary/60 hover:text-primary transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-sm text-secondary/60 hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
