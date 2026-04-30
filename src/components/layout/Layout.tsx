import type { ReactNode } from "react";
import { Navbar } from "@/components/ui/navbar-menu";
import { Footer } from "@/components/ui/footer";

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);
