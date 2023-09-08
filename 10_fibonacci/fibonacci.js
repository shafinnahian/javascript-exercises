const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    if (num === 0) return 0;

    let curr = 1;
    let prev = 0;

    for (let i = 1; i < num; i++){
        let temp = curr + prev;
        prev = curr;
        curr = temp;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
