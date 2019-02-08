function solve() {
 let input = document.getElementById('str').value;
 let tokens = input.split(',');

 let text = tokens[0];

 let passengerNamePattern = /[\s][A-Z][a-zA-Z]*-[A-Z][a-zA-Z]*\.-[A-Z][a-zA-Z]*\s|[\s][A-Z][a-zA-Z]*-[A-Z][a-zA-Z]*\s/;
 let passengerNameRaw = text.match(passengerNamePattern)[0].trim();
 let passengerName = passengerNameRaw.replace('-', ' ');

 let airportsNamesPattern = /\s[A-Z]{3}\/[A-Z]{3}\s/;
 let airportsNames = text.match(airportsNamesPattern)[0].trim();
 let airports = airportsNames.split('/');
 let fromAirport = airports[0];
 let toAirport = airports[1];

 let flightNumberPattern = /\s[A-Z]{1,3}[0-9]{1,5}\s/;
 let flightNumber = text.match(flightNumberPattern)[0].trim();

 let companyNamePattern = /-\s[A-Z][A-Za-z]*\*[A-Z][A-Za-z]*\s/;
 let companyNameRaw = text.match(companyNamePattern)[0].trim();
 let companyNameRawNew = companyNameRaw.replace(/-\s/, ' ').trim();
 let companyName = companyNameRawNew.replace('*', ' ');

 let result = '';
 let typeOfOutput = tokens[1].trim();
 switch (typeOfOutput) {
    case 'name': result =  `Mr/Ms, ${passengerName}, have a nice flight!`; break;
    case 'flight' : result =  `Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`; break;
    case 'company' : result =  `Have a nice flight with ${companyName}.`; break;
    case 'all': result =  `Mr/Ms, ${passengerName}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${companyName}.`; break;
 }

 let resultSpan = document.getElementById('result');
 resultSpan.textContent = result;
}