/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    
    let left = 0
    
    for(let right = 0 ; right < word.length ; right++) {
        if(word[right] == ch) {
            const toReverse = word.slice(0, right + 1)
            const toRemain = word.slice(right + 1)
            
            const reversed = [...toReverse].reverse().join('')
            
            return reversed + toRemain
        }
    }
    
    return word
};