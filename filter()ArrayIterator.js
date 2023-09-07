// filter() - returns a new array....
// can manipulate the size of new array..
// returns based on condtion...

const people = [
    {name:"emma",age:21,position:"heroine",id:1},
    {name:"harry",age:22,position:"hero",id:2},
    {name:"ron",age:24,position:"hero frnd"},
    {name:"ron",age:27,position:"hero frnd"},
];

const youngPeople = people.filter(function(item){
    return item.age <= 25;
});
console.log(youngPeople);

const newArray = people.filter(function(item){
    return item.position === "heroine";
    // if condition not satisfied, it returns an empty array
});
console.log(newArray);

const array = people.filter(function(item){
    return item.id === 2;
});
console.log(array);