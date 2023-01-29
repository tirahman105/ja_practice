/* var moneyGiven = 1000;
var applePrice = 400;
var orangePrice = 300;

var expense = applePrice + orangePrice ;
var remainingAmount = moneyGiven - expense;

console.log(remainingAmount);
 */

var totalAmount = parseFloat(prompt("Enter your total amount"));
var applePrice =  parseFloat(prompt("Enter apple Price"));
var orangePrice =  parseFloat(prompt("Enter orange Price"));

var expense = applePrice + orangePrice ;
var remainingAmount = totalAmount - expense;

document.write("Your expense is " + expense + "<br>");
document.write("Your remaining amount is " + remainingAmount );