/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        const prev = nums[mid - 1] || -Infinity
        const next = nums[mid + 1] || -Infinity

        if (prev < nums[mid] && nums[mid] > next) {
            return mid    
        }
        
        else if (next > nums[mid]) {
             left = mid + 1
        }
        else {
            right = mid - 1    
        }
    }
};