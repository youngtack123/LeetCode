/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    
            let minus = 0;
        let plus = 0;
    
    nums.forEach((num) => {

        if(num < 0) {
            minus++
        } 
        else if(num > 0) {
            plus++
        }
    })
    
    return Math.max(minus, plus)
};