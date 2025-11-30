// Throttle is a technique that allow the function to call once within a time limit. It is used to limit the number of times a function is called.

function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Usage of throttle

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Throttled function called");
  }, 200)
);
