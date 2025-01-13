//1] Creating promise by creating object reference
let p = new Promise((res,rej)=>res("Promise resolved"));
console.log(p);



// 2] creating Promise using inbuild method
let p1 = Promise.resolve("promise resolved");
// let p1 = Promise.reject("Promise Rejected");
// console.log(p1);

p1.then((d)=>console.log(d),(e)=>console.log(e));



