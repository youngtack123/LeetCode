/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    const set = new Set([...nums])
    
    for(let i = 1 ; i <= Infinity ; i++) {
        if(!set.has(i)) {
            return i
        }
    }
};