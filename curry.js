function curry(fn) {
  return function (...args) {
    // if number of arguments match
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...missingArgs) {
      return curried(...args, ...missingArgs);
    };
  };
}
