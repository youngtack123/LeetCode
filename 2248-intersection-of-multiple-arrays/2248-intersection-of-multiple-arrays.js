/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    
    let map = new Map()
    
    for(let num of nums[0]) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    
    let added = []
    
    for(let i = 1 ; i < nums.length ; i++) {
        for(let num of nums[i]) {
            if(map.has(num)) {
                map.set(num, map.get(num) + 1)
            }
        }
    }
    
    const mapArr = Array.from(map).filter((el) => el[1] == nums.length).map((el) => el[0])
    
    return mapArr.sort((a, b) => a - b)
    
    
};