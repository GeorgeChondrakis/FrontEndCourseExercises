const repeatString = function(string, times) {
    let newString = "";
    if (times<0){
        return "ERROR";
    }
    for (let i = 0; i < times; i++){
        newString += string;
    }
    return newString;
}

module.exports = repeatString
