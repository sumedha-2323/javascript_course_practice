// local scope - can't be access from outside code blocks
// if - not var

let name = "emma";
function fullName() {
    const name = "harry";
    let lastName = "potter";
    a = "i'm a global variable"; // as there is no variable, it considers it as global variable
}
//console.log(lastName); // error bcz its consoled after the function
fullName();
console.log(a);
console.log(name);

if(true) {
    const age = 20;
}
console.log(age);