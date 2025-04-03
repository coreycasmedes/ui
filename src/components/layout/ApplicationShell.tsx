import { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const ApplicationShell = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
