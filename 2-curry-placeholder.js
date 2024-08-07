function curry(func) {
  return function curried(...args) {
    const isArgsEnough =
      args.length >= func.length &&
      args.slice().every((arg) => arg !== curry.placeholder);

    if (isArgsEnough) {
      return func.apply(this, args);
    } else {
      return function (...newArgs) {
        const finalArgs = args
          .map((arg) => (arg === curry.placeholder ? newArgs.shift() : arg))
          .concat(newArgs);
        return curried(...finalArgs);
      };
    }
  };
}

curry.placeholder = Symbol();

//https://bigfrontend.dev/problem/implement-curry-with-placeholder
