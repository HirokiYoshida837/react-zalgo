import {IRandomGenerator, IRandomGeneratorFactory} from './IRandomGenerator';

export class XORShift32 implements IRandomGenerator {

  private readonly seed: number;

  private x: number;
  private y: number;
  private z: number;
  private w: number;

  constructor(seed = 88675123) {

    // random generatorインスタンス生成時に固定
    this.seed = seed;

    this.x = 123456789;
    this.y = 362436069;
    this.z = 521288629;
    this.w = seed;
  }

  getNext(): number {
    const t = this.x ^ (this.x << 11);
    this.x = this.y;
    this.y = this.z;
    this.z = this.w;
    return this.w = (this.w ^ (this.w >>> 19)) ^ (t ^ (t >>> 8));
  }

  // mod で切ってるので偏りがあるかも。
  getNextInt(min: number, max: number): number {
    const r = Math.abs(this.getNext());
    return min + (r % (max + 1 - min));
  }
}

export const DefaultXORShift32GeneratorFactory: IRandomGeneratorFactory = {
  create(): IRandomGenerator {
    return new XORShift32();
  }
}