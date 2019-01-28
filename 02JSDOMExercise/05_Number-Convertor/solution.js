function solve() {
  let button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', calculate);

  function calculate() {
      let num = document.getElementById('input').value;
      let to = document.getElementById('selectMenuTo').value;
      let result = document.getElementById('result');
        let resultnum;

      if (to == "hexadecimal") {
          hexString = (+num).toString(16);
          if (hexString.length % 2) {
              resultnum = '0' + hexString;
              result.value = resultnum.toUpperCase();
          }
          resultnum = hexString;
          result.value = resultnum.toUpperCase();

      } else {
           resultnum= (+num).toString(2);
          result.value = resultnum.toUpperCase();
      }

  }

}

/*
if (baseToConvertTo) {
    let numberToConvert = Number(decimalInput.value);
    result.value = Math.abs(numberToConvert).toString(baseToConvertTo).toUpperCase();
    if (numberToConvert < 0) result.value = '-' + result.value;
}*/
