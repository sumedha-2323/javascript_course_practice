const firstName = "Sumedha";
const lastName = "Jammula";
const fullName = firstName + lastName;
console.log(fullName);

const num1 = 10;
const num2 = 20;
const sum = num1 + num2;
console.log(sum);

const sub = firstName - lastName;
console.log(sub); // gives a result as NaN ie., not a number

let num3 = "10";
let num4 = "20";
let sum2 = num3 * num4; // if both num are added it consider it as a string
// if other than add operation is used, then it consider the numbers as integers not strings
console.log(sum2);