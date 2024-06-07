/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let obj = {}
    
    for(let num of nums) {
        obj[num] = 1
    }
    
    let arr = []
    for(let i = 1 ; i <= nums.length ; i++) {
        if(!obj[i]) {
            arr.push(i)    
        }
    }
    return arr
};