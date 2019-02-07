function solve() {
 let messageSeparator = document.getElementById('str').value;
 let body = document.getElementById('text').value;
 let resultSpan = document.getElementById('result');

 const regex = new RegExp(`(${messageSeparator})(.*?)(${messageSeparator})`, "g");
 // const regex = new RegExp(`(${messageSeparator})([\\w\\s]+)(${messageSeparator})`);
  const regexCoordinates = /(north|east)[\s\S]*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gi;

  let textMatch = regex.exec(body);

  let norths = [];
  let easts = [];

 let match;
    while(match = regexCoordinates.exec(body)) {
        if (match[1].toLowerCase() == 'north') {
            norths.push(match);
        } else {
            easts.push(match);
        }
    }

  let nortCoordinates = norths.pop();
  let eastCoordinates = easts.pop();

  let message = `Message: ${textMatch[2]}`;


  let northElement = document.createElement('p');
  northElement.textContent = `${nortCoordinates[2]}.${nortCoordinates[3]} N`
    let eastElement = document.createElement('p');
  eastElement.textContent = `${eastCoordinates[2]}.${eastCoordinates[3]} E`
    let textElement = document.createElement('p');
  textElement.textContent = message;

  resultSpan.appendChild(northElement);
  resultSpan.appendChild(eastElement);
  resultSpan.appendChild(textElement);

}

