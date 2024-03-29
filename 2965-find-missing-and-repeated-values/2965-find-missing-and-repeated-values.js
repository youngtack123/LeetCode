/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {

    const arr = grid.flat().sort((a,b)=>a-b)

    const duplicate = arr.find((val)=>arr.indexOf(val) != arr.lastIndexOf(val))

    const limit = Math.pow(grid.length, 2)
    
    console.log(limit)

    for(let i = 1 ; i <= limit ; i++){
        if(!arr.includes(i)){
             return [duplicate, i]
         }
    }
};