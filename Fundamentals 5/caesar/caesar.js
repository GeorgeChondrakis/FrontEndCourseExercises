const caesar = function (str, shift) {
    let encStr = "";

    for (let i = 0; i < str.length; i++) {
        // check if negative
        if (shift < 0) {
            shift = 26 + (shift % 26);
        }

        // Uppercase 
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            const charCode = str.charCodeAt(i);
            encStr += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);

        // Lowercase 
        } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            const charCode = str.charCodeAt(i);
            encStr += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);

        } else {
            encStr += str.charAt(i);
        }
    }

    return encStr;
};

module.exports = caesar
