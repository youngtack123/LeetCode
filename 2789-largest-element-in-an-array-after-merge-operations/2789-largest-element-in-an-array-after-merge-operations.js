/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function(nums) {
    for (let i = nums.length - 1 ; i >= 0 ; i--) {
        const current = nums[i]
        const prev = nums[i - 1]
        
        if (current >= prev) {
            nums[i - 1] = current + prev
        }
    }

    return nums[0];
};