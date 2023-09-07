// functions, return, if, arrays, for loop and objects
const gas = [20, 30, 40,100];
const food = [20, 50, 30];
function calculateTotal(arr)
 {
    let total = 0;
    for(let i = 0;i<arr.length;i++) {
        total += arr[i];
    }
 // console.log(total);
    if (total>100){
        console.log("Hey you are spending too much money");
    }
    return total;
}
// calculateTotal(gas);
// calculateTotal(food);
let gasTotal = calculateTotal(gas);
let foodTotal = calculateTotal(food);
//console.log(gasTotal);
//console.log(foodTotal);
// objects
console.log({
    gas: gasTotal,
    food: foodTotal,
});