function totalPrice(chal, dal, tel , lobon){
    var result = chal + dal + tel + lobon;
    return result;
}
var totalPrice = totalPrice(20,30,40,50);
console.log(totalPrice);

/* function kitoToMile(input){
    var mile = 0.62137119;
    var kilo = input * mile;
    return kilo;
}
var output = kitoToMile(parseInt(prompt("input mile here")));
console.log(output);
document.write(output); */

/* 
function triangle(height, width, depth){
    var result = height * width * depth;

    return result;

}
var h_input = parseInt(prompt( "input height:"));
var w_input = parseInt(prompt( "input width:"));
var d_input = parseInt(prompt( "input depth:"));

var output = triangle(h_input, w_input, d_input);
document.write(output); */


/* 
function workout (workoutName){
    var chest_plan = ["Chest ", "Chest test"];
    var biseps_plan = ["biseps ", "Biseps test"];
    var triseps_plan =["triseps ", "Triceps test"];

    if(workoutName == "chest"){
        return chest_plan;
    }else if(workoutName == "biceps"){
        return biseps_plan;
    }else if(workoutName == "triceps"){
        return triseps_plan
    }else{
        return "dont know";
    }
}
var workoutPlan =  workout("egg");
console.log(workoutPlan); */


/* function sorry(){
    for(var i = 0; i<10; i++){
        console.log("sorry!");
    }
}
sorry(); */

