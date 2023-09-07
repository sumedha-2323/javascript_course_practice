let fruitNames = ["apple","banana","cherry","mango","grapes"];
console.log(fruitNames.length);
console.log(fruitNames[4]);
console.log(fruitNames[fruitNames.length - 1]);

// to concate 2 arrays...
const firstNames = ["emma","ron","harry"];
const allNames = fruitNames.concat(firstNames);
console.log(allNames);
// TO REVERSE the array...
console.log(allNames.reverse());
// to add elements at end....push is used
allNames.push("orange");
console.log(allNames);
// to remove last element....pop
allNames.pop();
console.log(allNames);
// to add element at start....unshift
allNames.unshift("black berries");
console.log(allNames);
// to remove at start...shift
allNames.shift();
console.log(allNames);