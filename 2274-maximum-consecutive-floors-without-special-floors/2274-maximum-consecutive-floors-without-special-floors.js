/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function(bottom, top, special) {

    special.sort((a, b) => b - a)
    let max = -Infinity
    
    for(let i = 0 ; i < special.length - 1 ; i++) {
        max = Math.max(max, special[i] - special[i + 1] - 1)
    }

    max = Math.max(max, special[special.length - 1] - bottom, top - special[0])
    
    return max
};