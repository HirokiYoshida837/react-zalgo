export interface IRandomGenerator {

  /**
   * getNextRandomValue(between 0 and 1)
   */
  getNext(): number;

  /**
   * get next randomNumber(int)
   * @param min
   * @param max
   */
  getNextInt(min: number, max: number): number;
}

export interface IRandomGeneratorFactory {
  create(): IRandomGenerator
}