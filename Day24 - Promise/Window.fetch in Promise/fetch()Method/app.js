let data = window.fetch("./data.json");
// console.log(data);

let div =document.querySelector(".container");
data.then(
    (d)=>{
        let fD = d.json();
        fD.then(
            (final) =>{
                let {employee : e} = final;
                e.map((v, i, arr)=>{
                    div.innerHTML +=
                   `<h1>NAME: ${v.name}</h1>
                    <h2>ID: ${v.id}</h2>
                    <h3>SALARY: ${v.Salary}</h3>`;
                });
            },
            (err) => {console.log(err);}
        );
    },
    (e)=>{ console.log(e);
});
