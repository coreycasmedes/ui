import { useState } from "react";
import { Button } from "./components/ui/button";
import { FocusCards } from "./components/ui/focus-cards";
import { ApplicationShell } from "./components/layout/ApplicationShell";
import headshot from "./assets/adobe_express_1.png";
import croatia from "./assets/IMG_0179.jpeg";
import { Spotlight } from "./components/ui/spotlight";
import { FlipWords } from "./components/ui/flip-words";

function App() {
  const cards = [
    {
      title: "Croatia",
      src: croatia,
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];
  const words = ["Software", "Full Stack", "Security"];

  // logo is 833 x302
  return (
    <ApplicationShell>
      <div>
        <div className="absolute pt-60  pl-60 font-assistant text-4xl mx-auto text-neutral-600 dark:text-neutral-400  ">
          <div className="flex flex-col gap-4  md:flex-row">
            <div className="flex">
              <FlipWords className="flex" duration={500} words={words} />
            </div>
            <p className="absolute pl-0 md:pl-[52%] font-bold">Engineer</p>
          </div>
        </div>

        <div className="flex flex-col justify-center pb-96">
          {/* <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        /> */}

          <img
            src={headshot}
            className="relative inset-0 w-[50%] h-auto blur-[0.1px] pointer-events-none 
        [mask-image:linear-gradient(to_bottom,black_0%,transparent_99%)] 
        [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_70%)]"
          />
        </div>
      </div>

      <FocusCards cards={cards} />
    </ApplicationShell>
  );
}

export default App;
