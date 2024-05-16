/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=> b-a)
    
    
    let value1 = nums[0] * nums[1] * nums[2]
    let value2 = nums[0] * nums[nums.length - 1] * nums[nums.length - 2]
    
    return value1 > value2 ? value1 : value2;
};