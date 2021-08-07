let hours = Number(prompt("Please input the number of hours worked."));
let wage = Number(prompt("Please input the wage per hour."));

if (hours <= 40) {
    paycheck = hours * wage;
    console.log(`The paycheck is $${paycheck}.`); 
} else {
    paycheck = 40 * wage + (hours - 40) * (wage * 1.5);
    console.log(`The paycheck with overtime is $${paycheck}.`); 
}

let weekCount = 0;
let totalWages = 0;
while (totalWages < 1000000) {
    totalWages += paycheck;
    weekCount++;
    if (totalWages >= 1000000) {
        break;
        //console.log(`With a weekly paycheck of $${paycheck}, it will take ${weekCount} weeks to earn a million dollars. Those taxes though...`);
    } 
}

let years = weekCount / 52;
console.log(`With a weekly paycheck of $${paycheck}, it will take ${weekCount} weeks to earn a million dollars. That's around ${Math.ceil(years)} years. Those taxes tho...`);

// That was a challenge.. 
// I commented out my console.log() statement in the while loop, 
// would it be better to have it in the while loop? 
// If the program will run the same either way, is one way 
// preferred in terms of style?
