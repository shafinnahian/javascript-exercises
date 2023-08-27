const removeFromArray = function(arr, ...args) {
    let ansArr = [];
    counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!args.includes(arr[i])) {
            ansArr[counter] = arr[i];
            counter++;
        }
    }
    return ansArr;
};

// Do not edit below this line
module.exports = removeFromArray;

// const removeFromArray = function(arr, ...args) {
//     let ansArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!args.includes(arr[i])) {
//             ansArr.push(arr[i]);
//         }
//     }
//     return ansArr;
// };

// // Do not edit below this line
// module.exports = removeFromArray;

