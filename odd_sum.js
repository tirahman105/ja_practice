function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element
        // console.log(index, element, sum);
    }
}


function getOddNumbers(numbers){
    const oddNumbers = [];
    const sumOfOddNumbers =[];
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !==0){
            // console.log(element);
        }
        oddNumbers.push(element);
        sum = sum + element;

        // console.log(element ,sum);
        sumOfOddNumbers.push(element);
        console.log(oddNumbers);
        console.log(sumOfOddNumbers);



        // console.log(index, element);
    }
}
const myNumbers = [12, 65, 45,78, 32, 45,91];
getOddNumbers(myNumbers);
getSumOfAnArray(myNumbers);