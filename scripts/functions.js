console.log("Functions JS");
//1. Decalre the fn (create the  function)
function login(){
    console.log("Welcome to the system");
}

//2. Call fn (code, console, user)
login();

//Ex 2. Fn with 1 parameter
function logout(user){
    console.log("Goodbye " + user + " see you later");
}

logout("Leticia");

//Example 3. 2-3 parameters 
function gradeExam(student, correctItems, points){
    let totalPoints = correctItems * points;
    console.log(`${student} grade of exam is: ${totalPoints}`);
}

gradeExam("Andy", 10, 1);
gradeExam("Angy", 9, 1);
gradeExam("Isaac", 8, 1);

// Mini Challenge

function doubleNumber(num){
    let total = num * 2;
    console.log(`${total}`);
}

doubleNumber(2);

// Example 4 Return 
function add (num1, num2){
    let total = num1 + num2;
    return total;
}

let x = add(10,13)
console.log (`The result is: ${x}`);

//Example 5 - using the return value in another calculation 

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


//Example 6 Retun vs console.log 

//v1: Console 

function addWrong(num1, num2){
    console.log(num1 + num2);
}

let result1 = addWrong(4,6);
console.log(result1); // undefined, nothing was returned! 

//v2: return 
function addCorrect(num1, num2){
    return num1 + num2; 
}
let result2 = addCorrect(4,6);
console.log(result2); //10

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