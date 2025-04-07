import { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export const ApplicationShell = ({ children }: PropsWithChildren<{}>) => {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(10, 10, 25)" // deep navy / near black
      gradientBackgroundEnd="rgb(25, 25, 40)" // dark slate
      firstColor="0, 255, 200" // neon aqua
      secondColor="100, 100, 255" // soft neon blue
      thirdColor="180, 180, 255" // light violet-blue
      fourthColor="255, 255, 255" // white for contrast
      fifthColor="120, 255, 255" // light cyan
      pointerColor="255, 255, 255" // white pointer (like a laser dot)
      size="60%" // slightly smaller for clean look
      blendingValue="screen" // cleaner and sharper blending
      interactive={true}
      className="your-custom-class"
      containerClassName="your-container-class"
    >
      <div className="absolute z-50 inset-0 flex flex-col min-h-screen overflow-auto">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </BackgroundGradientAnimation>
  );
};
