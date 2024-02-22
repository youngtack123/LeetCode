/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
        
    let answer = 0
    
    while(k > 0) {
        let sorted = nums.sort((a, b) => b - a)
        let max = nums[0]
        answer += max
        
        sorted.shift()
        sorted.unshift(max + 1)
        k--
    }
    
    return answer
};