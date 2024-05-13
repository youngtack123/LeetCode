/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    
    let left = 0
    let right = 0
    let sum = 0
    let answer = 0
    
    while(right < arr.length) {
        
        sum += arr[right]
        
        if(right - left + 1 === k) {
            const average = sum / k
            
            if(threshold <= average) {
                answer++
            }
            
            sum -= arr[left]
            left++
        }
        
        right++
    }
    
    return answer
};