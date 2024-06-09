/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    
    let i = 1
    let sum = 0
    let count = 0
    let set = new Set([...banned])
    
    for(let i = 1 ; i <= n ; i++) {
        if(!set.has(i) && sum + i <= maxSum) {
            sum += i
            count++
        }
    }
    
    return count
};