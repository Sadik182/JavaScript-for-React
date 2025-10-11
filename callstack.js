function first() {
  second();
  console.log("First function");
}

function second() {
  third();
  console.log("Second function");
}

function third() {
  console.log("Third function");
}

first();

console.log("Global Execution Context");
