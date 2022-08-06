function fahrToC(fahrenheit){
    const fahrTemt = fahrenheit;
    const cTemt = (fahrTemt-32)/1.8;
    return cTemt;
}

const inputFahr = 102;
const outputC = fahrToC(inputFahr);
console.log(outputC.toFixed(2));
