/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    
    let d = "";

    for (let i of s) {
        
        if (!isNaN(i)) {
            let z = d.charCodeAt(d.length - 1) + parseInt(i);
            d += String.fromCharCode(z);
        } else {
            d += i;

        }
    }
    
    return d
};