/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    
    const sorted = salary.sort((a, b) => a - b)
    const minimum = sorted[0]
    const maximum = sorted[sorted.length - 1]
    
    const arr = salary.filter(sal => sal !== minimum && sal !== maximum)
    
    const total = arr.reduce((acc, curr) => (acc + curr), 0)
    
    return Number(total / arr.length)
};