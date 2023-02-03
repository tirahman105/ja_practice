// let num = [-1,2,-3,4,5,6,-7,8,-9,10];
// let count = 0;

// for(let i =0; i <num.length; i++){
//     const element = num[i];
//     // console.log(element);
//     if(element >5){
//         // console.log(element + " yes");
//         count = count + 1;

//     }else{
//         // console.log(element + " no");
//     }
// }
// console.log(count);

function greaterThanFive(numbers){
    let count = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element>5){
            count ++;
        }
        

    }return count;
}
let result = greaterThanFive([-1,2,-3,4,5,6,-7,8,-9,10]);
console.log(result);




