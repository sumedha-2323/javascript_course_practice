// objects - key/value pairs, functions also be written in objects

const person = {
    firstName : "Sumedha",
    lastName : "Jammula",
    age : 20,
    education : true,
    married : false,
    friends : ["gayathri","baby"],
    greet: function () {
        console.log("Hello");
    },
};

console.log(person);
console.log(person.firstName); // dot notation - to get a particular value
console.log(person.education); 
person.greet();

//another way of accessing the values without dot notation
console.log(person["lastName"]);

// typeof operator
console.log(typeof person);
console.log(typeof person.age);