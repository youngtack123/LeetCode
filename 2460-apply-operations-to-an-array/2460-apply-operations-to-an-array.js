/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    
    let low = 0
    let high = low + 1
    
    while(high <= nums.length - 1) {
        if(nums[low] === nums[high]) {
            nums[low] *= 2
            nums[high] = 0
        }
        low++
        high++
    }
    
    low = 0
    high = low + 1
    
    while(high <= nums.length - 1) {
        if(nums[low] === 0) {
            if(nums[high] !== 0) {
                [nums[low], nums[high]] = [nums[high], nums[low]]
                low++
            }
            high++
        } else {
            low++
            high++
        }
    }
    
    return nums
};