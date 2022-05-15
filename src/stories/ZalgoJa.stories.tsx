import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Zalgo} from "../components/Zalgo2";

export default {
  title: 'Example/Zalgo/ja',
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

export const Primary = Template.bind({});
Primary.args = {
  textData: '午前3時の茨城県　注: Google ChromeではZalgoがただしく表示されない場合が多い。Firefoxなどでは見れる場合がおおい。'
};

export const Secondary = Template.bind({});
Secondary.args = {
  textData: 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせすん'
};

