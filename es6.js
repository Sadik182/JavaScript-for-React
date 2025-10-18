let numbers = [4, 5, 6, 1, 8];

let students = {
  name: "Md Sadikur Rahman",
  age: 28,
  subjects: [
    "Software Development",
    "Web Development",
    "Mobile Web Application",
  ],
};

// 1. Destructuring with renaming by using colon :
const { name: studentName, age, subjects } = students;

console.log("Name is ", studentName);
console.log("Age is ", age);
console.log("Subjects are ", subjects);

// Nested Object Destructuring

const data = {
  profile: {
    email: "Sadikur@gmail.com",
    address: {
      city: "Dhaka",
      country: "Bangladesh",
    },
  },
};

const { profile: { email, address: { city, country } = {} } = {} } = data;
console.log("City is ", city);
console.log("Country is ", country);
console.log("Email is ", email);

// Array Destructuring
const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [, second, , , fifth, ...rest] = arry;

console.log("Destructured Arry with comma = ", second, fifth, rest);

//  1. Tamplate String
const aboutMe = `My name is ${students.studentName} age of ${students.age} My favourit subject is ${students.subjects[0]} the number I liked most is ${numbers[2]}`;
//console.log(aboutMe);

//  2. Arrow Function

const getNumber = () => 30;

console.log("Number from Arrow function = ", getNumber());

const getDouble = (num) => num * 2;

const isEven = (x) => x % 2 == 0;
const sumOfTwo = (num1, num2) => {
  return num1 + num2;
};

// 3. Spread Operator

let newNumbers = numbers;
let newArray = [...numbers];
//console.log(newArray);

// create an array from an old array with new elements

let arrayWithNew = [...numbers, 12];
//console.log(arrayWithNew);

numbers.push(10);
numbers.push(2);

//console.log(newNumbers);

// Array Reduce Method

function sum(...numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    10
  );
}

console.log("Sum of provlided numbers = ", sum(1, 2, 3, 4, 5));
