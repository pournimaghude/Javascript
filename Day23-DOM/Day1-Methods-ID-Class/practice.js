let h1 = document.getElementById("head");
console.log(h1);

let y = setTimeout(
    ()=>{
        h1.style.background = "hotpink";
        h1.style.color = "#fff";  
    }, 3000
);

let demo = document.getElementsByClassName("demo");
console.log(demo);


for (let v of demo ){
    v.style.background = "blue";
    v.style.color = "white"
}

console.log(Array.isArray());

