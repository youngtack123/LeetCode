/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    
    let splited = []
    
    for(const word of words) {
        const tmp = word.split(separator)
        
        for(const el of tmp) {
            if(el !== '') {
                splited.push(el)   
            }
        }
    }
    
    return splited
};