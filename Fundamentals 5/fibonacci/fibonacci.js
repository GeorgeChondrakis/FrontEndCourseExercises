const fibonacci = function(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (num > 0) {
        for (let i = 1; i < num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    } else {
        return "OOPS";
    }
}

module.exports = fibonacci
