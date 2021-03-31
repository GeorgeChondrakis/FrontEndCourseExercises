const removeFromArray = function (array, ...values) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if (array[i] === values[j]) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

module.exports = removeFromArray
