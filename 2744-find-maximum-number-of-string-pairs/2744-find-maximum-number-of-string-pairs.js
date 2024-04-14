/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let count=0;
    for(let i=0;i<words.length;i++){
        if(i<words.indexOf(words[i].split("").reverse().join(""))){
            count++;
        }
    }
    
    return count;
};