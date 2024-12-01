const shopName = prompt("Enter the shop name: ", "Matan's Coffee Shop");
console.log("The shop name is: " + shopName)

let moneyMadeToday = Number(prompt("Money made today: ")) ;
console.log("moneyMadeToday: " + moneyMadeToday)
console.log(typeof moneyMadeToday)

const isOpen = true;
const drinkPrice = 5;
const drinksSoldToday = 15;
const largeDrinksSoldToday = 7;
const dayRent = 80;

console.log(moneyMadeToday)

moneyMadeToday += drinksSoldToday*drinkPrice + largeDrinksSoldToday*0.5*drinkPrice;

console.log(moneyMadeToday)

function dayClassifier( soldDrinks ){
    let message= "very busy";
    if(soldDrinks < 5){
        message = "slow"
    }
    else if(soldDrinks < 10)
    {
        message = "busy"
    } 

    return message;
}

console.log(dayClassifier(drinksSoldToday))
console.log(dayClassifier(3))
console.log(dayClassifier(7))
