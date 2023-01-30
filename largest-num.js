/* You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.
You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.
Isosceles => two sides are equal */

/* var num1 = 13;
var num2 = 789;
var num3 = 45;

if( num1 > num2){
    if(num1> num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2> num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
} */

/* var num1 = 100;
var num2 = 1100;
var num3 = 900;
var num4 = 400; */

var num1 = parseInt(prompt("Enter 1st number"));
var num2 = parseInt(prompt("Enter 2nd number"));
var num3 = parseInt(prompt("Enter 3rd Number"));
var num4 = parseInt(prompt("Enter 4th number "))

if(num1>num2 && num1>num3 && num1>num4){
    // console.log( "Num 1 is largest ")
    document.write("Num 1 is largest ")
}
else if (num2>num3 && num2>num4){
    // console.log("Num 2 is largest ")
    document.write("Num 2 is largest ")
}
else if(num3>num4){
    // console.log("Num 3 is largest ")
    document.write("Num 3 is largest ")
}else if{
    // console.log("Num 4 is largest")
    document.write("Num 4 is largest ")
}