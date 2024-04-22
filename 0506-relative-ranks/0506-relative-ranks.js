/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    
    const sorted = [...score].sort((a, b) => b - a)
    const ranks = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    
    let sortedRanks = new Map()
    
        
    for (let i = 0; i < sorted.length; i++) {
        if (i < 3) {
            sortedRanks.set(sorted[i], ranks[i]);
        } else {
            sortedRanks.set(sorted[i], (i + 1).toString());
        }
    }
    
    
    const answer = [];
    for (let j = 0; j < score.length; j++) {
        answer.push(sortedRanks.get(score[j]));
    }
    
    return answer
};