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