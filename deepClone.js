// Deep clone is a technique that allow the clone of the object and all the nested object and array.

function deepClone(obj) {
  return structuredClone(obj);
}

// We need to fallback to JSON.parse(JSON.stringify(obj)) if the structuredClone is not supported.
// JSON.parse(JSON.stringify(obj)) is a technique that allow the clone of the object and all the nested object and arra
function fallbackDeepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const original = {
  name: "Md Sadikur Rahman",
  age: 28,
  subjects: [
    "Software Development",
    "Web Development",
    "Mobile Web Application",
  ],
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
  skills: ["JavaScript", "React", "Node.js"],
};

// if structuredClone is supported, then use it, otherwise use fallbackDeepClone.
const copy =
  typeof structuredClone === "function"
    ? structuredClone(original)
    : fallbackDeepClone(original);

// push a new subject to the copy object
copy.subjects.push("Artificial Intelligence");

console.log("Original object: ", original.subjects); // Output: ["Software Development", "Web Development", "Mobile Web Application"]
console.log("Copy object: ", copy.subjects); // Output: ["Software Development", "Web Development", "Mobile Web Application", "Artificial Intelligence"]
