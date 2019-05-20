<h1 align="center">react-typescript</h1>
这是一个基于webpack4.0 的React工程，简化繁杂的前端开发。支持一些好的依赖，比如：Typescript、Hooks、Redux，ES6、curry、compose等。

## Install

```bash
# 安装依赖
npm install

# 开始开发
npm start

# 开发完了，可以构建你的代码
# 测试环境代码构建
npm run build:test

# 生产环境代码构建
npm run build

# run storybook
npm run storybook
```

<h2 align="center">Features</h2>

- ✔︎ 可配置多环境，开发环境、测试环境、预生产环境、生产环境等
- ✔︎ 可自定义配置多入口，简易配置，入口和入口间相互独立
- ✔︎ 拥有许多通用模块，让你从繁杂的网页开发中跳出来
- ✔︎ 基于Typescript实现，让你的Javascript代码更好维护
- ✔ 支持StroyBook，让组件开发与业务开发更独立
- ✔ 无第三方依赖，代码体积小，如果你需要其他依赖可自行引入

## 目录说明
```bash
    ├──build/                       * webpack 工程化代码
    ├──config/                      * 配置文件目录，在这里可以自定义配置多个环境，多个入口文件
    ├──src/                         * 项目代码目录
    ├──├──assets/                   * 前端资源文件
    ├──├──utis/                     * 工具类
    ├──├──constant/const.ts         * 通用常量
    ├──├──constant/interface.ts     * typescript 通用接口文件
    ├──├──containers/               * redux connect组件
    ├──├──components/               * 通用组件
    ├──├──hoc/                      * 高阶组件
    ├──├──pages/                    * 业务代码
    ├──├──root/                     * 路由
```

## 多开发环境配置
- 在 /config/index.js 文件内，可添加修改项目的环境，目前已配置development、test、production三个环境。
- 在build目录下建立对应的webpack环境文件
- 并在ppackage.json配置对应构建命令即可。可参考test、production的配置。

## 节点配置说明
```js
name: {                                 // 环境名称，如production
    devtool: false,                     // 是否使用devtool
    NODE_ENV: 'production',             // 全局 NODE_ENV 变量
    HOST: 'www.website.com',            // 该环境对应的host
    API: 'www.website.com/api',         // 该环境对应的api
    jsSourceMap: false,                 // 是否使用sourcemap
    cssSourceMap: false,                // 是否使用sourcemap
    eslint: false,                      // 是否使用eslint
    filePath: '',                       // 构建后资源的目录
    staticPath: '',                     // 静态资源资源的CDN路径，如：//cdn.website.com
    imgPath: '',                        // 图片资源的CDN路径，如：//img.website.com
    filenameHash: true,                 // 构建后的文件，是否使用hash的形式
},
```
