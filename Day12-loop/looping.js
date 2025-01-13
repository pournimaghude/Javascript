let s = "javascript";
//let ar = [10, 20, 30, 40, 50];

// for(let i =0; i<s.length; i++){
//     console.log(s[i]);
// }

//--------------// for indexing
// for(let index in s){
//     console.log(index);
// }

// for(let index in ar){
//         console.log(index);
  //  }

//-----------// for value
// for(let val of ar){
//     console.log(val);
// }

// for(var index of s){
//     console.log(index);
// }




// iteration

let ar = [10,20,30,40,50,60,11,13,25,27];
let newAr = [];

// for(let val of ar){
//     if(val>25){
//         newAr.push(val);
//     }
// }
// console.log(newAr);

let firstEle ;
for(v of ar){
    if(v>25){
        firstEle = v;
        break;
    }
}
console.log(firstEle);