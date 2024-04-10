/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    
    let answer = 0
    
    for(let detail of details) {
        if(detail.slice(11, 13) > 60) {
            answer++
        }
    }
    
    return answer
};