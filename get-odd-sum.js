function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0 ; i < numbers.length ; i++){
     const index = i;
     const element = numbers[index];
     sum = sum + element;
    }
    return sum;
 }
//  getSumOfAnArray(myNumbers);
 


function getOddSumOfAnArray(numbers){
   let oddNumbers= [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            oddNumbers.push(element); 
            
        }
              
    }   
    return oddNumbers;

      
}

const myNumbers =[12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddSumOfAnArray(myNumbers);
const oddNumbersSum = getSumOfAnArray(oddNumbers);
console.log(oddNumbers);
console.log('odd numbers sum is:', oddNumbersSum);