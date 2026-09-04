console.log("Conditional logic initialized.");

//if statement asks a yes/no question about a condition 
//--- Syntax: if (condition) { code to run if true }

let result = 30;

//>< ==  
if (result > 60) 
//if only runs its code when the condition inside() is true
 {
    console.log("You passed the test!");
}

// ----- Equality Comparisson Operators -----
// Value: 5 vs 5 = same value 
// Data Type: number vs string x= different type

//case 1: 5 == 5 -> true 
// case 2: 5 == "5" -> true -> true because checks values rather than data types
//case 3: 5 === "5" --> false -> false because checks value AND datatype 

// ----- "if else" Statement ------
// This give JavaScript two paths :
// true -> run the "if" block 
// false -> runs the "else" block

//---- Example Syntax--- 
/* 
if (condition){
code to be run if the condition is true
}else {
code to be run if the condition is false;
}
*/

let points = 10
if (points > 60){
    console.log("You won!");
}else {
    console.log("You lose");
}

//Challenge 2: Print if the water is boiling or not consider 100 as the boiling point 

let boiling = 101
if (boiling >= 100){
    console.log("Water is boiling!")
}else{
    console.log("Water is not boiling.")
}

// ----- "else-if" Condition ----- 
// This is to check more than 2 possibilities 

// --- Example Syntax --- 
// if (condition1)
// code to be run if the condition1 is true 

//} else  if (condition2){
//code to be run if the condition2 is true

//}else 
// code to be run if the condition are false
//}

let age = 100;

if(age < 13){
    console.log("You are a child");
}else if (age < 21){
    console.log("You are a teenager");
}else if (age <64){
    console.log("You are a an adult");
}
else{
    console.error("Error!!!! It is not valid");
}

//Challenge 1: MILESTONE 

let viewerAge = 20

if(viewerAge < 12){
    console.log("Ticket costs $5");
}else if (viewerAge < 18){
    console.log("Ticket costs $8");
}
else {
    console.log("Ticket costs $10");
}

// Challenge 3: 

function typeOutfit(temprature){
    if(temprature < 15){
    console.log("Please wear a jacket!");
} else if(temprature < 25){
    console.log("Maybe wear a sweater");
} 
else {
    console.log("Ticket costs $10");
}
    
}
//let temp = Number(prompt("Enter the temprature"));
//console.log(getOutfit(temp));

// -- && and || are logical operators ---

// && = AND - BOTH conditions must me true 
// || = OR - at least ONE condition must be true

let hour = 13

if (hour >= 12 && hour <= 16){
    console.log("Lunch time!");
}

let isWeekend = false;
let isHoliday = false;

if(isWeekend || isHoliday){
    console.log("Restaurant is closed today");
}else (isHoliday || isWeekend)


// -- bollean Parameter

function getGreeting(isVIP){
    if(isVIP){
        return "Welcome back, valued member";
    }else{
    return "Welcome, consider joining our membership";
    }
}
console.log(getGreeting(true));
console.log(getGreeting(false));

// Challenge 2: Come back to this to understand more 

function userType(){
    if(userType == "admin"){
        console.log("Full Access");
        console.log("Welcome Admin");
    }else if (userType == "editor"){
        console.log("Access but limited");
        console.log("Welcome Editor");
    }else{
        console.log("You do not have access");
    }

}

//Challenge 4: 

function getDiscount(totalAmount) {
    if (totalAmount > 50) {
        return .15;
    } else if (totalAmount > 30) {
        return .1;
    } else if (totalAmount > 15) {
        return .05
    }
    return 0;
}
function calculateDiscount(total, discount) {
    return total - (total * discount);
}   
let price = 60;
let discount = getDiscount(price);
let total = calculateDiscount(price, discount);
console.log(`Total after discount ${discount * 100}% is $${total}`);
    


 

