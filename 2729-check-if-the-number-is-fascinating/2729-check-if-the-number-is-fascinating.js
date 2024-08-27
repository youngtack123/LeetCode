/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    const two = 2 * n
    const three = 3 * n
    const after = String(n).concat(String(two)).concat(String(three))
    
    const map = new Map()
    
    for(let i = 0 ; i < after.length ; i++) {
        const val = after[i]
        map.set(val, (map.get(val) || 0) + 1)
    }
    
    const arr = Array.from(map)
    console.log(arr)
    let flag = true
    
    for(let [val, freq] of arr) {
        if(freq !== 1 || val == 0) {
            flag = false
            break
        }
    }
    
    return flag
};