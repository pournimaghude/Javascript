async function demo(){
    // console.log("start");
    //     let y = 100;
    //     console.log(y);
    //     let v = "js";
    //     const c = "10";
    //     c = "100";
    //     console.log(v);
    //     return 1000;
    try{
        console.log("start");
        let y = 100;
        console.log(y);
        let v = "js";
        const c = "10";
        c = "100";
        console.log(v);
        return 1000;

    }catch(error){
        // console.log(error);
        console.log("error");
    }finally{
        console.log("finally block");
    }
}

let x = demo();
// x.then(
//     (d)=>{
//         console.log(d);
//     },
//     (e)=>{
//         console.log("Promise rejected");
//     }
// );

console.log("hello");
console.log("hi");

