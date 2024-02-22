/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    
    let answer = 0
    
    for(let i = 0 ; i < items.length ; i++) {
        const isRule1 = ruleKey == 'type' && ruleValue == items[i][0]
        const isRule2 = ruleKey == 'color' && ruleValue == items[i][1]
        const isRule3 = ruleKey == 'name' && ruleValue == items[i][2]

        if(isRule1 || isRule2 || isRule3) {
            answer++
        }
    }
    
    
    return answer
};