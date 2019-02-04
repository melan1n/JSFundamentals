function solve() {
    let str = document.getElementById('str').value;
    let resultSpan = document.getElementById('result');

    let stringWeight = sumOfAllOnes(str);
    let trimmedString = str.substring(stringWeight, str.length - stringWeight)

    let asciiEncodedArray = getAsciiEncodedArray(trimmedString);

    let result = asciiArrayToString(asciiEncodedArray);

    resultSpan.textContent = result;

    function sumOfAllOnes(str) {
        let arr = str.split('');
        let sumOfOnes = getSumOfDigits(arr);

        let sumAsStringArray = sumOfOnes.toString().split('');
        let sumOfDigits;
        while (sumAsStringArray.length > 1) {
            sumOfDigits = getSumOfDigits(sumAsStringArray);
            sumAsStringArray = sumOfDigits.toString().split('');
        }

        return sumOfDigits;
    }

    function getSumOfDigits(arr){
        let sum = 0;
        for (let char of arr) {
            sum += Number(char);
        }

        return sum;
    }

    function getAsciiEncodedArray(str) {
        let result = [];

        for (let i = 0; i < str.length/8; i++) {
            let byte;
            byte = str.substr(i*8, 8);
            let asciiChar = parseInt(byte, 2);
            result.push(asciiChar);
        }

        return result;
    }

    function asciiArrayToString(asciiEncodedArray) {
        let result = '';

        for (let char of asciiEncodedArray) {
            let pattern = (/[a-zA-Z ]/);
            let character = String.fromCharCode(char)
            if (pattern.test(character)) {
                result += character;
            }
        }

        return result;
    }
}