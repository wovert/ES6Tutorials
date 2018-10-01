// ES5 只能在顶部声明严谨模式
'use strict';

function add(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (a == 0) {
    throw new Error('A is Error');
  }
  return a + b;
}

function add2(a) {
  // ES6 可以在此处声明严谨模式
  'use strict';

  if (a == 0) {
    throw new Error('A is Error');
  }
  return a + b;
}

// 获得参数参数个数
function add3(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return a + b;
}

var add4 = function add4(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  // 此处不能使用new构造函数
  console.log('wovert');
  return a + b;
};
var add5 = function add5(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a + b;
};

// console.log(add(0));
// console.log(add2(1,2));

// add3.length 指向的 没有默认值得形参a
// console.log(add3(add3.length));

console.log(add4(1, 2));
console.log(add5(1, 2));
