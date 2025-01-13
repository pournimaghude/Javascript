// Array Higher order function
// 1]Find ()
// 2]find index () 
// 3]filter ()
// 4]map ()
// 5]Some ()
// 6]every ()
// 7]forach()
// 8]reduce ()
// 9]reduceLight()
// 10]sort ()


// let ar = [10,20,30,70, 100, 96, 68];

// 1]Find ()
// let r1 = ar.find((v,i,a)=>{
//     return v>650;
// });
// console.log(r1);

// 2]Find index (): 
// let r2 = ar.findIndex(function (v, i, a){
//     // console.log(i);
//     return v> 960;
// });
// console.log(r2);


// 3] Filter ()
// let r3 = ar.filter((v,i,a)=> {
//  return v>505;
// });
// // -- console.log(ar);
// console.log(r3);


// 4]Map ()
// let r4 = ar.map((v,i,a)=>{
//     return v + 10;
// });
// // console.log(ar);
// console.log(r4);


// 5] Some ()
// let r5 = ar.some((v,i,a)=>{
//     return v > 65;
// });
// console.log(r5);


// 6]every ()
// let r6 = ar.every((v,i,a)=>{
//     return v>4;
// });
// console.log(r6);


let ar = [20,10,30,40,100,10];
// 7] foreach():
// ar.forEach(function(v,i,a){
//     console.log(v);
//     // console.log(i);
//     // console.log(a);
// });

// 8]reduce ()
// let r1 =ar.reduce((acc, cv)=> acc + cv);
// console.log(r1);

// 9]reduceRight () 
// let r2 = ar.reduceRight((acc,cv)=>acc+cv);
// console.log(r2);

// 10]sort
let fruits = ["banana", "Mango", "orange", "grapes", "watermelon"];
fruits.sort();
console.log(fruits);

let numAr = [2, 100, 34, 250, 1000, 9];
numAr.sort(function(a, b){
    return a - b;
});
console.log(numAr);


// numAr.sort(function(z, y){
//     if(z> y) return 1;
//     else if(y > z) return -1;
//     return 0;
// });
// console.log(numAr);