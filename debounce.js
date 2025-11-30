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

// Usage of debounce
const search = debounce((query) => {
  console.log("Searching for query using debounce", query);
}, 300);

search("j");
search("ja");
search("jav");
search("javaScript in debounce");
