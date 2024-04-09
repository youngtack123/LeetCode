/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
        
    for(let i = 0 ; i < nums.length ; i++) {
        
        let leftSum = 0
        let rightSum = 0
        
        for(let k = 0 ; k < i ; k++) {
            leftSum += nums[k]
        }
        
        for(let j = i + 1 ; j < nums.length ; j++) {
            rightSum += nums[j]
        }
        
        if(leftSum === rightSum) {
            return i
        }
    }
    
    return -1
};