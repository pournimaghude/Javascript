"use strict" ;

a=10;
// var a = 10; //Uncaught ReferenceError: a is not defined

console.log(a);

function demo(a, b , b){ //Uncaught SyntaxError: Duplicate parameter name not allowed in this context
    console.log("start");
    console.log(a + b);
}
demo(10, 20, 30);
