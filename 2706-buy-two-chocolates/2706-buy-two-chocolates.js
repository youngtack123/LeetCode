/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    
    const sorted = prices.sort((a, b) => a - b)
    
    const chocolates = sorted[0] + sorted[1]
    
    if(money - chocolates > -1) {
        return money - chocolates
    } else {
        return money
    }
};