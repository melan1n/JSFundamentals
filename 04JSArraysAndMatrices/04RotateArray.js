function rotate(arr) {
    let rounds = +(arr.pop());

    if (rounds > arr.length) {
        rounds = arr.length % rounds;
    }

    for (let i = 0; i < rounds; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }

    console.log(arr.join(' '));
}

rotate(['1',
    '2',
    '3',
    '4',
    '2']
)