var maxAscendingSum = function(nums) {
    let current = nums[0]; // 첫 번째 숫자로 초기화
    let sum = nums[0]; // 첫 번째 숫자로 초기화
    let maxSum = nums[0]; // 최대 합으로 초기화

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > current) {
            // 현재 값보다 큰 경우 부분 합에 더하고 현재 값 갱신
            sum += nums[i];
            current = nums[i];
        } else {
            // 현재 값보다 작거나 같은 경우 최대 합 갱신 후 부분 합과 현재 값 초기화
            maxSum = Math.max(maxSum, sum);
            sum = nums[i];
            current = nums[i];
        }
    }

    // 반복이 종료된 후 마지막 부분 합과 최대 합을 비교하여 최종 최대 합을 결정
    maxSum = Math.max(maxSum, sum);
    
    return maxSum;
};
