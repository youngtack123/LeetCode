/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
    let left = 0
    let right = 0
    let count = s1.length
    let needed = {}
    
    for (let char of s1) {
        char in needed ? needed[char]++ : needed[char] = 1
    }
    
    while(right < s2.length) {
        
        if(needed[s2[right]] > 0) {
            count--
        }
        needed[s2[right]]--
        right++
        
        if(count === 0) {
            return true
        }
        
        if(right - left === s1.length) {
            if(needed[s2[left]] >= 0) {
                count++
            }
            needed[s2[left]]++
            left++
        }
    }
    return false
};