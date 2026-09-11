function checkDelivery(priceTotal){
    if (priceTotal >= 30){
        console.log("Free Delivery");
    }else{
        console.log("Delivery fee applies.");
    } 
}
checkDelivery(35);
checkDelivery(22);
checkDelivery(30);

function getMenuType(hour){
    if (hour >= 7 && hour <= 11){
        console.log("Breakfast Menu");
    }else if (hour >= 12 && hour <= 16){
        console.log("Lunch Menu");
    }else if (hour >= 17 && hour <= 22){
        console.log("Dinner Menu");
    }else{
        console.log("We are closed");
    }
    
}
getMenuType(8);
getMenuType(13);
getMenuType(19);
getMenuType(2);

function applyMemberDiscount(price, isMember){
    let discountPercent = .10;
    let discountAmount = price * discountPercent;
    let discountedPrice = price - discountAmount;

     if (isMember){
        return discountedPrice;
    }else{
        return price;
    }
}
console.log(`Member Price: $${applyMemberDiscount(20, true).toFixed(2)}`);
console.log(`Regular Price: $${applyMemberDiscount(20, false).toFixed(2)}`);

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
    
function printOrderSummary(dishName, price, isMember){
    let orderTotal = calculateTotal (price, 0.08);
    let finalTotal = applyMemberDiscount (orderTotal, isMember);
    console.log("Order Summary: ");
    console.log(`Dish: ${dishName}`);
    console.log(`Original Price: $${price.toFixed(2)}`);
    console.log(`Total with Tax: $${orderTotal.toFixed(2)}`);
    if (isMember){
        console.log(`Member discount applied: $${finalTotal.toFixed(2)}`);
    }else{
    console.log(`No discount applied: $${finalTotal.toFixed(2)}`);
    }
    checkDelivery (finalTotal);
}
    printOrderSummary("Tacos Al Pastor",10, true); 
    printOrderSummary("Salmon & Herbs", 20, false); 
    printOrderSummary("Mushroom Pasta", 15, true); 
