// reduce()
//iterates and uses callback function...
// reduces to a single value just adding them - num, array, object...
// 1 parameter('acc') - total of all calculations...
// 2 parameters('curr') - current iterations/value...

const people = [
    {name:"emma",age:21,position:"heroine",id:1,salary: 500},
    {name:"harry",age:22,position:"hero",id:2, salary: 450},
    {name:"ron",age:24,position:"hero frnd",id:3, salary:600},
    {name:"ron",age:27,position:"hero frnd",id:4, salary: 650},
];

const newArray = people.reduce(function(acc,curr){
    console.log(`Total salary: ${acc}`);
    console.log(`current person salary: ${curr.salary}`);
    acc = acc + curr.salary;
    return acc;
},0);
console.log(newArray);