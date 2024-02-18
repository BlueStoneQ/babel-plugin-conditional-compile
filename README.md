# babel-plugin-conditional-compile
**[README-zh-CN](README_zh_CN.md)**

## Overview

A Babel plugin for conditional compilation.

## Install

To install the plugin, run the following command:

```bash
npm install --save-dev babel-plugin-conditional-compile
```

Or, if you're using Yarn:

```bash
yarn add --dev babel-plugin-conditional-compile
```

## Usage

### Configuration

Add the plugin to your Babel configuration file (e.g., `.babelrc` or `babel.config.js`). Specify the environment variable name that will trigger conditional compilation.

**.babelrc (or babel.config.js)**

```json
{
  "plugins": [
    ["conditional-compile", {
      "targetPlat": "WX" // 配置当前编译的目标平台是微信
    }]
  ]
}
```

### Coding with Conditional Compilation

In your JavaScript files, you can use special comments to mark code blocks for conditional compilation.

```javascript
// ifdef targetPlat=watch-os|WX
console.log("When the configuration parameter targetPlat of the plugin is set to WX or watch-os, this piece of code will be retained during the compilation phase.");
// endif

// ifndef targetPlat=TT|DD
console.log("When the configuration parameter targetPlat of the plugin is set to DD or TT, this piece of code will be excluded during the compilation phase.");
// endif
```

## License
[LICENSE](LICENSE)

