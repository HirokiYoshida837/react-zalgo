import React from 'react';
import { Glitch, GlitchParams } from '../logic/Logic';

export interface ZalgoProps {
  /**
   * the text which want to glitching.
   */
  textData: string;

  /**
   * amount of glitching text;
   */
  scale?: number;

  /**
   * the params of controlling glitching amount.
   */
  glitchParams?: GlitchParams;
}

/**
 * Primary UI component for user interaction
 */
export const Zalgo: React.FC<ZalgoProps> = ({
  glitchParams,
  scale,
  textData
}: ZalgoProps) => {
  const topSide = glitchParams?.topGlitchAmount
    ? glitchParams?.topGlitchAmount
    : () => scale ?? 10;

  const midSide = glitchParams?.midGlitchAmount
    ? glitchParams?.midGlitchAmount
    : () => scale ?? 10;

  const btmSide = glitchParams?.btmGlitchAmount
    ? glitchParams?.btmGlitchAmount
    : () => scale ?? 10;

  // create glitched text every a LF Code.
  const texts = textData.split('\n').map((item, index) => {
    const glitched = Glitch(item, {
      topGlitchAmount: topSide,
      midGlitchAmount: midSide,
      btmGlitchAmount: btmSide,
      randomGeneratorFactory: glitchParams?.randomGeneratorFactory
    });

    return (
      // <></> does not have key.
      <React.Fragment key={index}>
        {glitched}
        <br />
      </React.Fragment>
    );
  });

  return <>{texts}</>;
};
