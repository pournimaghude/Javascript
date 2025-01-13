// homogenous Array:
var ar = [10, 20, 30, 40, 50]
console.log(ar);

//heterogenous array:
const v=[null, 200, 1n,true, "js",["react", "node"], (e)=>e ];
console.log(v.length);
console.log(v[3]);
console.log(v[5][0]);
console.log(v[6]("arrow function"));
console.log(v[7]);//undefined

v[7] = "java" // adding
v[3] = false; // updating

v[10 ] = undefined;
console.log(v[8]);
delete v[5];
console.log(v);