function validate() {
    let button = document.getElementsByTagName('button')[0]
        .addEventListener('click', generateEgn);

    function generateEgn() {
        let egnString = '';

        let yearInput = document.getElementById('year');
        let year = yearInput.value.substr(2, 2);
        egnString += year;

        let monthInput = document.getElementById('month');
        let month = getMonthFromString(monthInput
            .value);
        if (month < 10) {
            month = ("0" + month).toString();
        }
        egnString += month;

        let dateInput = document.getElementById('date');
        let date = dateInput.value;
        if (date < 10) {
            date = ("0" + date).toString();
        }
        egnString += date;

        let regionInput = document.getElementById('region');
        let region = regionInput.value.substr(0,2);
        egnString += region;

        let maleInput = document.querySelector('#male');
        let isMale = maleInput.checked;
        let femaleInput = document.querySelector('#female');
        let isFemale = femaleInput.checked;
        let gender = isMale ? "2" : "1";
        egnString += gender;

        let lastDigit = calculateLastDigit(egnString);
        egnString += lastDigit;

        let resultP = document.getElementById('egn');
        resultP.innerText = `Your EGN is: ${egnString}`

        clearInput(yearInput, monthInput, dateInput, maleInput, femaleInput, regionInput);

    }

    function clearInput(yearInput, monthInput, dateInput, maleInput, femaleInput, regionInput){
        yearInput.value = '';
        monthInput.value = '';
        dateInput.value = '';
        maleInput.checked = false;
        femaleInput.checked = false;
        regionInput.value = '';
    }

    function getMonthFromString(mon){
        return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1
    }

    function convertStringToDigitsArray(digitsStrings) {
        let digits = [];
        for (let j = 0; j < 10; j++) {
            digits.push(Number(digitsStrings[j]));
        }
        return digits;
    }

    function calculateLastDigit(egnString){
        let lastDigit;

        let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        let egnDigits = convertStringToDigitsArray(egnString.substr(0, 9));

        let sumProduct = 0;
        for (let i = 0; i < 9; i++) {
            sumProduct += (weightPosition[i] * egnDigits[i]);
        }

        lastDigit = sumProduct % 11 == 10 ? 0 : sumProduct % 11;

        return lastDigit;
    }
}