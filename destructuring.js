// Array Destructuring 

const numbers = [2, 5, 8];

const [first, second] = [2, 5];

console.log("Destructuring from direct array = ",first);

const [x, y, z] = numbers;
console.log("Destructuring from a variables = ",z);

function  Numbers(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

const [a, b] = Numbers(50, 100);

console.log("Destructuring from Function ", b);

let students = {
    name: 'Md Sadikur Rahman',
    age: 28,
    subjects: ['Software Development', 'Web Development', 'Mobile Web Application'],
}

const [sub1, sub2, sub3] = students.subjects;
console.log(sub3);


// Object Destructuring 

const {name, age} = {name: 'Sadik', age: 28}
const {email} = {name: 'Sadik', age: 28, email: 'sadik@gmail.com', phone: '01491790000'};

console.log("From Object Destructuring = ",name);
console.log("From Object Destructuring = ",email);
