function nonDecreasingSubsequence(arr) {
    let result = [arr[0]];
    let currentElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= currentElement) {
            currentElement = arr[i];
            result.push(currentElement);
        }
    }

    console.log(result.join('\n'));
}

