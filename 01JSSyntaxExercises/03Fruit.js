function moneyNeeded(fruit, weight, price) {
    let money = ((weight / 1000) * price).toFixed(2);
console.log(`I need ${money} leva to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`);
}

moneyNeeded('orange', 2500, 1.80)