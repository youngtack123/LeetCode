/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    
    let map = new Map()
    
    for(let i = 0 ; i < nums.length ; i++) {
        if(nums[i] % 2 === 0) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }
    }
    
    if(map.size === 0) {
        return -1
    }
    
    const sorted = [...map.entries()].sort((a , b) => b[1] - a[1])
    
    const maxFreq = Math.max(...sorted.map(el => el[1]))
    
    const targets = []
    
    for(let i = 0 ; i < sorted.length ; i++) {
        if(sorted[i][1] === maxFreq) {
            targets.push(sorted[i][0])
        }
    }
    
    return Math.min(...targets)
};