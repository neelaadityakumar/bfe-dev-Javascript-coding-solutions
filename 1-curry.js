function curry(fn) {
  function curried(...args) {
    // if number of arguments match
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...missingArgs) {
      return curried(...args, ...missingArgs);
    };
  }
  return curried;
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);
console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'

//https://bigfrontend.dev/problem/implement-curry
