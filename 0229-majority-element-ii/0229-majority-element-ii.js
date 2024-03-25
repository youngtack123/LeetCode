/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    
    const freq = Math.floor(nums.length / 3)
    
    let map = new Map()
    
    for(let i = 0 ; i < nums.length ; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    
    const arr = Array.from(map).filter(([num, count]) => count > freq).map(([num]) => num)
    
    return arr
};