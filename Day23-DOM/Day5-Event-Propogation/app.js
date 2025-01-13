let gp = document.querySelector(".gp");
let p = document.querySelector(".p");
let cp = document.querySelector(".c");

document.addEventListener(
    "Click", 
    (e)=>{
        e.stopPropagation();
        console.log(e.eventPhase);
        console.log("documne clicked");
    }, 
    false

);
gp.addEventListener(
    "Click", 
    (e)=>{
        e.stopPropagation();
        console.log(e.eventPhase);
        console.log("grandparent clicked");
    }, 
    {capture: false}

);
p.addEventListener(
    "Click", 
    (e)=>{
        e.stopPropagation();
        console.log(e.eventPhase);
        console.log("parent clicked");
    }, 
    false

);
c.addEventListener(
    "Click", 
    (e)=>{
        e.stopPropagation();
        console.log(e.eventPhase);
        console.log("child clicked");
    }, 
    false
);

c.addEventListener(
    "Click", 
    (e)=>{
        e.stopPropagation();
        console.log("chile clicked 2nd time");
    }, 
    false

);
