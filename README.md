# ECMAScript 6

- dist是编译后的文件，压缩版
- src是源码文件
- 压缩源（src）文件，生成压缩包到（dest），dest一般和src配对出现
- index.html
  - `<script src="./dist/index.js"></script>`

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

## 字符串模板

``` shell
安装 live-server(前段服务器)
# cnpm install -g live-server
# vim index.html
  <script src="index.js"></script>
# vim index.js
  let a = 1;
  let b = 2;
  let wovert = '微明';
  let blog = `这是我的博客名：${wovert}
  正在测试字${a+b}符串模版
  `;
  console.log(blog);
# npm run build
# node ./dist/index
```

### 字符串查找

``` js
let [a,b] = [1,2];
let wovert = '微明';
let blog = `这是我的博客名：${wovert}
正在测试字${a+b}符串模版`;
console.log(blog.indexOf('博客') > 0); // true
console.log(blog.includes('博客')); // true 是否包含
console.log(blog.startsWith('这是')); // true
console.log(blog.endsWith('模版')); // true
console.log('a'.repeat(5)); // aaaaa
```

## 数字

``` js
// 二进制:以0B前缀
let binary = 0B010101;
console.log(binary); // 21

// 二进制：以0o前缀
let octal = 0o666;
console.log(octal); // 438

// 数字判断

let a = 11/4;

// 判断是否为数字
console.log(Number.isFinite(a)); // true
console.log(Number.isFinite('wovert')); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(undefined)); // false

// NaN
console.log(Number.isNaN(NaN)); // ture
console.log(Number.isNaN(1)); // false

// ES6判断是否为数字
let n = 918.1;
console.log(Number.isInteger(n)); // 判断是否为整数
console.log(Number.parseInt(n)); // 918
console.log(Number.parseFloat(n)); // 918.1

// 最大整数和最小整数
let w = Math.pow(2,53) - 1; // 2^53-1
console.log(w); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.isSafeInteger(w+1)); // false, 是否为安全整数
```

## 数组

### json 数组格式

``` js
let json = {
  '0':'html',
  '1':'css',
  '2':'js',
  length: 3
}
let arr = Array.from(json);
console.log(arr);
```

### Array.of 方法

``` js
// 老式字符串转换数组 '[1,2,3]'
let str = '[1,2,3]';
console.log(eval(str)); // [1,2,3]

let arr = Array.of(2,3,4);
console.log(arr); // [2,3,4]

console.log(Array.of('a','b','c')); // ['a','b','c']

// arr.find(ele) 查找ele元素并返回

let nums = [1,2,3,4,5,6,7,8,9];
// value: 元素值，index: 索引，arr:当前数组引用
console.log(nums.find(function(value, index, arr){
  return value > 10; 
})); // undefined

console.log(nums.find(function(value, index, arr){
  return value > 5; 
})); // 6

let names = ['wovert','lingyima'];
console.log(names.find(function(value,index,names){
  return value == 'wovert';
})); // wovert

// fill
let  arrs = ['wovert', '微明','com'];

// 全部填充或替换
arrs.fill('web',1,3);
console.log(arrs); // ['wovert','web','web']

// 数组循环
for(let item of arrs) {
  console.log(item);
}

// 遍历索引
for(let item of arrs.keys()) {
  console.log(item); 
}

// 遍历索引键值对儿
for(let [index,value] of arrs.entries()) {
  console.log(`${index}=${value}`);
}

// 手动遍历
// 返回迭代器
let list = arrs.entries();
console.log(list.next().value); // [ 0, 'wovert' ]
console.log('----------');
console.log(list.next().value); [ 1, 'web' ]
console.log('----------');
console.log(list.next().value); [ 2, 'web' ]
console.log('----------');
console.log(list.next().value); // undefined
console.log('----------');
```

## 箭头函数

``` js
// ES5 只能在顶部声明严谨模式
'use strict';
function add(a,b=1) {
  if(a==0) {
    throw new Error('A is Error');
  }
  return a + b;
}

function add2(a) {
  // ES6 可以在此处声明严谨模式
  'use strict'
  if(a==0) {
    throw new Error('A is Error');
  }
  return a + b;
}

// 获得参数参数个数
function add3(a,b=1) {
  return a + b;
}

var add4 = (a,b=1) => {
  // 此处不能使用new构造函数
  console.log('wovert');
  return a + b;
}
var add5 = (a,b=1) => a + b;

console.log(add(0)); // Error
console.log(add2(1,2)); // Error

// add3.length 指向的 没有默认值得形参a
console.log(add3(add3.length));

console.log(add4(1,2)); // 3
console.log(add5(1,2)); // 3
```

## 对象赋值

``` js
let name = 'a';
let age = 20;
let obj = {name,age};
console.log(obj); // {name:'a',ag:20}


// key值得构建
let key = 'seckill';
var obj2 = {
  [key] : 'web'
};
console.log(obj2); // {seckill: 'web'}

// 自定义对象方法
let obj3 = {
  add: function(a,b) {
    return a + b;
  }
}
console.log(obj3.add(1,2)); // 3

// is()
let o = {name:'wovert'};
let ob = {name:'wovert'};

// es5比较对象值

// 同值相等，is严格相等
console.log(o.name === ob.name); // true
console.log(Object.is(o.name,ob.name)); // true

console.log(+0===-0); // true
console.log(NaN===NaN); // flase
console.log(Object.is(+0,-0)); // false
console.log(Object.is(NaN, NaN)); // true

// assign 合并对象
let x = {x:'wovert'};
let y = {y:'com'};
let z = {z:'lingyima'};
let xyz = Object.assign(x,y,z); // { x: 'wovert', y: 'com', z: 'lingyima' }
console.log(xyz);
```

## Symbol

``` js
let s = new String;
let n = new Number;
let b = new Boolean;
let a = new Array;
let o = new Object;
let sm = Symbol();

console.log(typeof(s)); // object
console.log(typeof(n)); // object
console.log(typeof(b)); // object
console.log(typeof(a)); // object
console.log(typeof(o)); // object
console.log(typeof(sm)); // symbol

let wovert = Symbol('微明');
console.log(wovert); // Symbol(微明)
console.log(wovert.toString()); // Symbol(微明) 已经转为字符串

let x = Symbol();
let obj = {
  [x]: 'wovert'
}
console.log(obj[x]); // wovert
obj[x] = 'web';
console.log(obj[x]); // web

let ob = {
  name: 'wovert',
  skill: 'web'
}
let age = Symbol();
ob[age] = 18;
console.log(ob); // { name: 'wovert', skill: 'web', [Symbol()]: 18 }

// 只能遍历 wovert 和 web, age受保护所以不再遍历
for(let item in ob) {
  console.log(ob[item]);
}

console.log(ob[age]); // 18
```

## Set集合

``` js
// Set集合
// Set集合元素不能重复，会去重

let s = new Set(['wovert','微明','web']);
console.log(s);

s.add('wovert');
console.log(s); // Set { 'wovert', '微明', 'web' }

// has是否存在元素
console.log(s.has('wovert')); // true

// 删除某个元素
console.log(s.delete('wovert')); // true

// for ... of
for(let item of s) {
  console.log(item);
}

// forEach
s.forEach(value=>console.log(value));

// size
console.log(s.size); // 2

// 删除所有
s.clear();

// WeakSet（不允许重复值）

let wObj = new WeakSet(); // 不能直接赋值
let obj8 = {a:'wovert',b:'com'};
let obj9 = obj8;
wObj.add(obj8);
wObj.add(obj9);
console.log(wObj);
```