var once = function (fn) {
  let isCalledOnce = false;

  return function (...args) {
    if (!isCalledOnce) {
      isCalledOnce = true;
      return fn(...args);
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // returns undefined without calling fn
