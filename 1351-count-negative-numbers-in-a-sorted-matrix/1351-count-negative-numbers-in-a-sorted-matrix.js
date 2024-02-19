/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    
    let answer = 0;
    
    grid.forEach(g => {
        g.forEach((el) => {
            if(el < 0) {
                answer++
            }
        })
    })
    
    return answer
};