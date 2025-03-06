
// 1. Variables 

const name = 'Sadik';
let age = 28;


// 2. Data Types

let str = "Hello, World!";   // String
let num = 25;                // Number
let isActive = true;         // Boolean
let nothing = null;          // Null
let x;
console.log(x);  // Output: undefined (variable x is declared but not assigned)

function example() {
  // No return statement
}
console.log(example());  // Output: undefined (function returns nothing)

const sym1 = Symbol("description1");
const sym2 = Symbol("description2");

console.log(sym1 === sym2);  // Output: false (Symbols are always unique)

const obj = {};
obj[sym1] = "Value for sym1";
obj[sym2] = "Value for sym2";

console.log(obj[sym1]);  // Output: Value for sym1
console.log(obj[sym2]);  // Output: Value for sym2

const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);  // Output: 1234567890123456789012345678901234567890n

// Arithmetic with BigInt
const anotherBigNumber = 123456789012345678901234567890n;
console.log(bigNumber + anotherBigNumber);  // Output: 1234567890123456789012345679024691355670n



// 2.  6 Basic Conditions: >, <, ===, !==, <=, >=
// Multiples Conditions: &&, ||

let price = 10;
let quantity = 5;
if(price < 10) {
    console.log('Price is less than 10');
}
else if(price > 10){
    console.log("price is grater than 10");
}
else if(price === 10) {
    console.log("price is equal");
}
else if(price !== 10){
    console.log("Price is not equal!")
}
else 
{
    console.log("price is not equal");
}

if(price === 10 && quantity === 5){
    console.log("Price and quantity");
    
}

// 3. Array
// Arrays Declare 
// Index
// Lenth, push

let numbers = [4,5,6,77,22, 1, 89, 24];


// 4. Loops

for(let i = 1; i <=10; i+=2){
    console.log("the value of I are ", i);
}

let i = 9;
while(i > 8) {
    console.log("I am inside the While loop!");
    i--;
}

// 5. Function

function addition(num1, num2) {
    const result = num1 + num2;
    return result;
}

const output = addition(3,4);
console.log(output);


// 6. Objects

let students = {
    name: 'Md Sadikur Rahman',
    age: 28,
    subjects:['Software', 'Web Development', 'Mobile Web Application'],
}

console.log(students.name);