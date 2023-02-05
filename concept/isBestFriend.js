// {name: "abul", friend: "babul"}
// {name: "babul", friend: "abul"}

function isBestFriend(objectOne, objectTwo){
    if(objectOne.name == objectTwo.friend && objectTwo.name == objectOne.friend){
        return true;
    }else{
        return false;
    }

}
console.log(isBestFriend({name: "abul", friend: "babul"}
, {name: "babul", friend: "abul"}));
// let result = isBestFriend(abul, babul);
// console.log(result);