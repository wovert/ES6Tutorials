
// 对象的函数解构 json

let json = {
  a: 'wovert',
  b: '微明'
}
function fun({a,b='默认参数'}) {
  console.log(a,b); // wovert 微明
}
fun(json);

// in 用法:是否存在对象属性
let obj = {
  a: 'wovert',
  b: '微明',
  c: null,
}
console.log('a' in obj); // true
console.log('c' in obj); // true
console.log('d' in obj); // false

let arr = [,'',null,];
console.log(arr.length); // 3
console.log(0 in arr); // false
console.log(1 in arr); // true
console.log(2 in arr); // true

// 遍历数组

let n = ['wovert', 'com', 'lingyima'];
n.forEach((value, index)=> console.log(index,value));
n.filter(x=> console.log(x));
n.some(x=> console.log(x));
console.log(n.map(x=>'web')); // 所有元素替换成web

// 数组转换成字符串
console.log(n.toString()); // wovert,com,lingyima
console.log(n.join('|')); // wovert|com|lingyima
