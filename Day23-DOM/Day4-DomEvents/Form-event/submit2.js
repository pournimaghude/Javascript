let email = document.querySelector("#email");
let password = document.querySelector("#password");
let percentage = document.querySelector("#percentage");
let gender = document.querySelector("gender");
let genderRes;

Form.addEventListener("submit", (e)=> {
   e.preventDefault() ;

   console.log(e);
//    console.log(email.value);
//    console.log(password.value);

gender.forEach((v, i) => {
    if (v.checked) genderRes = v.value;
    
});
console.log(genderRes);
});

let span= document.querySelector(".display-percentage");
percentage.addEventListener("input", (e) =>{
    span.innerHTML = e.target.value;
});

percentage.addEventListener("change", (e)=>{
    console.log(e);
});
console.log(genderRes);