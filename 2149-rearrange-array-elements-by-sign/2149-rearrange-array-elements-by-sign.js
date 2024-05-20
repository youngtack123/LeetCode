/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    
    let rearranged = []
    let positive = []
    let negative = []
    
    for(let num of nums) {
        if(num < 0) {
            negative.push(num)
        } else {
            positive.push(num)
        }
    }
    
    for(let i = 0 ; i < positive.length ; i++) {
        rearranged.push(positive[i])
        rearranged.push(negative[i])
    }
    
    return rearranged
};