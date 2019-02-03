function addRemove(input) {
    let arr = [];
    let currentNum = 1;

    input.forEach((element, index) => {
        if (input[index] === 'add') {
            arr.push(currentNum);
        } else if (input[index] === 'remove') {
            arr.pop();
        }
        currentNum++;
    })

    if (arr.length === 0) {
        console.log('Empty');
    } else {
        console.log(arr.join('\n'));
    }
}

addRemove(['add','add', 'remove', 'add', 'add'])