function printArrayElement(arr) {
    let step = +(arr.pop());

    for (let i = 0; i < arr.length; i++) {
        if (i % step === 0) {
            console.log(arr[i]);
        }
    }
}

printArrayElement(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
)