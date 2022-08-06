function grade(marks){
    if(marks > 0 && marks <33){
        console.log("You result is failed");
    }
    else if ( marks>=33 && marks<=39){
        console.log('Your result is C');
    }
    else if (marks>= 40 && marks<= 49){
        console.log('Your result is D');
    }
    else if (marks>=50 && marks<=59){
        console.log('Your result is B');
    }
    else if (marks>=60 && marks<=69){
        console.log('Your result is A-');
    }
    else if (marks>=70 && marks<= 79){
        console.log('Your result is A');
    }
    
    else if (marks>=80 && marks<= 89){
        console.log('Your result is A+');
    }
    
    else if (marks>=90 && marks<= 100){
        console.log('Your result is Golden A+');
    }

    else {
        return(console.log("Your result is not Found"));
    }
    
    
}

const inputMarks = 95;
const outputGrade = grade(inputMarks);

