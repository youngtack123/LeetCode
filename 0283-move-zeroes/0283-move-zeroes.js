/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let low = 0
    let high = low + 1
    
    while(high <= nums.length - 1) {
        // nums[low]가 0 인경우
        if(nums[low] === 0) {
            // nums[high]가 0인 경우
            if(nums[high] === 0) {
                high++
            }
            // 0이 아닌경우
            else {
                [nums[low], nums[high]] = [nums[high], nums[low]]
                low++
                high++
            }
        }
        // 0이 아닌경우
        else {
            low++
            high++
        }
    }
};