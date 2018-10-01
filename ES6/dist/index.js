'use strict';

// 对象的函数解构 json

var json = {
  a: 'wovert',
  b: '微明'
};
function fun(_ref) {
  var a = _ref.a,
      _ref$b = _ref.b,
      b = _ref$b === undefined ? '默认参数' : _ref$b;

  console.log(a, b); // wovert 微明
}
fun(json);

// in 用法:是否存在对象属性
var obj = {
  a: 'wovert',
  b: '微明',
  c: null
};
console.log('a' in obj); // true
console.log('c' in obj); // true
console.log('d' in obj); // false

var arr = [, '', null];
console.log(arr.length); // 3
console.log(0 in arr); // false
console.log(1 in arr); // true
console.log(2 in arr); // true

// 遍历数组

var n = ['wovert', 'com', 'lingyima'];
n.forEach(function (value, index) {
  return console.log(index, value);
});
n.filter(function (x) {
  return console.log(x);
});
n.some(function (x) {
  return console.log(x);
});
console.log(n.map(function (x) {
  return 'web';
})); // 所有元素替换成web

// 数组转换成字符串
console.log(n.toString()); // wovert, com, lingyima
console.log(n.join('|')); // wovert|com|lingyima
