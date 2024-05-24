/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    
    if(nums.length < 2) return 0
    
    let maxDiff = -Infinity
    
    nums.sort((a, b) => a - b)
    
    for(let i = 0 ; i < nums.length - 1 ; i++) {
        maxDiff = Math.max(maxDiff, nums[i + 1] - nums[i])
    }
    
    return maxDiff
    
};