
// console.log(name1Charecter);
// console.log(name2Charecter);

function reverseName(name1 ,name2){
    // let name1 = "Tareq";
    // let name2 = "Abdullah";
    
    let name1Charecter = name1.length;
    let name2Charecter = name2.length;
    
    if(name1Charecter>name2Charecter){
        return name1.split("").reverse().join();
    }else{
        return name2.split("").reverse().join();
    }
}
let result = reverseName("TareqIbna", "Anonna");
console.log(result);