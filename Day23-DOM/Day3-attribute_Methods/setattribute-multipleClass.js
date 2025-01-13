let p = document.getElementById("p1");
p.setAttribute("class", "demo");
p.setAttribute("class", "active");
p.className = "para";
// console.log(p);

// classList:
p.classList.add("demo","active", "para");

p.classList.remove("demo","active", "p1")
// console.log(p);


let r1 = p.classList.contains("para")
// console.log(r1);


let h1 = document.querySelector("#head");
let res = h1.classList.toggle("demo");
// let res = h1.classList.toggle("focus");
console.log(res);

setInterval(()=> h1.classList.toggle("heading"), 2000);


