/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let sumSubArray = nums[0];
    
    for(let i = 1 ; i < nums.length ; i++){
        
        sumSubArray = Math.max(sumSubArray + nums[i], nums[i]);
        maxSum = Math.max(sumSubArray, maxSum);
    }
    return maxSum;
};