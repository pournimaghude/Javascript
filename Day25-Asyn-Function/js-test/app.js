let l = document.querySelector(".l1");

l.addEventListener("mouseover", function(e){
    l.style.background = "green";
    l.style.color = "#111";

})

l.addEventListener("mouseout", function(e){
    l.style.background = "white";
    l.style.color = "#111";

})