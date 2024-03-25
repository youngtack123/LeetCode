/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let map = new Map()
    
    for(let i = 0 ; i < nums.length ; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    
    const sorted = [...map.entries()].sort((a, b) => b[1] - a[1])
    
    return sorted[0][0]
};