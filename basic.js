// Variable 

// data type 
// -------------string------------


var firstName= "tareq";
var age= 31;
var maritalStatus = true;

// console.log(firstName);
// how to check data type? 

console.log("Data type of the variable is " + typeof firstName);
console.log("Data type of the variable is " + typeof age);
console.log("Data type of the variable is " + typeof maritalStatus);

var tareq = {
    name : "Tareq",
    age : 31,
};
console.log(typeof tareq);


// when we try to add or substract 
// parseInt is used to convert string into number 
var num1 = 10;
var num2 = "20";

var num2Convert = parseInt(num2);

var sum = num1 + num2Convert;

console.log(sum);

// when we try to add or substract string values we need to convert then into number. 

// parseFloat is used to convert floating number 

var price1 = 10.33;
var price2 = "11.3456";

var totalPrice = price1 + parseFloat(price2);

console.log(totalPrice.toFixed(2));

