/* var i = 0;
for (i=0; i<5; i++){};
console.log(i); */

/* var marks = [ 13, 15, 14, 20, 18];
for(var i=0; i<marks.length; i++){
  if(marks[i] >=15){
    continue
  }
  console.log(marks[i]);
} */


// for (var i =0; i< 10; i++){
//   console.log(i)
// }

var numbers = [1,2,3,4,5,6,7,8];

var temp =[];
var temp2 =[];

// console.log(numbers);
for(var i =0; i<numbers.length ; i++){
  var element= numbers[i];
 if( element %2 ==0){
  temp.push(element);
 }
 if(element %2 !== 0){
  temp2.push(element);
 }
}
console.log(temp);
console.log(temp2);