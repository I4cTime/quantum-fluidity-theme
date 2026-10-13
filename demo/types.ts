/** Shared shapes for the demo engine. */
export class StateVector {
  constructor(public readonly amplitudes: number[] = []) {}
}

export class Matrix extends StateVector {
  readonly rank: number = 2;
}
