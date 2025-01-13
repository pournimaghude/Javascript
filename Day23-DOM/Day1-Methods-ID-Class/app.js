//----------------DOM(Document Object Model)------------------------
// console.log(window);
// console.log(document);

let h1 = document.getElementById("head");
// console.log(h1);

setTimeout(()=>{
    h1.style.background = "hotpink";
    h1.style.color = "#fff";
}, 5000);

let demo = document.getElementsByClassName("demo");
// console.log(demo);
// console.log(demo[0]);
// console.log(demo[1]);

// demo[0].style.color = "blue";

for(let v of demo){
    // console.log(v);
    v.style.background = "#111";
    v.style.color = "#fff";
}

console.log(Array.isArray(demo));
let newr = (Array.from(demo));
console.log(newr);

console.log([...demo]);

let newrr = (Array.prototype.slice.call(demo));
console.log(newrr);