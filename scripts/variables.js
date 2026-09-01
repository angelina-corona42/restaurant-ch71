// --- Comments --------- (dashes can be used as seperators)
// Comments are notes for humans/ developers - the browser ignores them
// Using two forward slashes is to add comments into JavaScript 
// comsole.log(10+2) - this  line is commented out, it won't run 
/* This is still a comment
This is s multiline comment 
Everything between the notation will be commented out
*/
// ---- Strings ----- (Data Type)
// A string is text, always wrapped in single or double quotes 
// to create a varible we have to:
/*
1. Declare it with a name 
2. Initialize it with a value (optional) */
let firstName = "Angie"; 
/* Camel Case Notation 
Each word that we add to a name the first letter, needs to be in upper case. 
Except for the first one */
let thisIsAnExampleForAVariable;
thisIsAnExampleForAVariable = "Example";
let city = "San Diego";

console.log("Hello World from variables.js")
console.log(city);
console.log(firstName, thisIsAnExampleForAVariable);

//We can update a let variable 
firstName="Carl"
console.log(firstName);

// ----- Numbers ----- (Data Type)
let age = 25;
console.log(age);

// ------- Booleans ----- (Data Type)
// A boolean is either true or false - nothing else. 
let  isStudent = true;
let isLoggedIn = false;
console.log(isStudent);
console.log(isLoggedIn);

//---- Arthimic Operators -----
let num1 = 10;
let num2 = 3;

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;

console.log("Sum: " + sum);
console.log("Subtraction: " + sub);
console.log("Multiplication: " + mul);
console.log("Division: " + div);

// Building strings with variables 
// Option 1: Concatenation (using +)
console.log("My name is " + firstName + " and I live in " + city);
// Option 2: Template literals (cleaner - use backticks ``)
console.log(`My name is: ${firstName} and I live in ${city}`);

// ---- Constants ----- 
// const constantName = this value will NEVER change, best practice to type ALL CAPS
const DAYSINWEEK = 7;
const PI = 3.14; 

console.log(DAYSINWEEK)
console.log(PI);

// DAYSINWEEK = 5 , you are not able to change after 
// ---- Rule of Thumb ----
//Use const by default 
//Switch to let only if you need to change the value 

// ---- Note about var (older code) --- 
// You may see "var" in old code or old tutorials online (5-7 yrs ago). 
// It's an older way to declare variables - we don't use it 
// Always use let or const 

// ----- Prompt ------ 
// promp() asks the user a question and gives you their answer 
// Number() converts strings into a number so we can so math with it 
let userAge = Number(prompt("How old are you?"));
console.log(userAge + 30);
console.log("====================")

/* 
Mini Challenge 1 : Warm Up
*/

const FIRSTNAME = "Angelina";
let myAge = 25;
let sdkuStudent = True;
console.log(`My name is + ${FIRSTNAME} , I am ${myAge} years old. Am I student? ${sdkuStudent}`);

/*Optional Challenge

*/
let  = Number(prompt("How old are you?"));
