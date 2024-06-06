/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    
    let answer = []
    let i = 0
    
    while (answer.length < arr.length) {
        if (arr[i] !== 0) {
            answer.push(arr[i])
        } else {
            // 0인 경우
            answer.push(0);
            if (answer.length < arr.length) {
                answer.push(0)
            }
        }
        i++
    }
    
    for (let j = 0; j < arr.length; j++) {
        arr[j] = answer[j]
    }
    
    return arr
};
