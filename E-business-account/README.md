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
[html-bundler](https://github.com/be-fe/html-bundler)
- 解决 babel 和 webpack 配置比较繁琐的问题
- 性能与日志优化，html/css/图片等处理
- Dev Server 和环境配置 

- 安装
`cnpm i html-bundler -g`

- create project
`hb create es6-passport -w`

- setup packages
- `cd es6-password && cnpm install`

- run server
`hb dev`

####  setup jquery
`cnpm i query -D`
- webpack.dll.js
`const vendors = [
  'jquery'
];`
- 打包
`npm run dll`
src/lib/vendors.js

## 环境准备
1. cnpm i html-bundler -g
2. hb create project -w
3. cd project && cnpm install

- 安装必要的 polyfill
- 加入 gulp-file-include 包

cnpm i es5-shim --save-dev
cnpm i babel-polyfill --save-dev

- webpack.dll.js 加入上面两个依赖
const vendors = [
  'es5-shim',
  'babel-polyfill'
];

- 生成 vendors
`npm run dll`


### gulp-file-include
> header，footer等文件内容基本不变，修改内容是，其他页面引入的都需要重新修改。实际上使用模板。结合 gulp 和 webpack。
只用 webpack 的时候，修改 css之后，webpack 重新打包一边，影响开发效率。


- 安装：`cnpm i gulp-file-include -D`

- 配置 gulp-file-include
html-bundler.config.js 文件里引入 `var fileInclude = require('gulp-file-include');` destMode/devMod->cutom -> html : [{func: fileInclude, opts: { prefix: '@@', basePath: '@file'}}]

- index.html 导入模板文件
`@@inculde('./templates/header.html', {})
<h1>Hello World!</h1>
@@inculde('./templates/footer.html', {})`

- 启动服务
`hb dev`






