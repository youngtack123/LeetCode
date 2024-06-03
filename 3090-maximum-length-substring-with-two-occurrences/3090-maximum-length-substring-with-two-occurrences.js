/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    
    let left = 0
    let right = 0
    let current = 0
    let max = 0
    let map = new Map()
    
    while(right < s.length) {
        
        if(!map.has(s[right])) {
            current += 1
            map.set(s[right], (map.get(s[right]) || 0) + 1)
            right++
        } else {
            // 횟수가 at most 2까지 있는 경우
            if(map.get(s[right]) < 2) {
                current += 1
                map.set(s[right], map.get(s[right]) + 1)
                right++
            } 
            // 횟수가 2를 넘는 경우
            else {
                map.set(s[left], map.get(s[left]) - 1)
                current -= 1    

                if(map.get(s[left]) == 0) {
                    map.delete(s[left])
                }
                left++
            }
        }
        
        max = Math.max(max, current)
    }
    
    return max
};