// variable lookup

const globalNum = 5;
function add(num1,num2) {
    const globalNum = 20;
    const result = num1 +num2 + globalNum;
    function mul() {
        // const globalNum = 4;
        const mulResult = result * globalNum;
        console.log(mulResult);
    }
    mul();
    return result;
}
console.log(add(4,3));
