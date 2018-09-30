'use strict';

// 老式字符串转换数组 '[1,2,3]'
var str = '[1,2,3]';
console.log(eval(str)); // [1,2,3]

var arr = Array.of(2, 3, 4);
console.log(arr); // [2,3,4]

console.log(Array.of('a', 'b', 'c')); // ['a','b','c']

// arr.find(ele) 查找ele元素并返回

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// value: 元素值，index: 索引，arr:当前数组引用
console.log(nums.find(function (value, index, arr) {
  return value > 10;
})); // undefined

console.log(nums.find(function (value, index, arr) {
  return value > 5;
})); // 6

var names = ['wovert', 'lingyima'];
console.log(names.find(function (value, index, names) {
  return value == 'wovert';
})); // true
