/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    
    let answer = 0
    
    for(let i = 0 ; i < arr.length - 2 ; i++) {
        for(let j = i + 1 ; j < arr.length - 1 ; j++) {
            for(let k = j + 1 ; k < arr.length ; k++) {
                
                const condition1 = Math.abs(arr[i] - arr[j]) <= a
                const condition2 = Math.abs(arr[j] - arr[k]) <= b
                const condition3 = Math.abs(arr[i] - arr[k]) <= c
                
                if(condition1 && condition2 && condition3) {
                    answer++
                }
            }
        }
    }
    
    return answer
};