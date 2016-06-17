function calctotalDistance(time, speedOffirst, speedOfsecond) {

    var firstdist;
    firstdist = speedOffirst * time;
    var seconddist = speedOfsecond * time;
    var totalDistance = firstdist + seconddist;
    return totalDistance;
}

calctotalDistance(3, 12, 5);


