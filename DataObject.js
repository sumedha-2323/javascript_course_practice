// date....

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const date = new Date();
//console.log(date);
monthNum = date.getMonth();
console.log(months[monthNum]);

dayNum = date.getDay();
console.log(days[dayNum]);

dateNum = date.getDate();
console.log(dateNum);

console.log(date.getFullYear());

const sentence = `${days[dayNum]}, ${dateNum} ${months[monthNum]} ${date.getFullYear()}`;
console.log(sentence);

//DOM ==> Document Object Model
document.body.innerHTML = sentence;