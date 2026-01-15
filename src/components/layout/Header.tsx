import { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
  return (
    <header className="w-full border-b-2 border-[#F5F2ED]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo/Name - Initials on mobile, full name on desktop */}
        <a
          href="/"
          className="font-[family-name:var(--font-display)] text-sm font-bold text-[#F5F2ED] tracking-tight uppercase"
        >
          <span className="md:hidden">CC</span>
          <span className="hidden md:inline">Corey Casmedes</span>
        </a>

        {/* Navigation - Simplified on mobile */}
        <nav className="flex items-center gap-4 md:gap-8">
          <a
            href="/work"
            className="hidden sm:block text-sm text-[#F5F2ED] hover:text-[#D97757] transition-colors"
          >
            Work
          </a>
          <a
            href="/about"
            className="hidden sm:block text-sm text-[#F5F2ED] hover:text-[#D97757] transition-colors"
          >
            About
          </a>
          <a
            href="/contact"
            className="px-3 py-1.5 md:px-4 md:py-2 bg-[#F5F2ED] text-[#1B1B1B] text-sm font-medium hover:bg-[#D97757] hover:text-[#F5F2ED] transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
