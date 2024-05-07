/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    
    let answer = Array(k).fill(0)
    let map = new Map()
    
    for(let i = 0 ; i < logs.length ; i++) {
        const [id, time] = logs[i]
        if (!map.has(id)) {
            map.set(id, new Set());
        }
        map.get(id).add(time); 
    }
    
    const uams = [...map.entries()].map(el => el[1].size)
    
    for(let i = 0 ; i < uams.length ; i++) {
        const targetIdx = uams[i] - 1
        answer[targetIdx]++
    }
    
    return answer
};