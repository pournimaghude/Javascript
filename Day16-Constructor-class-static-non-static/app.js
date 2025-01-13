// 1]litral Way :
// let o = {
//     name:"pournima",
//     id: 101,
//     skills: ["js", "html"],
// }
// console.log(o);

// 2]using class & constructor :

let x = 100;
class Employee{
    static number= 100;
    str = "javascript";
    constructor(name, id, skills) {
        this.eName=name;
        this.eId=id;
        this.eSkills=skills;
    }

    // non-static method
    getName(){
        console.log("name method");
        console.log(this.eName);
    }

    // static method
    static f1(){
        console.log("static method");
    }
}

let e1 = new Employee("Pournima", 101, ["java", "js"]);
// console.log(e1);

// calling non-static method 
e1.getName();
// calling non-static variable
console.log(e1.str);

let e2 = new Employee("akki", 102, ["python", "html"]);
console.log(e2);

// calling static method 
Employee.f1();
// calling static variaable 
console.log(Employee.number);


// 3]using constructor function

function Student(name, id, percentage){
    this.s.name=name;
    this.s.id=id;
    this.s.percentage=percentage;
}

let s1 = new Student("pratiksha", 201, 72);
console.log(s1);

// 4]using Object constructor
let o = new Object();
o.name = "Abc";
o.id = 101;
console.log(o);