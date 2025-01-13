var a = 100;
let b = 200;
const z = 300;

console.log(a, b, z);

function abc(s, e){
    let x = 1000;
    var p = 900;
    const c= 3000;
    console.log(x);
    console.log(s, e);
    console.log(p + c);
}
abc("str1", "str2");
// console.log(p);// p is not defind

let variable = "";
{
    var q = "javascript";
    let r = "java";
    const s = "React";
    console.log(q, r, s);
}
console.log(q);

