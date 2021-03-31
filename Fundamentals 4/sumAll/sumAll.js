const sumAll = function(a, b) {
    let sum = 0;

    if(a < 0 || b < 0) {
        return "ERROR";
    }
    
    if( typeof a !== "number" || typeof b !== "number" ) {
        return "ERROR";
    }
    
    if (a < b) {
        for(i=a; i<=b; i++)
        sum +=i;
    
    } else {
        for(i=b; i<=a; i++)
        sum +=i;
    }
        
       return sum;
    }


module.exports = sumAll
