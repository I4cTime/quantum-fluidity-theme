// Minimal ambient types so the demo files type-check without node_modules.
// The demo folder exists for README screenshots, not to run.
declare module 'react' {
  namespace React {
    type FC<P = {}> = (props: P) => unknown;
    function useState<S>(initial: S): [S, (next: S) => void];
    function useEffect(effect: () => void | (() => void), deps?: readonly unknown[]): void;
  }
  export = React;
}

declare namespace JSX {
  interface IntrinsicElements {
    [element: string]: Record<string, unknown>;
  }
}

declare function FluidityCore(): ClassDecorator;
declare function calculateWaveFunction(input: {
  baseMatrix: string;
  decayRate: number;
  isAgentic: boolean;
}): Promise<unknown>;
