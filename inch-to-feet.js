//Question: The standard height of a volleyball player is 7 feet . Jim wants to join the volleyball team, so he should decided to measure his height to see if he meets the standard .Calculate his height  if feet .

   
// let heightInFeet= 7;
// let heightInInch = (7*12);
// console.log(heightInInch);

function inchToFeet(inches){
    let feet = inches /12;
    return feet;
}

let dadaInches = 144;
let dadaFeet = inchToFeet(dadaInches);
console.log('Dadar Height:' ,dadaFeet , "Feet");

let nanaInches = 168;
let nanaFeet = inchToFeet(nanaInches);
console.log('Nanar Height:' ,nanaFeet , "Feet");

