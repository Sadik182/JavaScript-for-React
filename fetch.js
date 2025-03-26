let students = {
    name: 'Md Sadikur Rahman',
    age: 28,
    subjects: ['Software Development', 'Web Development', 'Mobile Web Application'],
}

console.log(students);

const studentJson = JSON.stringify(students);
console.log(studentJson);

const studentObject = JSON.parse(studentJson);
