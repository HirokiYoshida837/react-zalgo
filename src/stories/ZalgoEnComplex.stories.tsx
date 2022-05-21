import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Zalgo} from "../components/zalgo/Zalgo";
import {DefaultXORShift32GeneratorFactory} from "../components/logic/random/XORShift32";

export default {
  title: 'Example/Zalgo/en/complex',
  component: Zalgo,
} as ComponentMeta<typeof Zalgo>;

const Template: ComponentStory<typeof Zalgo> = (args) => {
  return (
    <>
      {args.textData.split('\n').map((x, i) => <React.Fragment key={i}>{x}<br/></React.Fragment>)}
      <br/>
      <Zalgo {...args} />
    </>
  )
};

export const GlitchAmountControll = Template.bind({});
GlitchAmountControll.args = {
  textData: 'You can controll the amount of glitching with function. abcdefghijklmnopqrstuvwxyz',
  glitchParams: {
    btmGlitchAmount: (x: number) => {
      return Math.ceil(x * x * (1 / 4));
    },
    topGlitchAmount: (x: number) => 2 * x,
    midGlitchAmount: (x: number) => 3,
  }
}

export const ReproducibleGlitch = Template.bind({});
ReproducibleGlitch.args = {
  textData: 'If you click "Rerun Interactions", the glitched result will be not changed. abcdefghijklmnopqrstuvwxyz',
  glitchParams: {
    randomGeneratorFactory: DefaultXORShift32GeneratorFactory,
    btmGlitchAmount: (x: number) => {
      return Math.ceil(0.5 * x);
    },
    topGlitchAmount: (x: number) => 10,
    midGlitchAmount: (x: number) => 3,
  }
}