import type { ReactNode } from "react";
import { Navbar } from "@/components/ui/navbar-menu";
import { Footer } from "@/components/ui/footer";

// HashRouter treats "#main" as a route, so the skip link moves focus itself.
const skipToMain = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById("main")?.focus();
};

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background flex flex-col">
    <a
      href="#main"
      onClick={skipToMain}
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background"
    >
      Skip to content
    </a>
    <Navbar />
    <main id="main" tabIndex={-1} className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
);
