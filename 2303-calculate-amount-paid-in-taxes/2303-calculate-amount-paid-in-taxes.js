/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    
    let answer = 0
    
    if(income === 0) return 0
    
    for(let i = 0 ; i < brackets.length ; i++) {
        const upper = brackets[i][0]
        const prevUpper = i > 0 ? brackets[i - 1][0] : 0;
        const percent = brackets[i][1]
        
        if(income - (upper - prevUpper) >= 0) {
            const tax = (upper - prevUpper) / 100 * percent
            answer += tax
        } else {
            const tax = income / 100 * percent
            answer += tax
            break;
        }
        income = income - (upper - prevUpper)
    }
    return answer
};