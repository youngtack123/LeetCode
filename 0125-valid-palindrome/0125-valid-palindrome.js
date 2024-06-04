/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    function removeNonAlphanumeric(str) {
        return str.replace(/[^a-z0-9]/gi, '').toLowerCase()
    }
    
    const removed = removeNonAlphanumeric(s)
    
    if(removed === '') return true
    
    let left = 0
    let right = removed.length - 1
    let flag = true
    
    while(left <= right) {
        if(removed[left] !== removed[right]) {
            flag = false
            break
        } else {
            left++
            right--
        }
    }
    
    return flag
};