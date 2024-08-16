/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    
    let set = new Set()
    nums.sort((a, b) => a - b)
    
    while(nums.length > 0) {
        const min = nums[0]
        const max = nums[nums.length - 1]
        const average = (min + max) / 2
        
        if(!set.has(average)) {
            set.add(average)
        }
        
        nums.pop()
        nums.shift()
    }
    
    return set.size
};