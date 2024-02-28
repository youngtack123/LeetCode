/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    
    const n = nums.length / 2

    const sorted = nums.sort((a, b) => a - b)
    
    let count = 0
    
    for(let i = 0 ; i < sorted.length ; i += 2) {
        if(sorted[i] !== sorted[i+1]) {
            return false
        } else {
            count++
        }
    }
    
    return n === count ? true : false
};