/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    
    let map = {}
    
    for(let char of s) {
        map[char] = (map[char] || 0) + 1
    }
    
    let answer = true
    const val = Object.values(map)[0]
    
    for(let i = 0 ; i < Object.values(map).length ; i++) {
        if(val !== Object.values(map)[i]) {
            return false
        }
    }
    
    return true
};