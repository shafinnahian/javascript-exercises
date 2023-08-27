const repeatString = function(word, counter) {
    if (counter < 0) return "ERROR";
    let i = 0;
    let ansString = "";

    while (i < counter){
        ansString += word;
        i++;
    }

    return ansString;
};

// Do not edit below this line
module.exports = repeatString;
