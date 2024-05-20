/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    
    nums.sort((a, b) => a - b)
    
    let minimized = -Infinity
    
    for(let i = 0 ; i < nums.length ; i++) {
        const pairSum = nums[i] + nums[nums.length - (i + 1)]
        minimized = Math.max(minimized, pairSum)
    }
    
    return minimized
};