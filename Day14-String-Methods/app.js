// 1]slice: used to extract part of string similar to sustring 
// but it will accept negative value 
// if we pass negtive it will strt right to left 
let s = "Javascript";
// let R = s.slice(2, 6);
// console.log(R);

// let y = s.slice(-5, -1);
// console.log(y);

// 2]s.substring; used to extract the part of string similar to slice but it will not accept negative value
//if we pass negtive it will return emty string
// let y = s.substring(1, 4);
// console.log(y);
// console.log(s.substring(-4, -1));

// 3]length:it is  property , return length of string 
// console.log(s.length);
// console.log(s[9]);

// 4]charAt : based on indedx position it will return character, 
// it will take one argument that is length of character

let v = [10,20];
console.log(s.charAt());
// console.log(v.charAt(4));  //not arrray method it is  string method

// 5]charCodeAt: it will return asci value
// console.log(s.charCodeAt(8));
// console.log(s.charCodeAt(4));

//6]replace: not replace all subsstring bydeult replace first mtching
// let str = "this is javascript lecture and you will learn javascript";
// r1 = str.replace("javascript", "java");
// console.log(str);
// console.log(r1);


// 7]replaceAll: if you want to replace all substring usse it.
// let r3 = str.replaceAll("javascript", "java");
// console.log(r3);

// 8] includes :  the substring is present it will return true if not present it will return false
// let str2 = "hello world";
// console.log(str2.includes(" "));
// console.log(str2.includes("hel", 5));


// 9] indexOf: the substring is present it will inde position, if not present it will return -1
// console.log(str2.indexOf("ELLO")); //-1
// console.log(str2.indexOf("ello"));


// 10]lastindexOf:
// console.log(str2.lastIndexOf("ELLO")); //-1
// console.log(str2.lastIndexOf("ello"));


// let s = "Hello ";
let r = "World ";
let y = "Welcome";

// 11]concat: to join two string.
// console.log(s.concat(s, r));

// 12] trim: it will remove white space both side of string right and left .
//it will accept two parameter trimend and trimstart 
let u = "              Welcome all!!!!!                ";
// console.log(u.trim());

// trimstart: remove whiten space from start
// console.log(u.trimStart());

// trimend: remove white spaace from end
// console.log(u.trimEnd());

// let p = "REACT";
// // toUppercasr: convert all lowercase into uprcass
// console.log(p.toUpperCase());
// // toLowercase: convert all uprcase into lowercase
// console.log(p.toLowerCase());