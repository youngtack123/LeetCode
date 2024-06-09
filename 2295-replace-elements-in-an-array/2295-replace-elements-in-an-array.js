/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    
    let map = new Map()
    
    for(let i = 0 ; i < nums.length ; i++) {
        map.set(nums[i], i)
    }
    
    for(let operation of operations) {
        const [key, value] = operation
        
        if(map.has(key)) {
            const idx = map.get(key)
            map.set(value, idx)
            map.delete(key)
        }
    }
    
    for(let [key, idx] of map) {
        nums[idx] = key
    }
    
    return nums
};