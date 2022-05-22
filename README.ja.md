# react-zalgo

[![License](https://img.shields.io/apm/l/atomic-design-ui.svg?style=flat)](https://github.com/HirokiYoshida837/react-zalgo/blob/main/LICENSE)
[![CI/CD Status](https://github.com/HirokiYoshida837/react-zalgo/actions/workflows/main.yaml/badge.svg)](https://github.com/HirokiYoshida837/react-zalgo/actions/workflows/main.yaml)
[![StoryBook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://hirokiyoshida837.github.io/react-zalgo/)
[![npm version](https://img.shields.io/npm/v/@h.yoshida/react-zalgo.svg?style=flat-round)](https://www.npmjs.com/package/@h.yoshida/react-zalgo)
---

A react component library with Configurable 'Zalgo Text' Generator ,

## Getting Started

作成中

## Documentation

[Storybook](https://hirokiyoshida837.github.io/react-zalgo/?path=/story/example-zalgo-en-complex--glitch-amount-controll) から、動作サンプルを見ることができます。

その他の情報は作成中...

## Quick Start

### 1. インストール

```shell
$ npm i @h.yoshida/react-zalgo
# or
$ yarn add @h.yoshida/react-zalgo
```

### 2. Reactで使用する

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

`XORShift32` などを使用してGlitch量を調整することで、画面をリロードしても、再度同じZalgoテキストを得ることができます。

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

その他のサンプルはこちらの [Storybook](https://hirokiyoshida837.github.io/react-zalgo/?path=/story/example-zalgo-en-complex--glitch-amount-controll) を参照。

※日本語に対して使用する場合、ブラウザ種別などによって意図しない表示内容になる場合があります。 参考 : [「午前3時の茨城県」の使用文字を徹底解明！ - Qiita](https://qiita.com/YSRKEN/items/fc4174f665339727184e)


```
変換前 : 午前3時のいばらぎけん


変換後 : 午̧̠̤̟̤̰̭̮̥͔̀̀́́͘͝ͅ҉̵̆͒̈̒̿̈́ͭ̓͑̚͞前̸̷̶̨̗̪͇̦̻̬͈̞͎͓͘͟͟͡͏̵̌ͥ̓̿̈̊ͣ͂̆͊3̶̴̛̱̝̜̪̞̳̭̫̭̫͠͞͡҉̡̨̀́ͯ̐ͦ̾̿͂̂̈́̌時̷͈̮͎͎̟̪͉͉̼̜͏̵̵̷̡̢̛́́̂ͭ̎̊̈́̏͛̾͝の̷̛͇͕̼̣͖͙̹͚̙̬́ͯ͌͊̽̒́ͣ̊͛̐͘͘͜͜͡͞͡い̶͈̪͍̰͖̭͔̣͍͘͝͡ͅ͏́͘͟͠҉ͬ̈́ͨͪ̈̈́ͣ̐͑͂ば̸̸̴̶̛̼̮̫̤̜̹̮̪̲̗̀͘͘͏̷̐ͫͤͯ̋̾̈̔̈́ͤら̸̴̢̛̭̬̙̞̞̜̜͔̪͎͢͡͏̀̀̾̈́͛ͧͨͩ́ͭͣ̚͝ぎ̶̨̨̛̭̙̗̝͍̫̲̟͓͈̈́̾̀͒ͦͯ͂̐̌͘̚͜͞͞͝͞け̧͔̬͎̮̭̲̩̻̣͙҉̛͠҉́̏̇ͩ̂ͨ̐̅̾͋̈́͟͡͠͠ん̸̸̸̷̝̲̝̤͓̺͔͚̼͠ͅ҉̵̧̀ͪ̃̽ͨ͌̑̅̉́̚͡　̞̻̼̳̻̰̻̘͔͈͏͢҉̷̵̵́̾̈ͭ̎̾́ͭ̇́͗͢͢͢
```

## About Zalgo

- reference
  - [ダイアクリティカルマーク - Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%80%E3%82%A4%E3%82%A2%E3%82%AF%E3%83%AA%E3%83%86%E3%82%A3%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%BC%E3%82%AF)
  - [合成可能なダイアクリティカルマーク - Wikipedia](https://ja.wikipedia.org/wiki/%E5%90%88%E6%88%90%E5%8F%AF%E8%83%BD%E3%81%AA%E3%83%80%E3%82%A4%E3%82%A2%E3%82%AF%E3%83%AA%E3%83%86%E3%82%A3%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%BC%E3%82%AF)
  - [Zalgo Text Generator by Tchouky - To invoke the hive-mind representing chaos. Invoking the feeling of chaos. With out order. The Nezperdian hive-mind of chaos. Zalgo. He who Waits Behind The Wall. ZALGO!](http://www.eeemo.net/)


## License

[MIT License | Choose a License](https://choosealicense.com/licenses/mit/)

