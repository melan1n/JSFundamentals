function moneyNeeded(day, service, hour) {
    let isWeekEnd = false;

    if (day === 'Saturday' || day === 'Sunday') {
        isWeekEnd = true;
    }

    let isAfternoon = false;
    if (hour > 15) {
        isAfternoon = true
    }

    let result;
    if (service === 'Fitness') {
        if (!isAfternoon && !isWeekEnd) {
            result = 5;
        }
        else if (isAfternoon && !isWeekEnd) {
            result = 7.5;
        }
        else {
            result = 8;
        }
    }

    if (service === 'Sauna') {
        if (!isAfternoon && !isWeekEnd) {
            result = 4;
        }
        else if (isAfternoon && !isWeekEnd) {
            result = 6.50;
        }
        else {
            result = 7;
        }
    }


    if (service === 'Instructor') {
        if (!isAfternoon && !isWeekEnd) {
            result = 10;
        }
        else if (isAfternoon && !isWeekEnd) {
            result = 12.50;
        }
        else {
            result = 15;
        }
    }

    result % 1 === 0 ? result.toFixed(0) : result.toFixed(1);

    console.log(result);
}

moneyNeeded('Monday', 'Sauna', 15.30)