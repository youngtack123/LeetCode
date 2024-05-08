/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var longestOnes = function(nums, k) {
    
//     let flip = k
//     let max = 0
    
//     for(let i = 0 ; i < nums.length ; i++) {
//         let count = 0
//         flip = k
        
//         for(let j = i ; j < nums.length ; j++) {
            
//             if(nums[j] === 0) {
//                 if(flip > 0) {
//                     flip--    
//                 } else {
//                     break
//                 }
//             }
//             count++
//         }
//         if(max < count) {
//             max = count
//         }
//     }
    
//     return max
// };
var longestOnes = function(nums, k) {

    let start = 0 ;
    let count = 0 ;
    let longest  = 0 ;
    let flip = k;

    for(let windowEnd = 0 ; windowEnd < nums.length; windowEnd++) {
        const item = nums[windowEnd];

        if(item === 1) {
            count++;
        }
        else if(item === 0 && flip !== 0) {
            count++;
            flip--;
        } else {
            longest = Math.max(count, longest);
            windowEnd = start;
            start++
            count = 0 ;
            flip = k
        }
    }
    longest = Math.max(count, longest)
    
    return longest;
};