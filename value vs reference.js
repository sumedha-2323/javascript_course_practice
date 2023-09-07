// primitive datatypes - string, number, boolean, null, undefined, symbol
// object - arrays, functions, objects

// for primitive datatypes - changes happens only for num2 but not the original 
// num ie., num1
let num1 = 10;
let num2 = num1;
num2 = 20;
console.log(`The first number is ${num1}`);
console.log(`The second number is ${num2}`);

// for objects - if there is a change in person2 then there will be change in person1 also
// when assigning non-primitive datatypes value to a variable
// is done by reference so any changes will affect all the references
// let person1 = {name:"Emma"};
// let person2 = person1;
// person2.name = "Harry";
// console.log(`The person1 is ${person1.name}`);
// console.log(`The person2 is ${person2.name}`);

// to solve this issues, there is a feature in ES6
let person1 = {name:"Emma"};
let person2 = {...person1}; // just to cpoy paste details from person1 to person2
person2.name = "Harry";
console.log(`The person1 is ${person1.name}`);
console.log(`The person2 is ${person2.name}`);