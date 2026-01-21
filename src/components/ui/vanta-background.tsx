import React, { useState, useEffect, useRef } from 'react'
import TOPOLOGY from 'vanta/dist/vanta.topology.min'

export const VantaBackground = (props) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const myRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 2. Ensure we have the ref and haven't initialized yet
    if (!vantaEffect && myRef.current) {
      setVantaEffect(
        TOPOLOGY({
          el: myRef.current,
          //THREE: THREE, // 3. Pass THREE explicitly to Vanta
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          // Add your cold engineering colors here:
          color1: 0x22d3ee, 
          color2: 0x020617,
          backgroundColor: 0x020617,
        })
      )
    }
    // Cleanup to prevent memory leaks and "Multiple Canvas" bugs
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div ref={myRef} style={{ width: '100%', height: '100vh' }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
         Foreground content goes here
      </div>
    </div>
  )
}