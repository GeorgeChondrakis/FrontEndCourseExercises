const palindromes = function(str) {
    const remove = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(remove, '');
    const reverseStr = lowRegStr.split('').reverse().join('');

    return reverseStr === lowRegStr;
}

module.exports = palindromes
