
export interface IRandomGenerator {
  getNext(): number;
  getNextInt(min: number, max: number): number;
}
