/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    
    let map = new Map()
    
    for(let i = 0 ; i < nums.length ; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    
    const tmp = Array.from(map).sort((a, b) => b[1] - a[1]).map(el => el[1])
    
    const max = tmp[0]
    
    const tmp2 = tmp.filter(el => el === max)
    
    let answer = 0
    
    tmp2.forEach(el => answer += el)
    
    return answer
    
};