import { useEffect, useRef } from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";

export const VantaBackground = () => {
  const myRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current && myRef.current) {
      vantaEffect.current = TOPOLOGY({
        el: myRef.current,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <>
      <div ref={myRef} className="fixed inset-0 -z-10 w-full h-full"></div>
      {/* Overlay for better contrast */}
      <div className="fixed inset-0 -z-10 bg-black/35 "></div>
    </>
  );
};
