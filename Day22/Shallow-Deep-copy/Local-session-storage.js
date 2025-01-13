//-------------- local-session-storage------------

// 1]localStorage:
// console.log(window.localStorage);
console.log(window.sessionStorage);

localStorage.setItem("name", "Pournima");
localStorage.setItem("id", 101);
localStorage.setItem("isMarried", true);
localStorage.setItem("skills",["js","react"]);
localStorage.setItem("address", JSON.stringify({doorNo:200, location:"thane"}));

console.log(typeof localStorage.getItem("id"));
console.log(localStorage.getItem("isMarried"));

console.log(localStorage.getItem("skills"));
split:
console.log(localStorage.getItem("skills").split(""));



console.log(JSON.parse(localStorage.getItem("address")));

// localStorage.removeItem("id");
// localStorage.clear();
// console.log(localStorage.length);


// 2]sessionStorage:

sessionStorage.setItem("name", "Akash");
sessionStorage.setItem("id", "101");

console.log(sessionStorage.getItem("id"));
console.log(sessionStorage.getItem("name"));

// console.log(sessionStorage.removeItem("id"));

// sessionStorage.clear();
// console.log(sessionStorage.length);
