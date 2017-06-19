var addition = function (a, b) {
    return a + b;
};

var subtraction = function (a, b) {
    return a - b;
};

var multiplication = function (a, b) {
    return a * b;
};

var division = function (a, b) {
    if (b === 0) {
        throw new Error('You cannot divide by 0!');
    }
    return a / b;
};

module.exports = {
    addition: addition,
    subtraction: subtraction,
    multiplication: multiplication,
    division: division
};
