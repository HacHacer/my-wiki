const curry = (fn, ...args) => {
    console.log('fn :>> ', fn.length);
  if (args.length >= fn.length) {//没有传参数时直接运行外部函数
    return fn(...args);
  } else {
    return (...args2) => curry(fn, ...args, ...args2);
  }
};
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
// console.log('curriedAdd :>> ', curriedAdd());
console.log(curriedAdd(1)(2)(3));
// console.log(curriedAdd(1, 2));