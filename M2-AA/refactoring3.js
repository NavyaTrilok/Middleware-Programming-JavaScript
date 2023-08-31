
const greetTheStudent =  (studentName)=> `Hello there ${studentName}`;

/*const fullName = function(firstName, middleName, lastName){
    return `${lastName}, ${middleName}. ${firstName}`;
}*/

/*const fullName = (firstName, middleName, lastName) => {
    return `${lastName}, ${middleName}. ${firstName}`;
}*/

const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}. ${firstName}`;


/*const studentName = 'Navya Trilok';

const greet = greetTheStudent(studentName);

console.log(greet);*/

const titleName = fullName('Mary','R','Jane');
console.log(titleName);