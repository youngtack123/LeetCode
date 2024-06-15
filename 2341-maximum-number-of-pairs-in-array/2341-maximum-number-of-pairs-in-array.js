/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    
    let map = new Map()
    
    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    
    const mapArr = Array.from(map)
    
    let pairs = 0
    let leftOver = 0
    
    for(let i = 0 ; i < mapArr.length ; i++) {
        const [item, count] = mapArr[i]
        
        if(count % 2 == 1) {
            leftOver++
        }
        pairs += Math.floor(count / 2)
    }
    
    return [pairs, leftOver]
};