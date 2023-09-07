// map() - returns a new array..
//does not change the size of original array....
// use values from original array when making new array...

const people = [
    {name:"emma",age:20,position:"heroine"},
    {name:"harry",age:22,position:"hero"},
    {name:"ron",age:23,position:"hero frnd"},
];

const ages = people.map(function(person){
    return person.age;
});
console.log(ages);

const NewArray = people.map(function(person){
    return {
        firstName:person.name,
        newAge:person.age,
    };
});
console.log(NewArray);