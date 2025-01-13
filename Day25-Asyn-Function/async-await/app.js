// let p1 = Promise.reject("promise resolved");

// let arr = async ()=>{
//     try{
//         console.log("start");
//         await p1;
//         console.log("rest of the code");
//         console.log("end");
//     }catch(error){
//         console.log("err");
//     }
// };
// arr();

// console.log("hello");
// console.log("hi");

//fetch data using async and await:

async function fetchData(){
    try{
        let data = await window.fetch('https://dummyjson.com/products');
        let finalData = await data.json();
        finalData.products.map((v, i) => {
            console.log(v);
        });
    }catch(error){
        console.log("err");
    }
}
fetchData();