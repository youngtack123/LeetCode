/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    
    let answer = [];
    
    words.forEach((word, idx) => {
        if(word.includes(x)) {
            answer.push(idx)
        }
    })
    
    return answer
};