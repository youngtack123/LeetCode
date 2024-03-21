/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    
    const allowedArr = [...allowed]
    let answer = 0
    
    for(let i = 0 ; i < words.length ; i++) {
        answer++
        
        for(let j = 0 ; j < words[i].length ; j++) {
            
            if(!allowedArr.includes(words[i][j])) {
                answer--
                break
            }
        }        
    }
    return answer
};