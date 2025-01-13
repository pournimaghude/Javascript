let form = document.querySelector(".form-controll");
console.log(form);

let formm = {
    email: email.querySelector(".email"),
    password: password.querySelector(".password"),

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(formm.value);
    
    // console.log(e);
});
