function leapYear(year){
    const remainder = year % 4
    if (remainder ==0 ){
        console.log("Leap year");
    }else
    {
        console.log("Not leap year");
    }
}
leapYear(2028);