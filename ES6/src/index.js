let [a,b] = [1,2];
let wovert = '微明';
let blog = `这是我的博客名：${wovert}
正在测试字${a+b}符串模版`;
console.log(blog.indexOf('博客') > 0); // true
console.log(blog.includes('博客')); // true 是否包含
console.log(blog.startsWith('这是')); // true
console.log(blog.endsWith('模版')); // true
console.log('a'.repeat(5)); // aaaaa