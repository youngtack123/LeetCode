/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    
    let map = new Map()
    
    for(let i = 0 ; i < s.length ; i++) {
        if(map.has(s[i])) {
            return s[i]
        } else {
            map.set(s[i], 1)
        }
    }
};