let p = new Promise((res, rej)=>{
    let isDataFetched = false;
    if (isDataFetched) {
        res("Promise resolved");
    } else {
        rej("Promise Rejected");
    }
});

p.then((d)=>{
    console.log(d);
    console.log("Promise 1 res");

}).catch((e)=>{
    console.log(e);
    console.log("Promise 1 rej");
}).finally(()=>{
    console.log("finally");
});
