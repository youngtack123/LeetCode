/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const x = nums.slice(0, n)
    const y = nums.slice(n, 2 * n + 1)
    
    let answer = []
    
    for(let i = 0 ; i < n ; i++) {
        answer.push(x[i])
        answer.push(y[i])
    }
    
    return answer
};