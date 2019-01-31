function validate() {
    let button = document.querySelector('#exercise button')
        .addEventListener('click', isValidNumber);

    function isValidNumber() {
        let number = document.querySelector('#exercise input').value;
        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        let digitsStrings = number.split('');

        let digits = convertStringToDigitsArray(digitsStrings);

        let sumProduct = 0;
        for (let i = 0; i < 9; i++) {
        sumProduct += (weights[i] * digits[i]);
        }

        let lastDigit = digits[9];

        let responseSpan = document.getElementById('response');

        if ((sumProduct % 11 == 10 ? 0 : sumProduct % 11) === lastDigit) {
              responseSpan.innerHTML =  'This number is Valid!';
        }  else{
                responseSpan.innerHTML = 'This number is NOT Valid!';
            }
        }

        function convertStringToDigitsArray(digitsStrings) {
            let digits = [];
            for (let j = 0; j < 10; j++) {
                digits.push(Number(digitsStrings[j]));
            }
            return digits;
        }

}