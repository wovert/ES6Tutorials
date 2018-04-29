function user(name="没有名字", age=0) {
  console.log(`My name is ${name}.My age is ${age}`);
}

const lisi = ['李四', 30];

user.apply(null, lisi);

// use expond indicator
user(...lisi);