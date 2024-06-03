/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    
    // answer[0] == 한판도 안 진 사람
    // answer[1] == 딱 한판 진 사람
    
    let winners = new Set()
    let losers = new Map()
    
    for(let [winner, loser] of matches) {
        winners.add(winner)
        losers.set(loser, (losers.get(loser) || 0) + 1)
    }
    
    const lostOnce = [...losers.entries()].filter(loser => loser[1] == 1).map(loser => loser[0]).sort((a, b) => a - b)
    
    const wonAll = [...winners].filter(winner => !losers.has(winner)).sort((a, b) => a - b)
    
    return [wonAll, lostOnce]
    
};