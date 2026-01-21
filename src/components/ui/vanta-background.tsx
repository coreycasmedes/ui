import { useState, useEffect, useRef } from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";

export const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TOPOLOGY({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={myRef} className="fixed inset-0 -z-10 w-full h-full"></div>;
};
