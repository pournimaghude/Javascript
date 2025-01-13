let div = document.querySelector(".container");

div.addEventListener("mouseover", function (e) {
    console.log(e );
    div.style.background = "red";
    div.style.color = "#fff";
});

div.addEventListener("mouseout", function (e) {
    console.log(this);//target element
    console.log(e);
    div.style.background = "#fff";
    div.style.color = "hotpink";
});