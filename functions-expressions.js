function addNums(num1,num2) {
    return num1+num2;
}

const firstNum = addNums(10,20);
const secondNum = addNums(300,550);

// function expression - declaring a variable and writing function in it
const add = function addNums(num1,num2) {
    return num1+num2;
}
const thirdNum = add(220,330);
const result = [firstNum, secondNum, thirdNum];
console.log(result);

// arrow function
const Addition = (num1,num2) => num1*num2;