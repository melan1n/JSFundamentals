function sameNumbers(num) {
    let result = true;
    let sum = 0;

    let string = num.toString();
    let stringLen = string.length;
    let lastDigit = Number(string[stringLen - 1]);

    for (let i = stringLen; i > 0; i--) {
        sum += Number(string[i - 1]);
        if (Number(string[i - 1]) != lastDigit) {
            result = false;
        }
    }

    console.log(result);
    console.log(sum);
}

sameNumbers(1234)