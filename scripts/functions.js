console.log("Functions JS");
//----1. Decalre the fn (create the  function)-----
// This says "I am creating a function called login"
function login(){
    console.log("Welcome to the system"); 
    /* 
    This runs the built in console.log function and prints the message to the (js) console 
    */

    /* 
    If it was just the console.log() function, it would not run because only the function was defined 
    */
}

/* Mental Note 
function login() { } = write the recipe 
login(); = make the recipe
console.log() = one instruction inside the recipe
*/

//-------2. Call function (fn) ------

// This means run the login function
login();

//------Function with 1 parameter (code, console, user)------
// "user" is considered a parameter, a parameter is a temporary placeholder for a value that will be used

function logout(user){ // This says a function called logout, and when it runs, it expects one peice of info called "user"
    console.log("Goodbye " + user + " see you later");
}

logout("Leticia");
//Displays the actual value of the parameter
// Argument = the actual value you give when calling the function, in this case "Leticia" is the argument for the parameter "user"


/* 
Good Visual Rule: 

function add (...) = DECLARING / creating the function 
add(...) = CALLING / running the function
*/

//------3. Functions with 2-3 parameters ------

// Parameter lets the function be reusable, so you can call it with different values.

/* 
"let" and "const" are --keywords-- that you use when you are creating a variable yourself, 
 you do not use "let" or "const" when you are using a parameter, because the parameter is already created for you.
*/

function gradeExam(student, correctItems, points){ 
    // These are parameters so they do not need "let" or "const"

    let totalPoints = correctItems * points;
    // "totalPoints" is a new variable that is created inside the function, so it needs "let" or "const"

    console.log(`${student} grade of exam is: ${totalPoints}`);
}

gradeExam("Andy", 10, 1);
gradeExam("Angy", 9, 1);
gradeExam("Isaac", 8, 1);

/* ------Mental Note For 2-3 parameters:-----

Did the variable come through the function parentheses?

YES = don't use let/const

Am I creating a new variable myself?

YES = use let or const
*/


// Mini Challenge #1 - Create a function that takes a number as a parameter and doubles it. Call the function and print the result to the console.

function doubleNumber(num){
    let total = num * 2;
    console.log(`${total}`);
}

doubleNumber(2);

// ---- 4. Return -----
// "return" is a keyword that allows you to send a value back to the place where the function was called.

function add (num1, num2){
    let total = num1 + num2; 
    // This is a local variable, which then becomes 10 + 13, this stores the calculation inside the function

    return total; 
    // This sends the value of total back to the place where the function was called
}

let x = add(10,13) 
// This is where the function is called, this stores the the returned value outside the function in a variable called "x"

console.log (`The result is: ${x}`);

//------ 5. return vs console.log ------

//v1: console.log 

function addWrong(num1, num2){
    console.log(num1 + num2);
}
//Inside Function: Is being told to display the calculation = 10
// console.log() can show you a calculation even if the function does not retunr anyhting

let result1 = addWrong(4,6);
console.log(result1); 
// This will print "undefined" because the function does not return a value


//v2: return 
function addCorrect(num1, num2){
    return num1 + num2; 
}
let result2 = addCorrect(4,6);
console.log(result2); //10


//Example 6 - using the return value in another calculation 

function applyDiscount(price, discountPercent){
    let discount = price * discountPercent;
    return price - discount;
}

function addDeliveryfee(total,fee){
    return total + fee;
}

let originalPrice = 100;
let priceAfterDsicount = applyDiscount()
let finalPrice = addDeliveryfee (originalPrice, 0.10);

console.log("Original price: $" + originalPrice);
console.log("After discount $" + priceAfterDsicount.toFixed(2));
console.log("After discount $" + finalPrice.toFixed(2));

// Mini Challenge #2'

function combineNames(firstName="Unknown", lastName="Unknown"){
    console.log(`${firstName} + ${lastName}`)
}

combineNames ("Brian, Shepard");

//Mini Challenge #3

function convertToSeconds(min){
    let seconds = min*60;
    console.log(`${min} -> ${seconds}`);
}

convertToSeconds(1);
convertToSeconds(2);
convertToSeconds(10);




// Global vs local 

let globalVar = "I exist everywhere";

function showScope(){
    let localVar = "I only exist inside this fn";
    console.log(globalVar);
    console.log(localVar);
}

showScope();
console.log(globalVar)
//console.log(localVar); - ERROR localVar does not exist

// Mini Challenge #4 : Write two functions: one that calculates a price with tax and one that calculates a tip on that total. Call them in sequence so the result of the first goes into the second. Print the original price, the total with tax, and the tip amount.

function calcTax(price, percent){ //I need to fix this once I understand this more 
    let tax = price * tax;
    return price - tax;
}

function calcTip(total,fee){
    return total + fee;
}

let price = 100;
let orignalTax = priceTax();
let orignalTip = tipTotal();
let totalPrice = (0.05);

console.log("Original price: $" + originalPrice);
console.log("Original Tax $" + applyTax.toFixed(2));
console.log("Final Price  $" + finalPrice.toFixed(2));

// Mini Challenge 5 (Also look for help on this example)

function rectangleArea(width, height){ 
    let area = width * height;
    return area; 
}

console.log(recArea(3, 5));

function rectanglePerimeter(wdith, height){
    let perimeter = width * length;
}

//Mini Challenge # 6 

function calculatePayChaeck(hoursWorked, hourlyRate) {
    let gross = hoursWorked * hourlyRate;
    let taxes = gross * .20;
    return gross - taxes; 
}
let paycheck = calculatePayChaeck(40, 15);
console.log (`"Your paycheck is: " ${paycheck}`);

//Mini Challenge 7 

let budget = 1000; // The problem is that there is two many "budget"

function spendMoney(amount){
    let budget = budget - amount; 
    return budget;
}
console.log(spendMoney(200));
console.log(budget); 

//Solution #7 

let budget = 1000; // 

function spendMoney(amount){
    let remaining = budget - amount; 
    return remaining;
}
console.log(spendMoney(200));// returns the remaining 
console.log(budget); // returns the budget 