// arrays and for loop
const firstNames = ["Emma","Ron","Harry"];
const lastName = "Watson";
const newValues = [];
for(let i=0;i<firstNames.length;i++){
   // console.log(firstNames[i]+lastName);
   newValues.push(firstNames[i]+" "+lastName);
}
console.log(newValues);