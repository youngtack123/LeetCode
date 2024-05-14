/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var longestOnes = function(nums, k) {

//     let start = 0 ;
//     let count = 0 ;
//     let longest  = 0 ;
//     let flip = k;

//     for(let windowEnd = 0 ; windowEnd < nums.length; windowEnd++) {
//         const item = nums[windowEnd];

//         if(item === 1) {
//             count++;
//         }
//         else if(item === 0 && flip !== 0) {
//             count++;
//             flip--;
//         } else {
//             longest = Math.max(count, longest);
//             windowEnd = start;
//             start++
//             count = 0 ;
//             flip = k
//         }
//     }
//     longest = Math.max(count, longest)
    
//     return longest;
// };
var longestOnes = function(nums, k) {
    let maxLength = 0
    let zeros = 0
    let left = 0
    
    for(let right = 0 ; right < nums.length ; right++) {
        if(nums[right] === 0) {
            zeros++
        }
        
        while(zeros > k) {
            if(nums[left] === 0) {
                zeros--
            }
            left++
        }
        
        const current = right - left + 1
        maxLength = Math.max(maxLength, current)
    }
    
    return maxLength
}