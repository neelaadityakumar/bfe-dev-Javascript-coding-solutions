/**
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
  // Track if we are waiting. Initially, we are not.
  let isWaiting = false;
  // Track arguments of next call
  let nextArgsForExec = null;

  return function (...args) {
    // If we are waiting,
    if (isWaiting) {
      // ...store arguments of next call
      nextArgsForExec = args;
      return;
    }

    // If we are not waiting, execute 'func' with passed arguments
    func.apply(this, args);
    // Prevent future execution of 'func'
    isWaiting = true;

    // After wait time,
    setTimeout(() => {
      // ...allow execution of 'func'
      isWaiting = false;

      // If arguments of next call exists,
      if (nextArgsForExec) {
        // ...execute function throttled and pass next call's arguments
        // to it. Since now we are not waiting, 'func' will be executed
        // and isWaiting will be reset to true.
        func.apply(this, nextArgsForExec);
        // ...reset arguments of next call to null.
        nextArgsForExec = null;
      }
    }, wait);
  };
}
//https://bigfrontend.dev/problem/implement-basic-throttle
