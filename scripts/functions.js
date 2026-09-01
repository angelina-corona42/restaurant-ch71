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

/* ------Good Visual Rule: -------

function add (...) = DECLARING / creating the function 
add(...) = CALLING / running the function

*/

console.log (`The result is: ${x}`);

//------ 5. Use between return vs console.log ------

// ---- console.log() -----

function addWrong(num1, num2){
    console.log(num1 + num2);
}
//Inside Function: Is being told to display the calculation = 10
// console.log() can show you a calculation even if the function does not return anyhting

let result1 = addWrong(4,6);
console.log(result1); 
// This will print "undefined" because the function does not return a value


// ----- return -------

// return gives a value back to the place where the function was called, so it can be stored in a variable and used later

function addCorrect(num1, num2){
    return num1 + num2; 
}
let result2 = addCorrect(4,6); // This will become let result2 = 10 because the function returns the value of the calculation

console.log(result2); // This will display 10 on the console


//------ 6. Using the return value in another calculation ------

function applyDiscount(price, discountPercent){
    // price = 100, discountPercent = 0.10, this can almost be thouhgt of as being replaced by its retunred value

    let discount = price * discountPercent;
    // discount = 100 * 0.10 = 10

    return price - discount;
    // return 100 - 10 = 90
}

function addDeliveryFee(total,fee){
    return total + fee;
    // return 90 + 0.10 = 90.10
}

let originalPrice = 100; 
// You plug this into the applyDiscount function as the price parameter

let priceAfterDiscount = applyDiscount(originalPrice, 0.10); 
// the function will return as 90 due to the returned value of the applyDiscount function

let finalPrice = addDeliveryFee (priceAfterDiscount, 0.10);
// the function will return as 90.10 due to the returned value of the addDeliveryFee function

console.log("Original price: $" + originalPrice);
//this will display "Original price: $100" because the originalPrice variable is 100

console.log("After discount $" + priceAfterDiscount.toFixed(2));
// the toFixed(2) method is used to format the number to two decimal places, so it will display "After discount $90.00"

console.log("After discount $" + finalPrice.toFixed(2));
// the toFixed(2) method is used to format the number to two decimal places, so it will display "After discount $90.10

/*                     ---- Note ----
the dot (.) = use something that is connected to the value of the variable 

A method is a a function that belongs to a specific value
*/

// 7. ---- Global vs Local ----

/*
global variable = created outside a function can usually be used inside and outside

local variable  = created inside a function only exists inside that function
*/

let globalVar = "I exist everywhere";

function showScope(){
    let localVar = "I only exist inside this fn";
    
    console.log(localVar);
}

showScope();
console.log(globalVar)
//console.log(localVar); - ERROR localVar does not exist, in order to see it outside the function, you need a return


// Mini Challenge #1 - Create a function that takes a number as a parameter and doubles it. Call the function and print the result to the console.

function doubleNumber(num){
    let total = num * 2;
    console.log(total);
}

doubleNumber(2);
doubleNumber(5);

// Note: The function does not return a value, it just prints the result to the console. If you wanted to use the doubled value later, you would need to use "return" instead of "console.log".

// Mini Challenge #2 - Combine Names: Create a function called 'combineNames' that takes two parameters : firstName and lastName, and combines them into a full name. 

function combineNames(firstName, lastName=){
    let fullName = firstName + lastName;
    console.log(`"Hello, my name is" ${firstName} ${lastName}`);
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