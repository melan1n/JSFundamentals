function coffeeMachine(array) {
    let totalMoney = 0;
    let coins;

    for (let i = 0; i < array.length; i++) {
    let str = array[i];

    let tokens = str.split(", ");
    coins = Number(tokens[0]);
    let typeOfDrink = tokens[1];
    let typeOfCoffee;
    let milk;
    let sugar;

    if (typeOfDrink == 'coffee' && tokens.length == 4) {
        typeOfCoffee = tokens[2];
        sugar = Number(tokens[3]);
    }
    else if (typeOfDrink == 'coffee' && tokens.length == 5) {
        typeOfCoffee = tokens[2];
        milk = tokens[3];
        sugar = Number(tokens[4]);
    }
    else if (typeOfDrink == 'tea' && tokens.length == 3) {
        sugar = Number(tokens[2]);
    }
    else if (typeOfDrink == 'tea' && tokens.length == 4) {
        milk = tokens[2];
        sugar = Number(tokens[3]);
    }

    let drinkPrice = 0;
    if (typeOfDrink == 'coffee')  {
        if (typeOfCoffee == 'caffeine') {
            drinkPrice = 0.80;
        }
        else {
            drinkPrice = 0.90;
        }
    }
    else{
        drinkPrice = 0.80;
    }

    if (milk != null) {
        let milkPrice = Number(Math.round(drinkPrice*0.10+'e'+1)+'e-'+1);
        drinkPrice = drinkPrice + milkPrice;
    }
    if (sugar > 0) {
        drinkPrice += 0.10;
    }

        let change = Number(Math.round((coins - drinkPrice)+'e'+2)+'e-'+2);
        if (coins >= drinkPrice) {
            console.log(`You ordered ${typeOfDrink}. Price: ${drinkPrice.toFixed(2)}$ Change: ${change.toFixed(2)}$`)
            totalMoney += drinkPrice;
        }
        else {
            console.log(`Not enough money for ${typeOfDrink}. Need ${Math.abs(change).toFixed(2)}$ more.`)
        }
}
    console.log(`Income Report: ${totalMoney.toFixed(2)}$`)
}

/*function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}*/

coffeeMachine(['8.00, coffee, decaf, 4',
    '1.00, tea, 2'])