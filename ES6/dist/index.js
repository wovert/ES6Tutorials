'use strict';

// Set集合
// Set集合元素不能重复，会去重

var s = new Set(['wovert', '微明', 'web']);
console.log(s);

s.add('wovert');
console.log(s); // Set { 'wovert', '微明', 'web' }

// has是否存在元素
console.log(s.has('wovert')); // true

// 删除某个元素
console.log(s.delete('wovert')); // true

// for ... of
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    console.log(item);
  }

  // forEach
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

s.forEach(function (value) {
  return console.log(value);
});

// size
console.log(s.size); // 2

// 删除所有
s.clear();

// WeakSet（不允许重复值）

var wObj = new WeakSet(); // 不能直接赋值
var obj8 = { a: 'wovert', b: 'com' };
var obj9 = obj8;
wObj.add(obj8);
// wObj.add(obj9);
// console.log(wObj);
console.log(wObj.has('wovert'));
