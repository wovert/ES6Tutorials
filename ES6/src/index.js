
// 对象的函数解构 json

let json = {
  a: 'wovert',
  b: '微明'
}
function fun({a,b='默认参数'}) {
  console.log(a,b);
}
fun(json);