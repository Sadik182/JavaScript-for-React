// Higher Order Function
// A function that takes another function as an argument or returns a function as a return value

function greetings(name) {
  console.log("Hello " + name);
}

function higherOrder(func) {
  return function showName() {
    func("Md Sadikur Rahman");
  };
}

higherOrder(greetings)();
