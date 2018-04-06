# 电商网站账号体系 JS SDK

## Why SDK
> 纯JS，无依赖


## ES 环境配置
- 最新的浏览器支持度
  + 最新版本的现代浏览器模块化外几乎全部支持
  + 现代浏览器的历史版本支持度较为一般
  + IE8/9仍占据大量份额，IE6/7 几乎绝迹（不到3%）

### 工程化工具 Webpack
> 现代前段使用最广泛的打包工具
- 支持模块化开发
- 配置 babel-loader 将 ES6 转为 ES5
- 压缩、合并等其他起前段优化

### ES6 + 语法编译工具 Babel
- `.babelrc` 配置文件进行配置
`{
  "presets": [
    "es2015"
  ],
  "plugins":[]
}`

- 与 webpack 或 gulp 等打包工具配置
- 浏览器引入 Babel-polyfill 转换新的 API


- 安装 babel-preset-es2015
`npm i babel-preset-es2015@6.24.1 -D`

- babel 转换
`babel index.js`

#### 流程示意图
webpack -- 编译工具 --> Babel -- 浏览器端兼容包--> ES5-shim/Babel-polyfill(编译ES6新的API) -> 兼容型好的代码


### 脚手架工具

