function wovert(first, ...args) {
  console.log(args.length); // 9
  // for(let i=0; i<args.length; i++) {
  //   console.log(args[i]);
  // }

  // 简化循环流程：效率比上面循环for更好
  for(let val of args) {
    console.log(val);
  }
}

wovert(1,2,3,4,5,6,7,8,9,10);