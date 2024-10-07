/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let currentPrice = prices[0]
    let maxProfit = 0
    
    for(let i = 1 ; i < prices.length ; i++) {
        if(currentPrice > prices[i]) {
            currentPrice = prices[i]
        }
        maxProfit = Math.max(maxProfit, prices[i] - currentPrice)
    }
    
    return maxProfit
};
