/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    let map = new Map()
    
    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    
    for(let [key, value] of [...map.entries()]) {
        if(value > 1) {
            return key
        }
    }
    
};