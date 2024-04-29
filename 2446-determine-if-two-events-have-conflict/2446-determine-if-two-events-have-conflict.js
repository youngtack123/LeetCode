/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    
    let first = []
    let second = []
    
    for(let i = 0 ; i < event1.length ; i++) {
        const tmp1 = event1[i].split(':')
        const tmp2 = event2[i].split(':')
        
        first.push(Number(tmp1[0]) * 60 + Number(tmp1[1]))
        second.push(Number(tmp2[0]) * 60 + Number(tmp2[1]))
    }
    
    if((first[0] <= second[0] && second[0] <= first[1]) || (second[0] <= first[0] && first[0] <= second[1])) {
        return true
    }
    
    return false
};