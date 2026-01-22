declare module "vanta/dist/vanta.topology.min" {
  interface VantaEffect {
    destroy: () => void;
    setOptions: (options: Record<string, unknown>) => void;
    resize: () => void;
  }

  interface VantaOptions {
    el: HTMLElement | null;
    THREE?: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    // Add other options you use
  }

  export default function TOPOLOGY(options: VantaOptions): VantaEffect;
}
