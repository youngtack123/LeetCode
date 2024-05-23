/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map = new Map()
    let strs = s.split(" ")
    
    if(pattern.length != strs.length) return false
    
    if(new Set(strs).size != new Set(pattern).size) return false
    
    for(let i = 0 ; i < pattern.length ; i++) {
        if(map.has(pattern[i]) && map.get(pattern[i]) != strs[i]) {
            return false    
        }
        map.set(pattern[i], strs[i]);
    }
    return true
};