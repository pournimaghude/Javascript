"useStrict"

//* argument object:

function demo(){
    console.log(arguments);
    console.log(Array.isArray(arguments));
    console.log(Array.from(arguments));
    console.log([...arguments]);
    console.log("demo function");

}
demo(10, 20, 30, 40, 60);

let arguments = 10;
console.log(arguments);