var student = {
    name: 'Trilok Navya',
    birthYear: 2002,
    course: 'IFT 554',
    grade:100,
    active: true,
    age: function(){
        if(this.active){
            return 2023 - this.birthYear;
        }
        
    } 
}

var student2 = {
    name: 'Uma',
    birthYear: 2000,
    course: 'IFT 554',
    grade:99,
    active: true,
    age: function(){
        if(this.active){
        return 2023 - this.birthYear;
    }else{
        return 0;
    }
    } 
}

console.log(student2.age());
console.log(student.age());
