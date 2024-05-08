/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    
    let flip = k
    let max = 0
    
    for(let i = 0 ; i < nums.length ; i++) {
        let count = 0
        flip = k
        
        for(let j = i ; j < nums.length ; j++) {
            
            if(nums[j] === 0) {
                if(flip > 0) {
                    flip--    
                } else {
                    break
                }
            }
            count++
        }
        if(max < count) {
            max = count
        }
    }
    
    return max
};