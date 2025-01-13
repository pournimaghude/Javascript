let o1 = {
    name: "virat",
    id:18,
    skills:["batsman", "right arm quick bowler"],
    address:{
        location:"london",
        doorNo:80,
    },
    children: 2,
    isMarried:true,
};
// shallow copy: 
// using object refernce 

// let n = 100;
// let y = n;
// n = 300;
// console.log(y);
// console.log(n);

// let copy1 = o1;
// o1.id = 5;
// console.log(copy1);
// console.log(o1);


// deep copy : 
// structuredClone():

// let copyObj = StructureClone(o1);
// o1.name = "akki";
// o1.address.location="delhi";
// console.log(copyObj);

// stringyfy & parse:

let copyObj1 = JSON.parse(JSON.stringify(o1));
o1.name = "akki";
o1.address.location="delhi";
console.log(copyObj1);