/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    
    let left = 0
    let count = 0
    
    for(let i = left ; i < nums.length ; i++) {
        
        let right = i + 1
        
        while(right < nums.length) {
            if(nums[i] === nums[right] && (i * right) % k == 0) {
                count++
            }
            right++
        }
    }
    
    return count
};