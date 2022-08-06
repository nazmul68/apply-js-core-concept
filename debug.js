function getFactorial(number){
    let factorial =1;
    for(let i = 1; i <=number; i++ ){
        factorial = factorial* i;
        console.log(i,factorial);
    }
}
const number =6;
const fact = getFactorial(number);
console.log(getFactorial);