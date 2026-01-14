import { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
  return (
    <header className="w-full border-b-2 border-[#1B1B1B]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <a href="/" className="font-mono text-sm font-medium text-[#1B1B1B] tracking-tight">
          CC
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a
            href="/work"
            className="font-mono text-sm text-[#1B1B1B] hover:text-[#C4A77D] transition-colors"
          >
            Work
          </a>
          <a
            href="/about"
            className="font-mono text-sm text-[#1B1B1B] hover:text-[#C4A77D] transition-colors"
          >
            About
          </a>
          <a
            href="/contact"
            className="px-4 py-2 bg-[#1B1B1B] text-[#F5F2ED] font-mono text-sm hover:bg-[#C4A77D] transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
