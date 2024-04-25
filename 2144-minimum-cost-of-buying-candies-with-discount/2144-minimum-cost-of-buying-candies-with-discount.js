/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    // greedy algorithm
    const sorted = cost.sort((a, b) => b - a)
    
    let answer = 0
    let pickCount = 0
    for(let i = 0 ; i < sorted.length ; i++) {
        
        if(pickCount !== 2) {
            answer += sorted[i]
            pickCount++
        } else {
            pickCount = 0
        }

    }
    
    return answer
};