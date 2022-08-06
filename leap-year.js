// function isLeapYear(year){
//     const leapYear = (year % 4 === 0);
//     if (leapYear){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const thisYear = isLeapYear(2012);
// console.log(thisYear);

// ----------------another way -------------------//

function isLeapYear(year){
    const remainder = (year % 4 && year % 100 && year % 400);
    if(remainder === 0){
        return true;
    }
        return false; // shudu false ke return kore dile e hobe ekhane//
}
const thisYear = isLeapYear(1900);
console.log(thisYear);