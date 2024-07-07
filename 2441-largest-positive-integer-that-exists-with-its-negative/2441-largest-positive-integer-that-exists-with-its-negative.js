/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    
    let tmp = nums.sort((a, b) => b - a).filter(el => el > 0)
    
    for(let i = 0 ; i < tmp.length ; i++) {
        if(nums.includes(-tmp[i])) {
            return tmp[i]
        }
    }
    
    return -1
    
};