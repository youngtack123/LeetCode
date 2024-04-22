/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let map = new Map()
    
    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    
    const target = [...map.entries()].filter(el => el[1] === 1)
    
    return target[0][0]
};