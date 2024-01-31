/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let answer = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            // 만약 현재 요소가 이전 요소보다 작거나 같다면
            // 현재 요소를 이전 요소보다 1 증가시켜야 합니다.
            answer += nums[i - 1] + 1 - nums[i];
            nums[i] = nums[i - 1] + 1;
        }
    }

    return answer;
};