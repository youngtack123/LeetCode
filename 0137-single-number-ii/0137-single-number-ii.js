/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // every element appears three times except for one
    
    let map = new Map()
    
    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    
    const arr = Array.from(map)
    
    for(let i = 0 ; i < arr.length ; i++) {
        const [key, value] = arr[i]
        
        if(value == 1) {
            return key
        }
    }
};