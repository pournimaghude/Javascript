// simple function:-

function add(a, b){
    return a + b;
}
console.log(add(10, 20));



// -------currying function:-----------

function sum(a){
    return function(b){
        return a + b;
    }
}

let x= sum(10);
let t = x(20);
console.log(t);

console.log(sum(10)(10));