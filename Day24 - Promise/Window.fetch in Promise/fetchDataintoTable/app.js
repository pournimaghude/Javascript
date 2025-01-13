
let tbody = document.querySelector("tbody");

 async function demo(){
    try{
    let d = await fetch("./data.json");
    let fD = await d.json();
    let{employee}=fD;
    employee.map((v)=>{
        tbody.innerHTML+= `
        <td>${v.name}</td>
        <td>${v.id}</td>
        <td> ${v.Salary}
        `;
    })
}
catch (error) {
    console.log(error);
}
}
demo();