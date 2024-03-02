/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphaLength = alphabet.length
        
    if(sentence.length >= alphaLength) {
        for(let i = 0 ; i < alphaLength ; i++) {
            if(!sentence.includes(alphabet[i])) {
                return false    
            }
        }
    } else {
        return false
    }
    
    return true
};