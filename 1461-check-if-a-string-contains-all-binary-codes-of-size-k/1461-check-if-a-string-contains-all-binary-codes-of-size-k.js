/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    
    const binaryCount = Math.pow(2, k)
    const set = new Set()
    
    let left = 0
    let right = 0
    let currentChar = ''
    
    while(right < s.length) {
        currentChar += s[right]
        
        if(right - left + 1 === k) {
            set.add(currentChar)
            currentChar = currentChar.slice(1)
            left++
        }
        right++
    }
    
    return binaryCount === set.size ? true : false
};