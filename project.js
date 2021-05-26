const tax_rate = 0.09;
const price_phone= 99.99;
const price_accessory = 9.99;
const spending_threshold = 400;

var purchased_amount = 0;

var bank_account_balance= 1500;

var account_for_phone = parseInt(prompt("Your bank account balance is $" + bank_account_balance + ".\nHow many phone do you want to buy?"));

var confirm_accessory=prompt("Do you want to buy accessory for each phone? Y/N");

for (x=0;x<account_for_phone;x++){
    purchased_amount += price_phone;
    
    if (confirm_accessory.toUpperCase === "Y" ){
    purchased_amount += price_accessory;
    }
    purchased_amount += calculate_tax(purchased_amount);
}

if (purchased_amount >= bank_account_balance){

    alert("you can't afford it much")
}
else {
    purchased_amount = rounding (purchased_amount);
    alert (" The total amount spent " + formatting_price(purchased_amount)+ "\n You bought " + account_for_phone + " phone"+ "\n Your bank account balance is $" + rounding( bank_account_balance - purchased_amount));
}



function calculate_tax ( purchased_amount) {

    return purchased_amount * tax_rate;
}

function  formatting_price () {
    return  "$" + String (purchased_amount);
}

function rounding(purchased_amount){

    return Math.round(purchased_amount * 100) / 100;
}