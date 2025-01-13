// --------------Typecasting----------------
// 1)Implicit-Typecasting:
console.log(10 + "10");//num convert into string
console.log(100 - "10");//string is convert into num
console.log(100 - "str");//string not convert into number
console.log("10" - "10");//both is num that's why string is convert into num
console.log("100" / 10);
console.log(105 % "10");


//2)Explicit-Typecasting:
 let num = 20.9873;
 let x = parseInt(num);
 console.log(x);

 let y = parseFloat(num);
 console.log(y);

 let str = "javaascript";
 let z = parseInt(str);
 console.log(z);

let n = 1000;
let s = n.toString();
console.log(typeof n);
console.log(typeof s);