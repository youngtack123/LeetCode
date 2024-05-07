/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    
    let answer = 0
    
    for(let i = 0 ; i < startTime.length ; i++) {
        const start = startTime[i]
        const end = endTime[i]
        
        if(start <= queryTime && queryTime <= end) {
            answer++
        }
    }
    
    return answer
};