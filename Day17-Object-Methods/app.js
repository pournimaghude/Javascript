//Object Methods

// 1]Object freeze()

// 2]seal() : only upate data iss possible . addd or delet not possible

// 3]isFrozen():use to check data is freeze or not if it is it will 
// return true else return false

// 4]isSealed(): use to check data is seal or not if it is it will 
// return true else return false

// 5]Keys():it will return all key are present in Object. in the form of array 
// it will take one argument

// 6]values(): it will return all values that are present in Object. in the form of array 
// it will take one argument

// 7]entries(): it will return all entries(key & value) are present in Object. 
// in the form of 2D array. it will take one argument

// 8]assign() : if we want merge two or more object then use assign method
// it is static method. it will affect Original object.





// 1]Object freeze():we cant add, update, delete value when we use freezze method
// its take one argument 

const data = {
    name : "Pournima",
    id: 101,
    skills: ["java", "html"],
    addres:{
        roomNo:907,
        location:"Ambernath",
    },
    isMarried:false,
    fan:"rohit Sharma",
    fn: ()=>{
        console.log("fn");
    }
};
data.fn();

Object.freeze(data);
// update id 
data.id = 300;
console.log(data);

// add key=  job
// data.job="software developer";
// console.log(data);

// delete key 
// delete data.isMarried;
// console.log(data);

// 2]console.log(Object.isFrozen(data));


// 3]seal() : only upate data iss possible . addd or delet not possible
    // Object.seal(data);
// update id 
// data.id = 300;
// console.log(data);

// add key=  job
// data.job="software developer";
// console.log(data);

// delete key 
// delete data.isMarried;
// console.log(data);

// 4]console.log(Object.isSealed(data));


// 5key:
// let K = Object.keys(data);
// console.log(k);

// 6]values
// let v = Object.values(data);
// console.log(v);

// 7]entries
// let e = Object.entries(data);
// console.log(e);

// compring datatype & values //
// let n = 100;
// let m = 100;
// console.log(n === m);

// comparing two object address
// let o1 = {name : "Pournima"};
// let o2 = {name: "Pournima"};
// console.log(o1 === o2);

// 8]assign():
// let o1 = {
//     name : "Pournima",
//     id: 200,
// };

// let address = {
//     pinCode : 400201,
//     roomNo: 201, 
//     location : "Mumbai",
// };

// let d = {
//     percentage: 87,
// };

// let mergeObj= Object.assign(o1, address, d);
// console.log(mergeObj);
// console.log(address);
// console.log(d);


// compring datatype & values //
// let n = 100;
// let m = 100;
// console.log(n === m);

// comparing two object-address
// let o1 = {name : "Pournima"};
// let o2 = {name: "Pournima"};
// console.log(o1 === o2);

// comparing two array
// let a1 = [10, 20];
// let a2 = [10, 20];
// console.log(a1 === a2);

// comparing two function
// let f1 = () => "function";
// let f2 = () => "function";
// console.log(f1 === f2);

// compring string datatype & values //
// let s1 = "str";
// let s2 = "str";
// console.log(s1===s2);

// compring bigInt datatype & values //
// let b1 = 10n;
// let b2 = 10n;
// console.log(b1 === b2);



// const ar = [10, 20];
// ar[0] = 100;
// console.log(ar);

// const obj = {
//     name : "Pournima",
// };
// obj.name="Akash";
// console.log(obj);