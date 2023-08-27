const sumAll = function(firstDigit, lastDigit) {
    if ( firstDigit < 0 ) return 'ERROR';
    else if (typeof firstDigit != "number" || typeof lastDigit !== "number") return 'ERROR';
    
    let sum = 0;
    
    if (firstDigit < lastDigit){
        for (let i = firstDigit; i <= lastDigit; i++) {
            sum += i;
        }  
    }
    else if (firstDigit > lastDigit){
        for (let i = firstDigit; i >= lastDigit; i--) {
            sum += i;
        } 
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
