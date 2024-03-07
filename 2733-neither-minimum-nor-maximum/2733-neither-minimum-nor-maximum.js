/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    
    if(nums.length < 3) {
        return -1
    } else {
        const sorted = nums.sort((a, b) => a - b)
        return sorted[1]
    }
    
};