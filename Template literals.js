// template literals - in ES6+
// backtick caracters - `` 
// interpolation ${} - insert expression (value)

const firstName = "Sumedha";
const age = 20;
const sentance = "Hey it's "+firstName+" she is "+age+" years old";
console.log(sentance);

// instead of concatenating, we can use backtick and interpolation
const value = `Hey it's ${firstName} she is ${age} years old. Math Calc ${4 + 3}`;
// not only strings but also math calculations can be done...
console.log(value);