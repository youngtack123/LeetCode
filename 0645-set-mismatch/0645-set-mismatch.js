/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    
    let target = []
    
    const duplicate = nums.filter((num, idx) => nums.indexOf(num) !== idx)
    
    for(let i = 1 ; i <= nums.length ; i++) {
        target.push(i)
    }
    
    let missing
    
    for(let i = 0 ; i < target.length ; i++) {
        if(!nums.includes(target[i])) {
            missing = target[i]
            break;
        }
    }
    
    
    
    return [duplicate, missing]
};