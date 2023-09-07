// find() - returns single instance - (in the cae of objects)
// returns 1st match, if no match - undefined...
// great for getting unique values...

const people = [
    {name:"emma",age:21,position:"heroine",id:1},
    {name:"harry",age:22,position:"hero",id:2},
    {name:"ron",age:24,position:"hero frnd",id:3},
    {name:"ron",age:27,position:"hero frnd",id:4},
];

const findId = people.find(function(item){
    return item.id === 3;
});
console.log(findId); // does not return an array, just returns that object...

const newNames = ["emma","ron","harry","john"];

const findName = newNames.find(function(item){
    return item === "emma";
});
console.log(findName);