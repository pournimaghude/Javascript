let textArea = document.querySelector("#message");
// textArea.addEventListener=("keyup", (e)=>{
//     console.log(e);
//     console.log(e.target.value);
// });

// textArea.addEventListener=("keydown", (e)=>{
//     console.log(e);
//     console.log(e.target.value);
// });

// textArea.addEventListener=("keypress", (e)=>{
//     console.log(e);
//     console.log(e.target.value);
// });

let body = document.querySelector("body");
textArea.onkeydown = (e)=>{
    let r = Math.floor(Math.random()* (999999 - 100000) + 100000);
    body.style.background = `#${r}`;
};

