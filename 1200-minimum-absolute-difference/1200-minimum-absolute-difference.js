/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    
    let sorted = arr.sort((a, b) => a - b)
    
    let map = new Map()
    
    for(let i = 0 ; i < sorted.length - 1 ; i++) {
        const a = sorted[i]
        const b = sorted[i+1]
        
        map.set([a, b], b - a)
    }
    
    const sortedEntries = [...map.entries()].sort((a, b) => a[1] - b[1]);
    const result = sortedEntries.filter(entry => entry[1] === sortedEntries[0][1]);
    
    return result.map(entry => entry[0])
    
    
};