/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    
    let current = s[0]
    let count = 1
    let max = 0
    
    for(let i = 1 ; i < s.length ; i++) {
        if(s[i] === current) {
            count++
        } else {
            if(max < count) {
                max = count
            }
            current = s[i]
            count = 1
        }
    }
    
    (max < count) && (max = count)
    
    return max
};