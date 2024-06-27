/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const result = []
    
    for(let i = 0 ; i < nums[0].length ; i++) {
        const target = nums[0][i]
        
        if(nums.every((arr) => arr.includes(target))) {
            result.push(target)
        }
    }
    
    return result.sort((a, b) => a - b)
}