/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map = new Map()
    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    
    let answer = Array.from(map).filter(el => el[1] == 1).map(el => el[0]).reduce((acc, curr) => acc + curr, 0)
    
    return answer
};