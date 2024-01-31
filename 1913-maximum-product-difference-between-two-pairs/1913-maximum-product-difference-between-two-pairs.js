/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    const sorted = nums.sort((a , b) => a - b)
    
    return (sorted[sorted.length - 2] * sorted[sorted.length - 1]) - (sorted[0] * sorted[1])
};