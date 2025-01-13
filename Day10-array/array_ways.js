//(1)---litral_way:----
let arr =[10, 20, 50n, false, null];
// console.log(arr.length);
// console.log(typeof arr);

//(2)--- using array constructor:---
let a = new Array(10,20);//---only number//one number take as length
console.log(a);

let b = new Array(10n);//element
console.log(b);

let c = new Array(true , "str", [10, 20]);
console.log(c);


//(3)---array.of():---

let newArr = Array.of("10", 20, 1n, (e)=>e);
console.log(newArr);

let newAr2 = Array.of(10);
console.log(newAr2);


//isArray--static method-returning ----true/false---only return true arrY is there
let num = 10;
// var obj = {name : "pournima"};
// console.log(Array.isArray(obj));//false
// console.log(Array.isArray(num));//false
// console.log(Array.isArray(arr));//true--because it is an array
// console.log(typeof obj);//object
// console.log(typeof arr);//object
