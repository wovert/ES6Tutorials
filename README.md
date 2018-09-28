# ECMAScript 6

- dist是编译后的文件，压缩版
- src是源码文件
- 压缩源（src）文件，生成压缩包到（dest），dest一般和src配对出现

## 实例

``` js
let  a = 1;
console.log(a);
```

``` shell
1. 项目初始化, -y:全部默认选项
# npm init -y

2. 全局安装 babel-cli
# cnpm install -g babel-cli

3. 本地安装babel-preset-es2015
# cnpm install --save-dev babel-preset-es2015 babel-cli

4. 根目录下创建 .babelrc 文件
# vim .babelrc
  {
    "presets": [
      "es2015"
    ],
    "plugins": []
  }

5. 编译ES6转换为ES5
# babel src/index.js -o dist/index.js
# cat dest/index.js
  "use strict";

  var a = 1;
  console.log(a);

6. 简化编译
# vim package.json
  "scripts": {
    "build": "babel src/index.js -o dist/index.js"
  }
# npm run build
```
