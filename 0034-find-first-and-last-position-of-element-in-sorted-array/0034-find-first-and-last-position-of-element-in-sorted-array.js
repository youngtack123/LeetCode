/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    function startIdx(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
        const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
              result = mid; // 일치하는 값을 찾으면 일단 저장하고
              right = mid - 1; // 왼쪽 부분에서 계속 탐색
            } else if (nums[mid] < target) {
              left = mid + 1;
            } else {
              right = mid - 1;
            }
        }

        return result;
    }
    
    function EndIndex(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                result = mid; // 일치하는 값을 찾으면 일단 저장하고
                left = mid + 1; // 오른쪽 부분에서 계속 탐색
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
    
    const startIndex = startIdx(nums, target);
    const endIndex = EndIndex(nums, target);

    return [startIndex, endIndex];
};