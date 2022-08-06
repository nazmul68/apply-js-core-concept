//-------- Write a function findLeapYear() that will take the array [2023,2024,2025,2028,2030] as the input parameter and will check if each year is a leap year .If a year is leap year insert that year in a new array , return the new array & print the result --------//

function findLeapYear(years){
    let leapYearArray= [];
  for(let i= 0; i < years.length ; i++){
    const index = i;
    const element = years[index];
    if(element % 4 == 0 && (element % 100 !=0 || element % 400 == 0)){
        leapYearArray.push(element);

    }
  }
  return leapYearArray;
}

const allYear =[2023,2024,2025,2028,2030];
const leapYearArray= findLeapYear(allYear);
console.log(leapYearArray);