/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    if(s.length === 0) return 0
    if(s.length === 1) return 1
    
    let left = 0
    let right = 0
    let maxLength = -Infinity
    const set = new Set()
    
    while(right < s.length) {
        
        if(!set.has(s[right])) {
            set.add(s[right])
            maxLength = Math.max(maxLength, right - left + 1)
            right++
        } else {
            set.delete(s[left])
            left++
        }
    }
    
    return maxLength
};