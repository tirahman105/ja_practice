function add (num1,num2){
    if( typeof num1 !== 'number' || num2 !== 'number'){
        console.log('please insert number');
    }
    return num1 + num2 ;
}
const result = add (10, '20');
console.log(result);