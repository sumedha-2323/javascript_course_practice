// global scope 
// any variable outside code block {} is said to be in global scope
// can be access anywhere in the program
// gotchas : name collisions, modified by mistake

let name = "emma";
name = "harry";
function fullName() {
    console.log(name);
    name = "ron";
}
fullName();
console.log(name);
if(true) {
    console.log(name);
    name = "watson";
}
console.log(name); 
// if the name is changed anywhere, next the updated value will be consoled
// once declared, anywhere can be used
