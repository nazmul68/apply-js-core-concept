function kgToGram(kg){
    let gram = kg*1000;
    return gram;
}

let kg = 2.5;
let gram = kgToGram(kg);
console.log('This weight is:', gram)