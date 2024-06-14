/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    let minLength = Infinity
    let left = 0
    let right = 0
    
    let sum = 0
    
    while(right < nums.length) {
        
        sum += nums[right]
        
        if(sum >= target) {
            while(sum >= target) {
                minLength = Math.min(minLength, right - left + 1)
                sum -= nums[left]   
                left++
            }
        }
        
        right++
    }
    
    // console.log(minLength)
    
    return minLength == Infinity ? 0 : minLength
};