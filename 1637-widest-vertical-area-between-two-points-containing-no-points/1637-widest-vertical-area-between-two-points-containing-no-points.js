/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    
    let x = [];
    let diff = []
    
    points.forEach((point) => {
        x.push(point[0])
    })
    
    x = x.sort((a, b) => a - b)
    
    for(let i = 0 ; i < x.length - 1 ; i++) {
        diff.push(Math.abs(x[i] - x[i + 1]))
    }
    
    return Math.max(...diff)
};