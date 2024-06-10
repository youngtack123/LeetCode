/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    
    let indexArr = []
    
    for(let i = 0 ; i < s.length ; i++) {
        if(s[i] == c) {
            indexArr.push(i)
        }
    }
    
    let answer = new Array(s.length).fill(0)
    
    for(let i = 0 ; i < s.length ; i++) {
        if(s[i] !== c) {
            let currentDistance = Infinity
            
            for(let j = 0 ; j < indexArr.length ; j++) {
                const distance = Math.abs(i - indexArr[j])
                currentDistance = Math.min(currentDistance, distance)
            }
            
            answer[i] = currentDistance
        }
    }
    
    return answer
};