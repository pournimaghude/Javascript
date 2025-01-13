// Rest Parameter:--------------
// Rest Parameter it is use to store the argument value in single paraeter 
// it should be present at last in praeter list 
// rest of the argument value it will store in the form of array 


// function fn(a, b, ...c) {
//     console.log("start");
//     console.log(a, b, c);
// }
// fn(10,20,30);

// spread Operator:-------------
// it is use to spread the value for the datatype those are iterable
//it is mostly use for string & array
// ar = "Pournima";
// {
//     console.log(...ar);
// }


// Destructuring:
// Destructuring is the pattern to pass the unique identifier to array 
// element  & Object value

// 1]Array Destructuring:
// Array destructuring follow thw order or seqence & we can pass any
// identification
// we can also store multiple array eleent uasing rest element & it shouldd be 
// defined at the last e.g.
const r = [10, 20, 30, 40, 50];
var [p,q,...o]=r;
console.log(o);


// 2]Object Destructuring

let obj = {
    name: "Pournima",
    id: 101,
    ad: "Mumbai",
};
let { name, fn, id, ad, ...rest } = obj;
console.log(name);
console.log(id);
console.log(rest);
console.log(ad);
console.log(fn);
