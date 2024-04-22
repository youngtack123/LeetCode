/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let maxScore = 0;
    let currentScore = 0;
    let seen = new Set();
    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        while (seen.has(nums[end])) {
            seen.delete(nums[start]);
            currentScore -= nums[start];
            start++;
        }
        seen.add(nums[end]);
        currentScore += nums[end];
        maxScore = Math.max(maxScore, currentScore);
    }

    return maxScore;
};
