// 1] reverce(): 
// let str = "Javascript";
// let r3 = str.split("");
// r3.reverse();
// let joinArr = r3.join("");
// console.log(joinArr);

// let r = [10, 20, 30, 40, 50];
// r.reverse();
// console.log(r);


// reverse in one line using inbuild method reverse & join
// let r4 = str.split("").reverse().join("");
// console.log(r4);

//reverse string using reduceRight inbuilt method
// let r5 = str.split("").reduceRight((acc,cv)=>acc+cv,"");
// console.log(r5);


//2] fill():
// let arr = [10 , 20, 30, 40, 50, 60];

// console.log(arr.fill('str'));
// console.log(arr.fill('str', 2, 5));

// let e1 = arr.fill('str', 2);
// console.log(e1);

// 3]indexOf
// console.log(arr.indexOf(30));
// console.log(arr.indexOf(20,2));

// 4] lastIndexOf
// console.log(arr.lastIndexOf(30));
// console.log(arr.lastIndexOf(40,7));

// 5]flat
// let ar1 = [10, ["p", "q" [ 100, 200, ["java"]],"js"], 30, 40]
// let e1 = ar1.flat();
// let e2 = e1.flat();
// let e3 = e2.flat();
// console.log(e3);

// let r2 = ar.flat(3);
// console.log(r2);

// 6] includes()
let ar = [10,20,30,40,10,80,68];
let r1 = ar.includes("20");
console.log(r1);
