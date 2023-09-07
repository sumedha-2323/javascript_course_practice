// >, >=, <, <=, ==, !=, ===, !==
const value1 = 2 < 1
console.log(typeof value1);
if (value1) {
    console.log("Hello");
}
else {
    console.log("Bye");
}

const num1 = 7;
const num2 = 7;
if(num1>num2) {
    console.log("num1 is greater than num2");
}
else if(num1 >= num2){
    console.log("Both are equal");
}
else{
    console.log("num2 is greater than num1");
}

// not - !

const value = false;
if (!value) {
    console.log("Hello");
}

// == and ===
const a = 10;
const b = 10;
const result1 = a == b; // checks whether both values are equal or not
const result2 = a === b; // checks equality and also the type of value
console.log(result1);
console.log(result2);

