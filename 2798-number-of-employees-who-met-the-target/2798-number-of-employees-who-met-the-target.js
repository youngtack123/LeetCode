/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    return hours.reduce((acc, curr) => {
        if(curr >= target) {
            acc += 1
        }
        return acc
    }, 0)
};