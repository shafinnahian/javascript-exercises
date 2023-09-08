// const palindromes = function (word) {
//     const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, '');   // did not consider numbers to be replaced as well
    
//     let first = 0;
//     let last = cleanedWord.length - 1;

//     for( ; first <= last; first++, last--){
//         if (cleanedWord[first] !== cleanedWord[last]) return false;
//     }
//     return true;
// };

const palindromes = function (word) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    let first = 0;
    let last = cleanedWord.length - 1;

    for (; first <= last; first++, last--) {
        if (cleanedWord[first] !== cleanedWord[last]) {
            return false;
        }
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
