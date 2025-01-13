let obj = {
    name: "sara",
    id: 125,
};

let fn = function (a, b){
    console.log("fn function");
    console.log(this);
    console.log(a, b);
}
fn.call(obj, 10, 20);


// in arrow function it is not possible 
// let arr = ()=>{
//     console.log(this);//window object
// }

// arr.call(obj);

// apply():
// fn.apply(obj, [10, 20]);

// bind():


let newObj = {
    name: "Pournima",
    fn: function(){
        console.log(this);
    },
    getName(){
        console.log("getname function");
        // return this.name;
        console.log(this.name);
    },
};

// let n = newObj.getName.call(obj);
// console.log(n);

// console.log(newObj.getName());
// // we can call function 
// // 1]
// let y  = newObj.getName.bind(obj);
// y();

// // 2]
// newObj.getName.bind(obj)();