function cTofahr(celsius){
    const cTemt = celsius;
    const fTemt = (cTemt * 1.8)+32;
    return fTemt; 
}

const inputCelsius = 50;
const outputFahrenheit = cTofahr(inputCelsius);
console.log(inputCelsius, "Degree celsius is converted to fahrenheit:" ,outputFahrenheit);