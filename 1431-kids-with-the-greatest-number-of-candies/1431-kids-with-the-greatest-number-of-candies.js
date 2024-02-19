/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    let answer = []
    candies.forEach((candy) => {
        if(candy + extraCandies >= Math.max(...candies)) {
            answer.push(true)
        } else {
            answer.push(false)
        }
    })
    
    return answer
};