// forEach() - does not return new array

const people = [
    {name:"emma",age:20,position:"heroine"},
    {name:"harry",age:22,position:"hero"},
    {name:"ron",age:23,position:"hero frnd"},
];

function showPerson(person){
    console.log(person.name.toUpperCase());
}

people.forEach(showPerson);

//directly writing function..

people.forEach(function(item) {
    console.log(item.name.repeat(3));
})



// const num = [0,1,2,3,4,5];

// function eachNum(each) {
//     console.log(each);
// }
// num.forEach(eachNum);

