
let tbody = document.querySelector("tbody");

async function demo(){
    try {
    let data = await window.fetch("./data.json");
    let finalData = await data.json();
    let{products}=finalData;
    products.map((v) =>{
        tbody.innerHTML += `
        <td>${v.id}</td>
        <td>${v.title}</td>
        <td>${v.category}</td>
        <td>${v.price}</td>
        <td>${v.rating}</td>
        <td>${v.stock}</td>
        <td>${v.brand}</td>
        <td><img src="${v.thumbnail}" alt="img"></td>
        `
    })
} catch (error) {
        console.log(error);
    }
}
demo();