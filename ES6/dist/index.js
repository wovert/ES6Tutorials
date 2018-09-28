'use strict';

var a = 'wovert';
var me = 2;
var PI = 3.1415926;
{
  var a = 'change';
}
console.log(a); // wovert

for (var _i = 0; _i < 10; _i++) {
  console.log(_i);
}
console.log(i); // ReferenceError: i is not defined
