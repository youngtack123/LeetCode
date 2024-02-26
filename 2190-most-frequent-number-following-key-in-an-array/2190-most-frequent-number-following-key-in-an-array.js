/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    
    let targetArr = []
    
    for(let i = 0 ; i < nums.length - 1 ; i++) {
        if(nums[i] === key) {
            targetArr.push(nums[i+1])
        }
    }
    
    let map = new Map()
    
    targetArr.forEach(target => {
        if(map.get(target)) {
            map.set(target, map.get(target) + 1)
        } else {
            map.set(target, 1)
        }
    })
    
    let maxKey = '';
let maxValue = -Infinity;

for (let [key, value] of map) {
    if (value > maxValue) {
        maxValue = value;
        maxKey = key;
    }
}
    
    return maxKey

};