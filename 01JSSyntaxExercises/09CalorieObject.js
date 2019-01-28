function writeCalories(array) {

    let calorieObj = {};

    for (let i = 0; i < array.length; i++) {
        if (i%2 == 0) {
            let food = array[i];
            calorieObj[food] = Number(array[i+1]);
        }
    }

    console.log(calorieObj);
}

writeCalories(['Yoghurt', 48, 'Rise', 138, 'Apple', 52])