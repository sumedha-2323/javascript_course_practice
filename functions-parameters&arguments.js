// function helloHarry() {
//     console.log("Hello harry");
// }

// function helloRon() {
//     console.log("Hello ron");
// }

// function helloEmma() {
//     console.log("Hello emma");
// }

// helloHarry();
// helloRon();
// helloEmma();

// instead of writing different functions, we can use parameters and arguments

function greet(name, question) { // here, name is a parameter
    console.log("Hello, " + name +" "+ question);
}

greet("Harry,", "Are u from 10th class"); // here, "Harry" is a argument
greet("Ron");
greet("Emma");
greet(); // if there is no value, then it prints undefined
// in the arguments, instead of values, variables can also be given

const harry = "Harry";
greet(harry);