/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
  let sum = 0, idx = 0  
  
  for (let i = 0; i < grid.length; i++) {
    grid[i].sort((a,b) => b - a)
  }

  while (idx < grid[0].length) {
    let max = -Infinity
    
    for (let i = 0; i < grid.length; i++) {      
        max = Math.max(grid[i][idx], max)
    }

    idx++
    sum += max
  } 

  return sum
};