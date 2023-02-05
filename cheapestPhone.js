const phones = [
    {name: 'samsung', camera: 12, price: 24000, color: 'black' }, 
    {name: 'nokia', camera: 2, price: 29000, color: 'black' } ,
    {name: 'Iphone', camera: 50, price: 124000, color: 'black' } ,
    {name: 'MI', camera: 22, price: 44000, color: 'black' } ,
    {name: 'oppo', camera: 20, price: 30000, color: 'black' } ,
    
];

function chespestPhone(phones){
    let cheapest = phones[0];
    for ( let i= 0 ; i < phones.length; i++){
        const phone = phones[i];
        if( phones.price < cheapest.price){
            cheapest= phone
            
        }
    }
    return cheapest;
}
const myChoice = chespestPhone(phones);
console.log(myChoice);