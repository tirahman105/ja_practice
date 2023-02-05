/* if ticket number is 100 ---- > price 100 ticket
if ticket in more than 100 but less than 200 ---> price 90tk
if ticket is more than 200 ----> price is 70tk */

function ticketPrice(ticketQuantity){
    const first100 = 100 ;
    const second100 = 90;
    const restTicket = 70;

    if (ticketQuantity <= 100 ){
        const price = ticketQuantity * first100;
        return price;
    }
    else if (ticketQuantity <= 200){
        const first100Price = 100 * first100;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }else {
        const first100Price = 100 * first100;
        const second100Price = 100 * second100;
        const restTicketQuantity = ticketQuantity -200;
        const restTicketPrice = restTicketQuantity * restTicket;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}
const Price= ticketPrice(202);
console.log(Price); 