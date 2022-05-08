import React from 'react';
import {Glitcher} from "../zalgo/glitcher/glitcher";

type Prop = {
  textData: string
}

const Zalgo: React.FC<Prop> = (prop: Prop) => {
  const glitcher = new Glitcher(20, 1).setGlitchType({btm: true, mid: true, top: true});
  const glitched = glitcher.glitch(prop.textData);

  return (
    <>
      {glitched}
    </>
  );
}

export default Zalgo;
