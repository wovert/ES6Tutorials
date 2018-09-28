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

## 声明方式

``` shell
# vim index.js
  var a = 'wovert';
  let me = 2;
  const PI = 3.1415926;
  {
    var a = 'change';
  }
  console.log(a); // wovert

  PI = 20;

  for(let i=0; i<10; i++) {
    console.log(i);
  }
  console.log(i);
```

## 结构赋值

> 从数组和对象中提取元素值，对变量进行赋值

### 数组结构赋值

``` js
// let a = 0;
// let b = 1;
// let c = 2;

let [a,[b,c]] = [0,[1,2]];

let [foo=true] = []; // foo 默认值
console.log(foo); // true

let [x,y='微明'] = ['wovert'];
console.log(x+y); // wovert微明

let [x1,y1='微明'] = ['wovert',undefined];
console.log(x1+y1); // wovert微明

let [x2,y2='微明'] = ['wovert',null];
console.log(x2+y2); // wovertnull
```

### 对象结构赋值

``` js
let {foo,bar} = {bar: '微明',foo:'wovert'};
console.log(foo+bar); // wovert微明

let a;
// {a} = {a:'wovert'}; 错误

let b;
({b} = {b:'wovert'}); 
console.log(b); // wovert
```

### 字符串结构赋值

``` js
const [a,b,c,d,e,f] = 'wovert';
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
```

## 对象扩展运算符

```js
function wovert(...args) {
  console.log(args); // [1,2,3]
}

wovert(1,2,3);

let arr1 = ['www','wovert','com'];
let arr2 = arr1; // 引用赋值
console.log(arr2); // [ 'www', 'wovert', 'com' ]
arr2.push('cg');
console.log(arr1); // [ 'www', 'wovert', 'com', 'cg' ]

let arr3 = [...arr1];
arr3.push('add new element');
console.log('arr1:', arr1); // arr1: [ 'www', 'wovert', 'com', 'cg' ]
console.log('arr2:', arr2); // arr2: [ 'www', 'wovert', 'com', 'cg' ]
console.log('arr3:', arr3); // arr3: [ 'www', 'wovert', 'com', 'cg', 'add new element' ]
```

## rest 运算符

``` js
function wovert(first, ...args) {
  console.log(args.length); // 9
  // for(let i=0; i<args.length; i++) {
  //   console.log(args[i]);
  // }

  // 简化循环流程：效率比上面循环for更好
  for(let val of args) {
    console.log(val);
  }
}

wovert(1,2,3,4,5,6,7,8,9,10);
```