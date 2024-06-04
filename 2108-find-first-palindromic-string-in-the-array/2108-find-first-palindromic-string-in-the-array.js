/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    for(let word of words) {
        let left = 0
        let right = word.length - 1
        let flag = true
        
        while(left <= right) {
            if(word[left] !== word[right]) {
                flag = false
                break
            } else {
                left++
                right--
            }
        }
        
        if(flag) return word
    }
    
    return ''
};