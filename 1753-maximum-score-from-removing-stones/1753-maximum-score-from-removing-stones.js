/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function maximumScore(a, b, c) {
    const piles = [a, b, c].sort((a , b) => b - a)
    
    let score = 0
    
    while(piles[0] > 0 && piles[1] > 0) {
        
        piles[0]--
        piles[1]--
        score++
        
        piles.sort((a, b) => b - a)
    }
    
    return score
}
