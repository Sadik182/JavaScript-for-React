let numbers = [4, 5, 6, 1, 8];

let students = {
    name: 'Md Sadikur Rahman',
    age: 28,
    subjects: ['Software Development', 'Web Development', 'Mobile Web Application'],
}


//  1. Tamplate String
const aboutMe = `My name is ${students.name} age of ${students.age} My favourit subject is ${students.subjects[0]} the number I liked most is ${numbers[2]}`;
console.log(aboutMe);



//  2. Arrow Function

const getNumber = () => 30;

const getDouble = num => num * 2;

const isEven = x => x % 2 == 0;
const sumOfTwo = (num1, num2) => {
    return num1 + num2;
}


// 3. Spread Operator

let newNumbers = numbers;
let newArray = [...numbers];
console.log(newArray);

// create an array from an old array with new elements

let arrayWithNew = [...numbers,12];
console.log(arrayWithNew);



numbers.push(10);
numbers.push(2);

console.log(newNumbers);


