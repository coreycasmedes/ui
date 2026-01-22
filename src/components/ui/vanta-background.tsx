import { useEffect, useRef } from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";

export const VantaBackground = () => {
  const myRef = useRef(null);
  const vantaRef = useRef<ReturnType<typeof TOPOLOGY> | null>(null);

  useEffect(() => {
    if (!vantaRef.current) {
      vantaRef.current = TOPOLOGY({
        el: myRef.current,
      });
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
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
