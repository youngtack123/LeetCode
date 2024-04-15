/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    
    let altitudes = [0]
    
    let current = 0
    
    for(let i = 0 ; i < gain.length ; i++) {
        const altitude = current + gain[i]
        current = altitude
        altitudes.push(altitude)
    }
    
    return Math.max(...altitudes)
};