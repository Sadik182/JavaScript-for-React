// Closure is a Event Loop
// Closure is a function bundled together with its lexical scope
// Closure gives you access to an outer function's scope from an inner function

// We can access inner function by calling outer function

// Example of Closure

function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

console.log(outer());
