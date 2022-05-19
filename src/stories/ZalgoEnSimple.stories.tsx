import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Zalgo} from "../components/Zalgo";

export default {
  title: 'Example/Zalgo/en/simple',
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

export const Default = Template.bind({});
Default.args = {
  textData: 'this is Default'
};

export const Default2 = Template.bind({});
Default2.args = {
  textData: 'this is Default',
  scale: 4
};

export const Default3 = Template.bind({});
Default3.args = {
  textData: 'this is Default',
  scale: 40
};

export const Pangram = Template.bind({});
Pangram.args = {
  textData: 'the quick brown fox jumps over the lazy dog.'
};

export const WithLF = Template.bind({});
WithLF.args = {
  textData:
    'the quick brown fox \n' +
    'jumps over \n' +
    'the lazy dog.',
  scale: 10
}

export const OnlyTop = Template.bind({});
OnlyTop.args = {
  textData: 'Only the top side of text will be glitched.',
  glitchParams: {
    topGlitchAmount: (x) => 5,
    midGlitchAmount: (x) => 0,
    btmGlitchAmount: (x) => 0,
  }
};

export const OnlyMid = Template.bind({});
OnlyMid.args = {
  textData: 'Only the mid side of text will be glitched.',
  glitchParams: {
    topGlitchAmount: (x) => 0,
    midGlitchAmount: (x) => 5,
    btmGlitchAmount: (x) => 0,
  }
};

export const OnlyBtm = Template.bind({});
OnlyBtm.args = {
  textData: 'Only the bottom side of text will be glitched.',
  glitchParams: {
    topGlitchAmount: (x) => 0,
    midGlitchAmount: (x) => 0,
    btmGlitchAmount: (x) => 5,
  }
};

export const LoremIpsum = Template.bind({});
LoremIpsum.args = {
  textData:
    `Lorem ipsum dolor sit amet tempor tation sea eirmod kasd sanctus clita diam consequat tempor erat elit amet. Sed est rebum rebum eirmod accusam minim sit. Et kasd sed sed duis consequat stet invidunt vel est dolor ad aliquyam invidunt. Elitr eirmod in sadipscing consetetur quod est dolore dolores velit odio voluptua dolor iriure. Sed rebum sed amet ut diam justo zzril sit invidunt et amet imperdiet facilisis ut justo luptatum. Kasd lorem sit magna aliquam dolor takimata amet stet at ipsum vero gubergren amet at vel sed. Laoreet invidunt vel voluptua laoreet in est. At in feugait molestie sit tempor est ut. Nonumy dolore gubergren gubergren diam assum sed ipsum nibh ad. Rebum dignissim vel gubergren dolor aliquip minim adipiscing. \n
    Justo eu voluptua ut voluptua ipsum sadipscing gubergren sea. Justo dolor dolore invidunt ipsum voluptua nonumy consectetuer wisi tempor kasd. Diam no takimata eos lorem. Lorem eum eirmod iriure et et. Molestie labore vero rebum diam. Lorem invidunt sit sanctus stet et no euismod. Amet labore et ipsum accumsan no aliquip iriure. Laoreet lorem erat in stet at sit voluptua kasd. Ad accusam ea erat voluptua ea nulla sanctus magna exerci amet. Sed sed magna enim est facilisis diam sadipscing sed lorem velit at quis diam vel adipiscing vero tempor. Invidunt takimata dolore no ipsum invidunt dolore diam et dolores ipsum magna voluptua. Accusam sea eirmod takimata volutpat eirmod et ipsum diam ut sit sit stet. Qui et sea dolore augue aliquyam at consetetur consequat dolore sea sanctus takimata ipsum consetetur voluptua diam illum duo. \n
    Vel ullamcorper sea voluptua congue sea eirmod dolores eros illum dolore ea et accusam stet no accusam takimata. Sanctus facilisis eu et sit nonumy ad dolor lorem stet no nostrud et gubergren justo voluptua et. Dolore ea lorem tempor sed accusam amet. Dolor option ea dolore duo velit voluptua. Lorem nulla ipsum magna dolore tempor dolore sanctus labore ipsum dolore duo esse est nisl ipsum. Sanctus diam sadipscing et invidunt commodo nulla. Diam elitr dolores tempor et nonummy et dolor. Clita takimata lorem ut dolore lorem et adipiscing. At nonumy dolore invidunt elitr. Dolores justo nonumy sadipscing. Sanctus sea et clita. Et erat ea duo stet dolor vel et stet sadipscing duo quis aliquyam nostrud consetetur kasd. Et magna et mazim lorem blandit vero. Dolor sanctus sed duo labore lorem sed sed sea.
    `,
  glitchParams: {
    topGlitchAmount: (x) => Math.ceil(2 * Math.random()),
    midGlitchAmount: (x) => Math.ceil(1 * Math.random()),
    btmGlitchAmount: (x) => Math.ceil(10 * Math.random()),
  }
};