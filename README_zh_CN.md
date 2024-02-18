
# babel-plugin-conditional-compile
**[英文文档](README.md)**

## 概览

一个babel插件，用于条件编译。

## 安装

要安装此插件，请运行以下命令：

```bash
npm install --save-dev babel-plugin-conditional-compile
```

或者，如果您正在使用Yarn：

```bash
yarn add --dev babel-plugin-conditional-compile
```

## 使用方法

### 配置

将插件添加到您的Babel配置文件（例如，`.babelrc` 或 `babel.config.js`）。指定将触发条件编译的环境变量名。

**.babelrc (或 babel.config.js)**

```json
{
  "plugins": [
    ["conditional-compile", {
      "targetPlat": "WX" // 配置当前编译的目标平台是微信
    }]
  ]
}
```

### 编码与条件编译

在您的JavaScript文件中，您可以使用特殊注释来标记条件编译的代码块。

```javascript
// ifdef targetPlat=watch-os|WX
console.log("plugin的配置参数targetPlat是WX或者watch-os时，这段代码才会在编译阶段被保留下来");
// endif

// ifndef targetPlat=TT|DD
console.log("plugin的配置参数targetPlat是DD或者TT时，这段代码会在编译阶段被排除掉");
// endif
```

## 开源协议
[LICENSE](LICENSE)