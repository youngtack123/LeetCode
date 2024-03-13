/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    let map = new Map()
    
    arr.forEach(el => {
        if(map.has(el)) {
            map.set(el, map.get(el) + 1)
        } else {
            map.set(el, 1)    
        }
        
    })
    
    const occurrences = Array.from(map).map(el => el[1])
    const checkDuplicate = new Set(occurrences)
    
    return occurrences.length === checkDuplicate.size
    
};