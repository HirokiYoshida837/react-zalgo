# react-zalgo

<p align="center">
  <a href="https://github.com/HirokiYoshida837/react-zalgo">
      <img width="100%" src="https://raw.githubusercontent.com/HirokiYoshida837/react-zalgo/main/resources/zalgo.svg" alt="react-zalgo" />
  </a>
</p>

<p align="center">

  [![License](https://img.shields.io/apm/l/atomic-design-ui.svg?style=flat)](https://github.com/HirokiYoshida837/react-zalgo/blob/main/LICENSE)
  [![CI/CD Status](https://github.com/HirokiYoshida837/react-zalgo/actions/workflows/main.yaml/badge.svg)](https://github.com/HirokiYoshida837/react-zalgo/actions/workflows/main.yaml)
  [![StoryBook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://hirokiyoshida837.github.io/react-zalgo/)
  [![npm version](https://img.shields.io/npm/v/@h.yoshida/react-zalgo.svg?style=flat-round)](https://www.npmjs.com/package/@h.yoshida/react-zalgo)

</p>

---

A react component library with Configurable 'Zalgo Text' Generator.

## Getting Started

Work in progress...

## Documentation

You can try to use Sample from [Storybook](https://hirokiyoshida837.github.io/react-zalgo/?path=/story/example-zalgo-en-complex--glitch-amount-controll)

more information will come soon...

## Quick Start

### 1. Installation

```shell
$ npm i @h.yoshida/react-zalgo
# or
$ yarn add @h.yoshida/react-zalgo
```

### 2. Using in React.

```typescript jsx
import {GlitchParams, Zalgo} from '@h.yoshida/react-zalgo';

const textData = 'the quick brown fox jumps over the lazy dog.'

// You can configure the amount of Zalgo Glitch volumes.
const param: GlitchParams = {
  topGlitchAmount: () => Math.ceil(3 * Math.random()),
  midGlitchAmount: () => Math.ceil(2 * Math.random()),
  btmGlitchAmount: () => Math.ceil(10 * Math.random()),
}

// this will return like `ṱ̶̠͖̗̹͖̰̺͙̠ͬ͘h̶̠͖̥͇̗ͪͣͭe̵̹͓̘͍͌ͤ̓ ̤̺̦͏҉̄̂q̶̛̳̗͍͉̹̞̳͒ù̡̲̪̲͙̞͑̚͜ī̜̮̞̬̬̗̤̠͙͈ͩ͜c̞̦̝̝̰̠̔͡ͅk̰͇̦͌ͩ͟ ̵̺̺̞̲̱͍̲̺̟̓̅ͯ͘b̩͖̤͚͕̱̭ͦͪ͝r̪̩̣̝͇͖̼҉̧̊o̶͎͕̱̩̜̻͈̽͞w̧̢̘̳̭̹̘͉ͣ̒n͙͑̀͑͜͡ ͕̀̉f̢̹̼̻͎͙̲̿̑o̪̯̻͉̩̮̹͇҉҉͒̔x̘͎̭̐̆̐͝͠ ̷͑ͅj̷̧͉͇̰̹̰͓̦̭̊̈ụ̻̬̠͍̘͖̘͖̹̀̀̆̚m̸̤̙̬̻͍ͦ͞ͅp̡̡̤͚̪̤͓̯̗͖̬͊ṥ͖͖̠̫́̋ ̷̨̗̮̹̟̥͚̔o̝҉̌̓͝v̴̴̭̟̘̣̫͗e̡̛͎̘̩̠̳̯͉̦̬̟͐ͨr̙͔̙̪͏̴̃̚ ̡̺̰͍̘̱͙̣̞͖̰̎͘t̘ͨͯ͌͝h̩̮͈̙͎̦͍̻ͤͫ͠ẹ̳̞̪͈̼̮̪͉̜͏̎ ̡̢̙̔̈́l̥̗͉̦͈̝ͣ͂̇͟a̹̝͔̹͉̽̄͘z̨̥͙͇̞͔̟̰ͯ̎̏y̥̠̜̦҉̊̄ ̧̬͓̣ͦd̶̦͙́ͫ̈́ȍ̶̹̜͔͍̐͡g̶̤̗̮͚͖͚͛̒̈́͜ͅ.̼̹͈̣̪̪̙̘̣͏̡ͭ̅̿`
return (
  <>
    <Zalgo textData={textData}
           glitchParams={param}/>
  </>
)
```

If you want to get reproducible glitch results, use `XORShift32` to GlitchAmount.

```typescript jsx

import {DefaultXORShift32GeneratorFactory, GlitchParams, XORShift32, Zalgo} from '@h.yoshida/react-zalgo';

const rand = new XORShift32(100);
const param: GlitchParams = {
  // these params control the amount of glitch volume.
  topGlitchAmount: () => Math.ceil(3 * rand.getNextInt(1, 3)),
  midGlitchAmount: () => Math.ceil(rand.getNextInt(0, 1)),
  btmGlitchAmount: () => Math.ceil(2 * rand.getNextInt(3, 30)),

  // `randomGeneratorFactory` is used by selecting charactor for zalgo glitch.
  randomGeneratorFactory: DefaultXORShift32GeneratorFactory
}

// this gives the same glitch result.
return (
  <>
    <Zalgo textData={textData}
           glitchParams={param}/>
  </>
)

```

and more sample will be found in [Storybook](https://hirokiyoshida837.github.io/react-zalgo/?path=/story/example-zalgo-en-complex--glitch-amount-controll)


## About Zalgo

- reference
  - [Diacritic - Wikipedia](https://en.wikipedia.org/wiki/Diacritic)
  - [Combining character - Wikipedia](https://en.wikipedia.org/wiki/Combining_character)
  - [Zalgo Text Generator by Tchouky - To invoke the hive-mind representing chaos. Invoking the feeling of chaos. With out order. The Nezperdian hive-mind of chaos. Zalgo. He who Waits Behind The Wall. ZALGO!](http://www.eeemo.net/)


## License

[MIT License | Choose a License](https://choosealicense.com/licenses/mit/)

