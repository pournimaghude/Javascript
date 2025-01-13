let form = document.querySelector(".form-control");
let username = document.querySelector("#username");
let password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e);
    console.log(username.value);
    console.log(password.value);
})