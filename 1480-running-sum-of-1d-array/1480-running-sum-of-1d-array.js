/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    let answer = []
    let currentSum = nums[0]
    answer.push(currentSum)
    
    for(let i = 1 ; i < nums.length ; i++) {
        currentSum += nums[i]
        answer.push(currentSum)
    }
    
    return answer
};