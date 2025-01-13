// types of function:
// 1)anonymous function
// 2)Named function
// 3)function with expression
// 4)arrow function
// 5)IIFE function



// 1)anonymous function:------------------\
// let y = function(r,y){
//     console.log(r+y);
// }
// (10,20);

// 2)Named function:-----------------
// function demo(){
//     console.log("named function");
//     return 100;
// }
// demo();


// 3)function with expression:-----------------
// let x = function(){
//     console.log("function with expression");
//     return "FWE";
// };
// x();

// 4)arrow function:------------------
// let arr = () =>{
//     console.log("arrow function");
//     return "str";
// };
// arr();

// const arrr = (a) => console.log("arrr fn 2", a);
// arrr(10);

// var arr1 = () =>100;
// console.log(arr1());
// var arr2 = function() {
//     return 100;
// };


// 5)IIFE function:Imediate Invoke funtion Expression-----------------------
((r,t )=> {
    console.log(r+t);
})(10,30);

// var st1 = "javascript";
// ((a, b) => {
//     console.log("java");
//     console.log("IIFE");
//     console.log(st1);
//     console.log(a, b);
// })
// (10, 20);


// 6)Higher order function (HoF):---------
// function HOF(a, b){
//     console.log("Higher order function");
// console.log("arow function");
// }

// HOF((x) => x , 20); 