/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    
    const sortedCosts = costs.sort((a, b) => a - b)
    let answer = 0
    
    for(let cost of sortedCosts) {
        coins = coins - cost
        
        if(0 <= coins) {
            answer++
        }
    }
    
    return answer
};