/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    
    const num = nums.length / 2
    nums.sort((a, b) => a - b)
    let minVal = Infinity
    
    for(let i = 0 ; i < num ; i++) {
        const min = nums[0]
        const max = nums[nums.length - 1]
        const average = (min + max) / 2
        
        nums.pop()
        nums.shift()
        
        minVal = Math.min(minVal, average)
    }
    
    return minVal
};