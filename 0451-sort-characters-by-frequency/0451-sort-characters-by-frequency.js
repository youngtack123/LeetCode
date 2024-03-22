/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    let answer = ''
    let map = new Map()
    
    for(let i = 0 ; i < s.length ; i++) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    
    const sorted = [...map.entries()].sort((a , b) => b[1] - a[1])
    
    for (let [char, count] of sorted) {
        answer += char.repeat(count); // 등장 빈도수만큼 문자 반복
    }
    
    return answer
    
    
};