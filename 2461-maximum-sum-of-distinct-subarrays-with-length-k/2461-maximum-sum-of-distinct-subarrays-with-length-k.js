/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var maximumSubarraySum = function(nums, k) {
//     let maxSum = 0;
//     let start = 0;
//     let sum = 0;
//     let uniques = new Set();

//     for (let end = 0; end < nums.length; end++) {
//         while (uniques.has(nums[end])) {
//             sum -= nums[start];
//             uniques.delete(nums[start]);
//             start++;
//         }
//         // Add current element to the sliding window
//         sum += nums[end];
//         uniques.add(nums[end]);

//         // Slide the window if it exceeds size k
//         if (end - start + 1 > k) {
//             sum -= nums[start];
//             uniques.delete(nums[start]);
//             start++;
//         }

//         // Check if the window size is exactly k and all elements are distinct
//         if (end - start + 1 === k && uniques.size === k) {
//             maxSum = Math.max(maxSum, sum);
//         }
//     }

//     return maxSum;
// };

var maximumSubarraySum = function(nums, k) {
    
    let maxSum = 0
    let sum = 0
    let start = 0
    const set = new Set()
    
    for(let end = 0 ; end < nums.length ; end++) {
        
        // 중복되는 경우
        while(set.has(nums[end])) {
            set.delete(nums[start])
            sum -= nums[start]
            start++
        }
        // 중복되지 않는 경우
        set.add(nums[end])
        sum += nums[end]
        
        // size k를 넘어갈 경우
        if(end - start + 1 > k) {
            sum -= nums[start]
            set.delete(nums[start])
            start++
        }
        
        if(end - start + 1 === k && set.size === k) {
            maxSum = Math.max(maxSum, sum)
        }
    }
    
    return maxSum
}