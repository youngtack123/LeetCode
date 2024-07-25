/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraysDivByK(nums, k) {
    let count = 0;
    let prefixSum = 0;
    let remainderCount = {0: 1}; // 나머지가 0인 경우를 위해 초기화

    for (let num of nums) {
        prefixSum += num;
        let remainder = ((prefixSum % k) + k) % k; // 음수 나머지를 방지

        if (remainderCount[remainder] !== undefined) {
            count += remainderCount[remainder];
            remainderCount[remainder]++;
        } else {
            remainderCount[remainder] = 1;
        }
    }

    return count;
}