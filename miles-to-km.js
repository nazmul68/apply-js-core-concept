// John is a web developer , and he cycles to work . He knows the distance between his house and office in miles . John wants to measure the distance in kilometers. Calculate the distance in Km.

function milesToKm(miles){
    let km = miles*1.60934;
    return km;
    
}
let miles = 2;
let km= milesToKm(miles);
console.log(km);