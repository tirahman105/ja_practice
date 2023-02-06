// function isJavascriptFile(fileName){
//     if(fileName.endsWith('.js')){
//         return true;
//     }else{
//         return false;
//     }

// }
// let result = isJavascriptFile("index.js");
// console.log(result);

function isJavaScriptFile(fileName){
    if(typeof fileName != 'string' || fileName.length == 0){
        return "Provide valid input"
    }
   if(fileName.endsWith('.js')){
    return true;
   }else{
   return false;
   }
}


let result = isJavaScriptFile("");
console.log(result);