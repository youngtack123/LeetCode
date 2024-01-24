/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let answer = []
    
    const sortedNums = nums.sort((a , b) => a - b)
    
    sortedNums.forEach((sortedNum, idx) => {
        if(sortedNum === target) {
            answer.push(idx)
        }
    })
    return answer
};