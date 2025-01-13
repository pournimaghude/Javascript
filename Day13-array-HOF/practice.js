let r = [5,8,9,3,5,4,7,3,8];

// let u = r.find((r,i,y)=>{
//     return r>6;
// });
// console.log(u);

// let t = r.findIndex((r, i, y)=>{
//     return r>6;
// });
// console.log(t);

// let i = r.filter(function(r, i, y){
//     return r>6;
// });
// console.log(i);


// let o = r.map((i, v, p)=>{
//     return  i + 2;
// });
// console.log(o);

// let l = r.some((v,i,o)=>{
//     return v > 6;
// });
// console.log(l);

// let y = r.every((v,i,o)=>{
//     return v>2;
// })
// console.log(y);

let p = r.reduce((pv,cv)=> pv+cv);
console.log(p);


// let y = r.sort(function(v,u){
//     if(v>u){
//         return -1;
//     }else if(u>v){
//         return 1;
//     }
//     return 0;
// });
// console.log(y);