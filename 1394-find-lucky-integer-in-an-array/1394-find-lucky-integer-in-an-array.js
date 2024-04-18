/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    
    let map = new Map()
    
    arr.forEach(el => map.set(el, (map.get(el) || 0) + 1))
    
    let answers = []
    
    for(let [key, value] of map) {
        if(key === value) {
            answers.push(key)
        }
    }
    
    return answers.length ? Math.max(...answers) : -1
};