console.log("Arrays")
//-- An Array is one variable that can hold multiple realted values --//
// Element is one individual value inside an array 

let mondaySales = 320;
let tuesdaySales = 410;
let wednesdaySales = 290;

// Allows you to group values
const sales = [320, 410, 290];

// ----- Array Positions ----- // 
//JavaScript satrts counting at 0, not 1 (this is called an index)//

const days = ["Monday", "Tuesday", "Wednesday"];

// Monday = 0, Tuesday = 1, Wednesday = 2 , etc.  //

// ------ Arrays can contains strings, numbers, etc. ----- //

// String Array //
const foods = ["Tacos", "Salmon", "Pasta"];

// Number Arrays //
const prices = [10, 20, 15];

// Boolean Array //
const members = [true, false, true];

// ----- Array Length ----- //

// Arrays have a property called .length 
const days = ["Monday", "Tuesday", "Wednesday"];
//Then 
console.log(days.length);
//This would print out 3 because there are 3 items

// ----- Two Meanings to Brackets [] ----- //

// When creating the array they hold value
const sales = [320, 410, 290];

// But after the array already exists, it gives the value from the index
sales[0]

// ------ Loop ----- ///

// Loop means repeat some code multiple times //
// "i" = index or counter //
for (let i = 0; i < 3; i++) {
    console.log(i);
}

// let i = 0 (start at 0), i < 3 (keep going while i is less than 3), i++ (add 1 after each loop)

// ---- Connect Two Arrays Inside One Loop ---- //
const days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
const sales = [320, 410, 290, 505];

// You can use one loop //
for (let i = 0; i < days.length; i++) {
    console.log(days[i]);
    console.log(sales[i]);
}

// ----- Accumulator ----- //
// It is just a variable that keeps building as the loop runs 
let total = 0
total = total + sales[i]; // This is the shorter version (total += sales[i];) 
const sales = [320, 410, 290];

/*
start total = 0

i = 0
total = 0 + 320
total = 320

i = 1
total = 320 + 410
total = 730

i = 2
total = 730 + 290
total = 1020 
*/

//------- Average ------- //
let average = total / number 

// ------ Link a Loop to a Functions ------ //

let daySales = sales[i];
let label = getDayLabel(daySales);

/*
sales[i]
↓
get the sales for the current day
↓
store it in daySales
*/

// Example: //

function getWeatherLabel(temp){
    if (temp > 90){
        return "Very hot";
    }else if (temp > 75){
        return "Warm";
    }else if (temp > 60){
        return "Mild";
    }else{
        return "Cool";
    }
}
getWeatherLabel(80);

// Example 2: (Generic Structure) //
function getLabel(value){
    if (value > highestRange){
        return "Highest label";
    }else if (value > middleRange){
        return "Middle label";
    }else{
        return "Lowest label";
    }
}
// Example 3:  // 

const scores = [95, 82, 67, 74];
function getGradeLabel(score){
    if (score >= 90){
        return "A";
    }else if (score >= 80){
        return "B";
    }else if (score >= 70){
        return "C";
    }else{
        return "Needs improvement";
    }
}
// This loops through the array //
for (let i = 0; i < scores.length; i++){
    let currentScore = scores[i];
    let grade = getGradeLabel(currentScore);

    console.log(currentScore);
    console.log(grade);
}

// ------ Output String ----- //

// Instead of using console.log() every single line, you can use this to keep adding text to variable 

let output = "";

// Example 1 //
const names = ["Alex", "Jordan", "Sam"];

let output = "";

for (let i = 0; i < names.length; i++){
    output += `Hello ${names[i]}\n`;
}

console.log(output);
