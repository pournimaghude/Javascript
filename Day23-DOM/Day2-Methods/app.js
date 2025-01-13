let p = document.getElementsByTagName("p");
console.log(p);

[...p].forEach((v, i) => {
    console.log(v, i);
});

for (let i = 0; i < p.length; i++) {
    p[i].style.background = "pink";
    p[i].style.color = "white";
    p[i].style.padding = "10px 20px";
}

let d = document.querySelector(".demo");
console.log(d);

let h2 = document.querySelector("#heading");
console.log(h2);
// h2.innerHTML = "hello world";
h2.innerText = "Hello world";

let s = document.querySelector("section");
console.log(s);
s.innerHTML = `<h2>Section content</h2>`;
// s.innerText = `<h2>Section content</h2>`;

let para = document.querySelectorAll(".demo");
console.log(para);  //NodeList


// para.forEach((v,i)=>{
//     console.log((v,i));
//     v.style.background = "yellow";
//     v.style.padding = "10px 20px"
// });

let m = document.createElement("article");
m.innerHTML = `<h1> Article content</h1>`;
console.log(m);

s.appendChild(m);

let main = document.querySelector(".m2");
console.log(main);

main.innerHTML =
    `
<div>DEMO CONTENT</div>
<h2>DEMO CONTENT</h2>
<h1>DEMO CONTENT</h1>
`;

let c1 = document.createElement("div");
let c2 = document.createElement("h2");
let c3 = document.createElement("h1");

// [c1, c2, c3].forEach((v) => {
//     v.innerHTML = "DEMO CONTENT";
// });
main.append(c1, c2, c3);


