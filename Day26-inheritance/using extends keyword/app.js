class Person{
    bonus = 100;
    constructor(name){
        this.name=name;
    }
    demoFn(){
        console.log("demoFn");
    }
}

let p1 = new Person("Pournima");
p1.bonus = 300;
console.log(p1);

let p2 = new Person("Pournim");
p1.bonus= 500;
console.log(p2);

class Employee extends Person{
    benefits = true;
    constructor(name, id, salary){
        super(name);
        this.eid=id;
        this.esalary=salary;
    }
    demo(){
        console.log("demo employee");
    }
}

let e1 = new Employee("Akash", 101, 30000);
console.log(e1);
e1.bonus=300;
console.log(e1.bonus);
e1.demoFn();
