function showRestaurantName (){
    console.log(`Welcome to Sage & Stone!`);
}
showRestaurantName();


function greetCustomer(name){
    console.log(`Welcome ${name}! We are happy to have you at Sage & Stone!`);
}

greetCustomer("Alex");
greetCustomer("Jordan");
greetCustomer("Rick");


function calculateTotal (price, taxRate){
    let taxAmount = price * taxRate;
    let total = price + taxAmount;
    return total;
}
 let tacosTotal = calculateTotal(10, 0.08);
 let salmonTotal = calculateTotal(20, 0.08);
 let pastaTotal = calculateTotal(15, 0.08);

console.log(`The price for Tacos Al Pastor: $${tacosTotal.toFixed(2)}`);
console.log(`The price for Salmon & Herbs: $${salmonTotal.toFixed(2)}`);
console.log(`The price for Mushroom Pasta: $${pastaTotal.toFixed(2)}`);


function calculateTip(totalPrice, tipPercent){
    let tipAmount = totalPrice * tipPercent;
    return tipAmount;
}   

let finalPrice = 100;
let taxRate = 0.08;
let tipPercent = 0.15;
let totalPrice = calculateTotal(finalPrice, taxRate);

console.log("Price: $" + finalPrice.toFixed(2));
console.log("Total with Tax  $" + totalPrice.toFixed(2));
console.log("Tip Amount  $" + calculateTip(totalPrice, tipPercent).toFixed(2));
console.log("Total Price  $" + (totalPrice + calculateTip(totalPrice, tipPercent)).toFixed(2));

