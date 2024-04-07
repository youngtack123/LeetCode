/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var res = BigInt(num1) * BigInt(num2)
    return res.toString()
};