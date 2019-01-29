function leapYear() {
    let button = Array.from(document.getElementsByTagName('button'))[0];
    button.addEventListener('click', calculate);
    let yearDiv = document.getElementById('year');
    let leapYear = Array.from(document.getElementsByTagName('h2'))[0];

    function calculate() {
        let year = Array.from(document.getElementsByTagName('input'))[0];

        let result = leapOrNot(year.value);
        if (result === true) {
            leapYear.innerHTML = "Leap Year"
        } else {
            leapYear.innerHTML = "Not Leap Year"
        }

        yearDiv.lastElementChild.innerHTML = year.value;
        year.value = '';
    }

    function leapOrNot(year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

    }

}