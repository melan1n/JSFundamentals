function timeToWalk(steps, footprint, speed) {
    let distanceInKm = steps * footprint/1000;
    let timeInHours = distanceInKm/speed + Math.floor(distanceInKm / 0.5)*(1/60);
    let timeInMinutes = timeInHours * 60;
    let timeInSeconds = timeInHours * 60 * 60;

    let hours = Math.floor(timeInHours) >= 10 ? Math.floor(timeInHours) : "0"+Math.floor(timeInHours);
    let minutes = Math.floor(timeInMinutes%60) >=10 ? Math.floor(timeInMinutes%60) : "0"+Math.floor(timeInMinutes%60);
    let seconds = Math.ceil(timeInSeconds%60) >= 10 ? Math.ceil(timeInSeconds%60) : "0"+Math.ceil(timeInSeconds%60);

    console.log(`${hours}:${minutes}:${seconds}`)
}


timeToWalk(100000, 0.70, 5.5)