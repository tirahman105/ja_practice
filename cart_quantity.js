const shoppingCart = [
    { name :'shoe', price: 1200 , quantity: 2},
    { name :'shirt', price: 600 , quantity: 5},
    { name :'pant', price: 800 , quantity: 4},
    { name :'belt', price: 300 , quantity: 1},
    
];


function cart_quantity(products){
    let sum = 0;
    for( let i = 0; i< shoppingCart.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity; 
        sum = sum + productTotal;

        
    }
    return sum;
    
}
const total_product= cart_quantity(shoppingCart);
console.log(total_product);

// function totalCost(products){
//    let sum = 0;
//    for(let i =0 ; i < shoppingCart.length ; i++){
//        const product = products[i];
//        sum = sum + product.price;
//    }
//   return sum; 
// }

// const expense = totalCost(shoppingCart);
// console.log(expense);