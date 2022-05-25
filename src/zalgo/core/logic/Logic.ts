import CombiningCharacter from '../constants/combining-character';
import {
  IRandomGenerator,
  IRandomGeneratorFactory
} from '../random/IRandomGenerator';
import { DefaultRandomGeneratorFactory } from '../random/DefaultRandomGenerator';

/**
 * note: the return value must be greater than 0;
 */
export type GetAmountFunc = ((x: number) => number) | (() => number);

export type GlitchParams = {
  readonly topGlitchAmount?: GetAmountFunc;
  readonly midGlitchAmount?: GetAmountFunc;
  readonly btmGlitchAmount?: GetAmountFunc;

  readonly randomGeneratorFactory?: IRandomGeneratorFactory;
};

export const Glitch = (body: string, params?: GlitchParams) => {
  const randomGenerator: IRandomGenerator =
    params?.randomGeneratorFactory?.create() ??
    DefaultRandomGeneratorFactory.create();

  const glitched = new Array<string>();

  Array<string>().forEach.call(body, (item: string, i: number) => {
    // bottomSide
    const btmTimes = params?.btmGlitchAmount ? params.btmGlitchAmount(i) : 0;
    const btmNumbers = Array.from(Array(btmTimes).keys())
      .map((_) => Math.max(randomGenerator.getNextInt(0, btm.length - 1), 0))
      .map((x) => btm[x]);

    // midSide
    const midTimes = params?.midGlitchAmount ? params.midGlitchAmount(i) : 0;
    const midNumbers = Array.from(Array(midTimes).keys())
      .map((_) => Math.max(randomGenerator.getNextInt(0, mid.length - 1), 0))
      .map((x) => mid[x]);

    // topSide
    const topTimes = params?.topGlitchAmount ? params.topGlitchAmount(i) : 0;
    const topNumbers = Array.from(Array(topTimes).keys())
      .map((_) => Math.max(randomGenerator.getNextInt(0, top.length - 1), 0))
      .map((x) => top[x]);

    // join glitching text.
    glitched.push(
      String.fromCodePoint(
        item.charCodeAt(0),
        ...btmNumbers,
        ...midNumbers,
        ...topNumbers
      )
    );
  });

  return glitched.join('');
};

const top = CombiningCharacter.TOP_CHAR;
const mid = CombiningCharacter.MID_CHAR;
const btm = CombiningCharacter.BOTTOM_CHAR;
