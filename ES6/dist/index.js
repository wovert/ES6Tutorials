'use strict';

var a = 1,
    b = 2;

var wovert = '微明';
var blog = '\u8FD9\u662F\u6211\u7684\u535A\u5BA2\u540D\uFF1A' + wovert + '\n\u6B63\u5728\u6D4B\u8BD5\u5B57' + (a + b) + '\u7B26\u4E32\u6A21\u7248';
console.log(blog.indexOf('博客') > 0); // true
console.log(blog.includes('博客')); // true 是否包含
console.log(blog.startsWith('这是')); // true
console.log(blog.endsWith('模版')); // true
console.log('a'.repeat(5)); // aaaaa
