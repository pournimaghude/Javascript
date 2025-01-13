let p1 = Promise.resolve("resolve promise 1");
let p2 = Promise.reject("rejected promise 1");

let p3 = new Promise((res,rej)=>{
    let r = false;
    if(r) rej("rejected promise 2");
    else res("resolve promise 2")
});
// console.log(p1);
// console.log(p2);
// console.log(p3);


// to handle rejected Promise we make use of Promise static methods 
// static methods in Promise:

// 1]all:
// let r1 = Promise.all([p1, p3]);
// console.log(r1);
// r1.then(
//     (d)=>console.log(d),
//     (e)=>console.log(e)
// );

// 2]any:
// let r2 = Promise.any([p2, p3]);
// r2.then(
//     (d)=>console.log(d),
//     (e)=>console.log(e)
// );

// 3]allSettled:
let r3 = Promise.allSettled([p1, p2, p3]);
console.log(r3);





// // 4]race :

// let p1 = new Promise((res, rej)=>{
//     setTimeout(()=>res("resolve promise 1"), 2000);
//     setTimeout(()=>rej("rejected promise 1"), 4000);

// });

// let p2 = new Promise((res, rej)=>{
//     setTimeout(()=>res("resolve promise 2"), 500);
//     setTimeout(()=>rej("rejected promise 2"), 1000);
// });
// let r1 = Promise.race([p1, p2]);
// console.log(r1)





