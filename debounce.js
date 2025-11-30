// Debounce is a technique to limit the number of times a function is called

function debounce(func, delay) {
  console.log("I am inside debounce function");
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
