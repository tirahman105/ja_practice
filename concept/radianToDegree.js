function radianToDegree(radian){
    const PI = 3.14159265359;
    
    degree = (radian * (180/PI)).toFixed(2);
    return degree;
}

let output = radianToDegree(199);
console.log(output);