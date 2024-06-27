/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let answer = []
    
    for(let char of words[0]) {
        if(words.every((word) => word.includes(char))) {
            answer.push(char)
            words = words.map((word) => word.replace(char, ''))
        }
    }
    
    return answer
};