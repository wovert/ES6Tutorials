var a = 'wovert';
let me = 2;
const PI = 3.1415926;
{
  var a = 'change';
}
console.log(a); // wovert

//PI = 20; // 编译时出错

for(let i=0; i<10; i++) {
  console.log(i);
}
// console.log(i) // ReferenceError: i is not defined