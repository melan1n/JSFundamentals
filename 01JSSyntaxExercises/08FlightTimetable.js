function flightInfo(array) {
    let flightType = array[0];
    let destination = array[1];
    let time = array[2];
    let flightNumber = array[3];
    let gate = array[4];

    console.log(`${flightType}: Destination - ${destination}, Flight - ${flightNumber}, Time - ${time}, Gate - ${gate}`)

}

flightInfo(['Departures', 'London', '22:45', 'BR117', '42'])