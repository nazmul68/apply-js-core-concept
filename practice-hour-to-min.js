//------------- Write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes and will convert it into minutes and will return the result in minutes -----------------//

function hourToMin(hour){
    const min = hour * 60;
    return min;
}
const hour = 5;
const min =hourToMin(hour);
console.log(hour, 'converted to min:', min);