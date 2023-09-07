// string is an object
// refer website- javascript string methods by w3schools or MDN

let text = "Jammula Sumedha";
console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(4));
console.log(text.charAt(text.length-1)); // for last char
console.log(text.indexOf("a"));
console.log(text.startsWith("jammula"));
console.log(text.trim()); // this method is used to remove the spaces at starting or ending
console.log(text.trim().toLowerCase().startsWith("jammula"));
console.log(text.includes("Sum"));
console.log(text.slice(0,9));