/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let n = arr.length
    let answer = new Array(n)
    
    answer[n - 1] = -1
    
    let maxSoFar = -1
    
    for (let i = n - 1; i >= 0; i--) {
        let current = arr[i]
        arr[i] = maxSoFar
        if (current > maxSoFar) {
            maxSoFar = current
        }
    }
    
    return arr
};
