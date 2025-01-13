//prototype parent 

let p1 = {
    name: "Sachin", 
    id:101, 
    getName(){
        console.log(this.name);
    },
};
p1.getName();

const c1 = {
    name: "sara",
};

c1.__proto__ = p1;//making p1 as a parent of c1
console.log(c1);
c1.getName();
console.log(c1.id);

// Object create Method:

let v = {name: "abc", id: 102};
let newObj = Object.create(v);
newObj.name = "virat";
newObj.skills["js", "react"];
console.log(newObj);

