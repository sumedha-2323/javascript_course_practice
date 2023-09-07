
// 1 inch = 2.54 cm
function calculate(value){
    //console.log("The value in cm is "+ value * 2.54 +"cm");
    const newValue = value * 2.54;
    return newValue;
    // writing code after return keyword doesn't work in function
    console.log("Hello"); // doesn't work
}
const width = calculate(100);
const height = 80;
const wallHeight = calculate(height);
// to store a value after function call, we have to use return keyword in the function
// otherwise, it returns undefined

const dimensions = [width, wallHeight];
console.log(dimensions); // the arrays returns undefined
