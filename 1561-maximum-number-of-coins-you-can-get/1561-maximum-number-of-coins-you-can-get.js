/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
       
    const sorted = piles.sort((a, b) => b - a)
    
    let me = 0
    
    while(sorted.length > 0) {
        sorted.shift()
        me += sorted[0]
        sorted.shift()
        sorted.pop()
    }
    
    return me
    
};