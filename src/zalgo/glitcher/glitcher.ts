import CombiningCharacter from './combining-character';
import {XORShift32} from './random/XORShift32';


export type GlitchType = {
  btm?: boolean,
  top?: boolean,
  mid?: boolean
}

export class Glitcher {

  public static readonly DEFAULT_GLITCH_SCALE = 5;

  private scale: number = Glitcher.DEFAULT_GLITCH_SCALE;

  private glitchType: GlitchType = {btm: true, top: true, mid: true};

  private randomGenerator: XORShift32;

  constructor(scale: number = Glitcher.DEFAULT_GLITCH_SCALE, randomSeed: number = new Date().getTime()) {
    this.scale = scale;
    this.randomGenerator = new XORShift32(randomSeed);
  }

  setGlitchType(glitchType: GlitchType) {
    this.glitchType = {
      top: glitchType.top != null ? glitchType.top : this.glitchType.top,
      btm: glitchType.btm != null ? glitchType.btm : this.glitchType.btm,
      mid: glitchType.mid != null ? glitchType.mid : this.glitchType.mid,
    };
    return this;
  }

  doBottomSideGlitch(bottom: boolean) {
    this.glitchType.btm = bottom;
    return this;
  }

  doTopSideGlitch(top: boolean) {
    this.glitchType.top = top;
    return this;
  }

  doMiddleSideGlitch(middle: boolean) {
    this.glitchType.mid = middle;
    return this;
  }

  /**
   * glitch
   * @param origin 元の文字列
   * @param scale 量を決める定数。指定がなければ、Glitcher生成時の定数になる
   */
  public glitch(origin: string, scale = this.scale) {

    const pool = this.getGlitchCharPool();
    if (pool.length == 0) {
      return origin;
    }

    // javascriptでの文字列結合のパフォーマンスは図ってないのでよくわからず。遅かったら変える。
    const glitched = new Array<String>();
    for (const originElement of origin) {
      let s = originElement;

      for (let i = 0; i < scale; i++) {
        // glitch用の文字を取得
        const apply = pool[this.randomGenerator.getNextInt(0, pool.length - 1)];
        s += String.fromCodePoint(apply);
      }
      glitched.push(s);
    }

    return glitched.join('');
  }

  private getGlitchCharPool(): Array<number> {
    let array = new Array<number>();

    if (this.glitchType.top) array = array.concat(CombiningCharacter.TOP_CHAR);
    if (this.glitchType.btm) array = array.concat(CombiningCharacter.BOTTOM_CHAR);
    if (this.glitchType.mid) array = array.concat(CombiningCharacter.MID_CHAR);

    return array;
  }
}
