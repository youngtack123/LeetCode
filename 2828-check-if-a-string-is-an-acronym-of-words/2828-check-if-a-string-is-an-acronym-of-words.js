/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    
    let compare = ''
    
    words.forEach(word => {
        const firstChar = word.charAt(0)
        
        compare += firstChar
    })
    
    return s === compare
};