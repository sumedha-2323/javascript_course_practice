// loops in js are while, do-while and for

// while loop
let amount = 10;
while(amount > 0) {
    console.log("I have enough money");
    amount--;
}

// do while loop
 let amount1 = 12; // even if the condition is false, 1st it will run for 1 time
 // bcz 1st it will execute the statement inside console.log
 do{
    console.log("I have "+ amount1+" dollars");
    amount1++;
} while(amount1 < 10);

// for loop

let i;
for(i=0;i<10;i++) {
    console.log("I have "+i+" rupees");
}

for(let num=10;num>=0;num--) {
    console.log("The number is: "+ num);
}

// for loop is used when we know the count ie., how many tyms should execute is known
// while loop is used when the count is not known
// do while loop is used even the condition is false, it should execute for 1 time
