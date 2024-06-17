/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    
    dictionary.sort((a, b) => a.length - b.length)
    let sentenceArr = sentence.split(' ')
    
    for(let i = 0 ; i < sentenceArr.length ; i++) {
        
        for(let word of dictionary) {
            if(sentenceArr[i].startsWith(word)) {
                sentenceArr[i] = word
                break
            }
        }
    }
    
    return sentenceArr.join(' ')
};