/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    let answer = []
    
    for(let i = 0 ; i < accounts.length ; i++) {
        
        let sum = 0
        
        accounts[i].forEach(num => {
            sum += num;
        })
        answer.push(sum)
    }
    
    return Math.max(...answer)
};