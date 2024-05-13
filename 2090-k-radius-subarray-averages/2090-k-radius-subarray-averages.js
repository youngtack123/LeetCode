/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    
    if(nums.length < k * 2) {
        return Array(nums.length).fill(-1)
    }
    
    let left = 0
    let right = 0
    let sum = 0
    let diameter = k * 2
    let answer = []
    
    while(right < nums.length) {
        
        sum += nums[right]
        
        if(right < k) {
            answer.push(-1)
        }
        
        if(right - left === diameter) {
            const average = Math.floor(sum / (right - left + 1))
            answer.push(average)
            sum -= nums[left]
            left++
        }
        right++
    }
    
    for(let i = right - k ; i < nums.length ; i++) {
        answer.push(-1)
    }
    
    return answer
};