let o1 = {
    name: "virat",
    id: 18,
    skills: ["batsman", "right arm quick bowler"],
    address: {
        location: "londan",
        doorNo: 80,
    },
    isMarried: true,
    children: 2,
};

// shallow copy 
// 1]copying object reference:
// let copy1 = o1;
// console.log(copy1===o1);

// 2]using object.asign():

// let copy2 = Object.assign({},o1);
// o1.name = "dhoni";
// o1.skills[0] = "bowler";
// console.log(copy2);
// console.log(copy2===o1);

// 3]using for in loop 
let copy3 = {};
for (let key in o1){
    copy3[key]=o1[key];
}

// console.log(copy3 == o1);
// o1.name = "dhoni"
// o1.skills[0] = "bowler";
// o1.address.location = "Thane";
// console.log(copy3);

// 4]using spread operator 

let copy4 = {...o1};
o1.name = "dhoni"
o1.skills[1]= "kipper";
o1.address.location = "Thane";
console.log(copy4);

console.log(window.localStorage);
console.log(window.sessionStorage);




