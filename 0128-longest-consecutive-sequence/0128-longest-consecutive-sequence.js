/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if(nums.length == 0) return 0
    
    let s = new Set([...nums])
    let res = 1
    
    for(const value of s.values()){

        if(!s.has(value - 1) && s.has(value + 1)){
            let k = 1
            
            while(s.has(value + k)) {
                k++ 
            }
            res = Math.max(res,k)
        }
    }
    return res

};