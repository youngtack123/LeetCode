/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    // two elements appear only once
    // all other elements appear exactly twice
    // O(n)
    
    let map = new Map()
    
    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    
    const arr = Array.from(map)
    
    let answer = []
    
    for(let i = 0 ; i < arr.length ; i++) {
        const [key, value] = arr[i]
        
        if(value == 1) {
            answer.push(key)
        }
    }
    
    return answer
};