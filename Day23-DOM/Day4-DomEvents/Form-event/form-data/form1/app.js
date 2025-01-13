let form = document.querySelector(".form-control");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData(form);
    let finalData = Object.fromEntries(data);
    let course = data.getAll("course");
    finalData.course = course;
    console.log(finalData);
});