/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    
    let answer = [];
    
    sentences.forEach((sentence) => {
        let words = sentence.split(" ");
        answer.push(words.length)
    })
    
    return Math.max(...answer)
};