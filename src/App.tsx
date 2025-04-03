import { useState } from "react";
import { Button } from "./components/ui/button";
import { FocusCards } from "./components/ui/focus-cards";
import { ApplicationShell } from "./components/layout/ApplicationShell";
import headshot from "./assets/adobe_express_1.png";
import croatia from "./assets/IMG_0179.jpeg";
import { Spotlight } from "./components/ui/spotlight";

function App() {
  const cards = [
    {
      title: "Forest Adventure",
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

  // logo is 833 x302
  return (
    <ApplicationShell>
      <div className="flex justify-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />

        <img
          src={headshot}
          className=" inset-0 w-[80%] h-auto blur-[0.1px] pointer-events-none 
        [mask-image:linear-gradient(to_bottom,black_0%,transparent_99%)] 
        [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_70%)]"
        />
      </div>
      <FocusCards cards={cards} />
    </ApplicationShell>
  );
}

export default App;
