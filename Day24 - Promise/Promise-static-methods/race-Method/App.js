// 4]race :

let p1 = new Promise((res, rej)=>{
    setTimeout(()=>res("resolve promise 1"), 2000);
    setTimeout(()=>rej("rejected promise 1"), 4000);

});

let p2 = new Promise((res, rej)=>{
    setTimeout(()=>res("resolve promise 2"), 500);
    setTimeout(()=>rej("rejected promise 2"), 1000);
});
let r1 = Promise.race([p1, p2]);
console.log(r1);



