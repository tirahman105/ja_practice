function isEven(number){
  const remainder = number % 2;

  if (remainder === 0){
    console.log( "Number is even");
  }else{
    console.log("Number is odd");
  }

}
isEven(102);