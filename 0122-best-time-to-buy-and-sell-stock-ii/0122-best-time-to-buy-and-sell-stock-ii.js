/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let boughtPrice = prices[0]
    let profit = 0
    
    for(let i = 1 ; i < prices.length ; i++) {
        const currentPrice = prices[i]
        
        if(boughtPrice < currentPrice) {
            const diff = currentPrice - boughtPrice
            profit += diff
        }
        boughtPrice = currentPrice
    }
    
    return profit
};