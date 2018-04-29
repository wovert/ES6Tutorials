let obj = {name: 'wovert', cousre: 'Full Static React'};
console.log(Object.keys(obj)); // ["name", "couse"]
console.log(Object.values(obj)); // ["wovert", "Full Static React"]
console.log(Object.entries(obj)); // [["name", "couse"],["wovert", "Full Static React"]

let name = 'wovert';
let gender = 'male';
const o = {
  // 省略键名
  gender,

  // name 是变量名
  [name]: 'wovert.com',

  hello: function(){},
  
  // 方法简写形式
  hi() {}

};

let age = 'hobby';
o[age] = 'footerball';
console.log(o);