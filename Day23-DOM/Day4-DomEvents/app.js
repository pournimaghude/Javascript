// DomEvents:

let div = document.querySelector(".container");
// console.log(div);

// Syntax:  target_element.Onclick = function(event_object){//code}
// 3 ways event handler:

// 1st way: using event handler property
// div.onclick = function (e) {
//     console.log("hello");
//     console.log(e);
//     div.style.background = "#111";
//     div.style.color = "#fff";
// };

// 2nd way: using addEventLisner()
// div.addEventListener("click", function (e) {
//     console.log("hello");
//     console.log(e);//pointer event 
//     div.style.background = "#111";
//     div.style.color = "#fff";
// });

// 3rd way :using event attribute

let handleClick = function (e) {
    console.log("hello");

    console.log(e);
    div.style.background = "#111";
    div.style.color = "#fff";

};

