/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let i = 0
    let j = 1

    while(i < bits.length) {
        let incr = 2

        if(
            j == bits.length - 1 && 
            bits[i] == bits[j] && 
            bits[j] == 0
        ) return true
        
        if(j >= bits.length && bits[i] == 0) return true

        if(bits[i] == 0 && bits[j] == 1) incr = 1

        i += incr
        j += incr
    }

    return false
};