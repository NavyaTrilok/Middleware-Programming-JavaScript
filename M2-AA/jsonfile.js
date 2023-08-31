const fs = require('fs');

var students = [];

var student = {
    name: 'Trilok Navya',
    birthYear: 2002,
    course: 'IFT 554',
    grade: 100,
    active: true,
    age: function () {
        if (this.active) {
            return 2023 - this.birthYear;
        }
    }
}

var student2 = {
    name: 'Uma',
    birthYear: 2000,
    course: 'IFT 554',
    grade: 99,
    active: true,
    age: function () {
        if (this.active) {
            return 2023 - this.birthYear;
        } else {
            return 0;
        }
    }
}

students.push(student);
students.push(student2);

// Convert the students array to JSON format
const jsonData = JSON.stringify(students, null, 2);

// Write the JSON data to a file named 'studentdata.json'
fs.writeFileSync('studentdata.json', jsonData, 'utf-8');

students.forEach((item) => console.log(item.age()));

console.log(students);
