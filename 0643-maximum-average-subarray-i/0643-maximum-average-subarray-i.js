/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let left = 0
    let maxAverage = -Infinity
    let sum = 0
    
    for(let right = 0 ; right < nums.length ; right++) {
        
        sum += nums[right]
        
        if(right - left + 1 === k) {
            let currentAverage = sum / k
            maxAverage = Math.max(maxAverage, currentAverage)
            sum -= nums[left]
            left++
        }
    }
    
    return maxAverage
};