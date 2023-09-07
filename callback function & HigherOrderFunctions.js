// functions are first class objects - stored in a variable(expression), 
// passed as an argument to another function, return from the function (closure)

// Higher order function - accepts another fun as an argument or 
// returns another fun as a result

// callback fun - passed to an another function as an argument and excuted inside that fun

//callback function
function morning(firstName) {
    //console.log(`Good mrng ${firstName}`);
    return `Good mrng ${firstName}`;
}

function afternoon(firstName) {
    return `Good afternoon ${firstName}`;
}

// assumes a higher order function
function greet(firstName,cb) {
    const myName = "Sumedha";
    console.log(`${cb(firstName)}, my name is ${myName}`);
}
greet("emma",morning);
greet("harry",afternoon);