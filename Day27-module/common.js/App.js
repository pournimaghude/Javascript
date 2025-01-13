function demo(){
    console.log("demo function");
}

function sum(a, b){
    console.log(a+b);
}

let ar = [20, 10, 40, 50, 10];
let o = {
    name: "Pournima",
    ar,
    getName(){
        console.log(this.name);
        console.log(this["name"]);
    }
}

module.exports = {
    
}