/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */

var countFairPairs = function(nums, lower, upper) {
    let answer = 0;
    nums.sort((a, b) => a - b); // 배열을 정렬합니다.

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        // 이진 탐색을 사용하여 lower보다 크거나 같은 첫 번째 인덱스를 찾습니다.
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[i] + nums[mid] < lower) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        let start = left;

        left = i + 1;
        right = nums.length - 1;

        // 이진 탐색을 사용하여 upper보다 큰 첫 번째 인덱스를 찾습니다.
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[i] + nums[mid] <= upper) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        let end = right;

        // lower와 upper 사이에 있는 조합의 개수를 계산하여 더합니다.
        if (start <= end) {
            answer += end - start + 1;
        }
    }
    return answer;
};
