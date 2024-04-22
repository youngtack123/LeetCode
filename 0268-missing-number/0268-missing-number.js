/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let arr = []
    
    for(let i = 0 ; i < nums.length + 1 ; i++) {
        arr.push(i)
    }
    
    for(let i = 0 ; i < arr.length ; i++) {
        if(!nums.includes(arr[i])) {
            return arr[i]
        }
    }
    
    
};