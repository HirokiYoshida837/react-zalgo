import { IRandomGenerator, IRandomGeneratorFactory } from './IRandomGenerator';

export const DefaultRandomGenerator: IRandomGenerator = {
  getNext(): number {
    return Math.random();
  },
  getNextInt(min: number, max: number): number {
    return min + Math.ceil(max * Math.random());
  }
};

export const DefaultRandomGeneratorFactory: IRandomGeneratorFactory = {
  create(): IRandomGenerator {
    return DefaultRandomGenerator;
  }
};
