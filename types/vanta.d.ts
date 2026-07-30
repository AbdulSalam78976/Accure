declare module 'vanta/dist/vanta.net.min' {
  interface VantaEffectInstance {
    destroy: () => void;
    resize?: () => void;
  }

  interface VantaNetOptions {
    el: HTMLElement;
    THREE?: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    color2?: number;
    backgroundColor?: number;
    backgroundAlpha?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
  }

  const NET: (options: VantaNetOptions) => VantaEffectInstance;
  export default NET;
}
