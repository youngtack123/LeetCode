/**
 * @param {number[]} nums
 * @return {number}
 */
function countBadPairs(nums) {
    const diffs = new Map();
    let total = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const diff = nums[i] - i;
        const count = diffs.get(diff);
        
        diffs.set(diff, count ? count + 1 : 1);
        total++;
    }
    
    let sum = 0;
    
    for (const [key, value] of diffs) {
        sum += value * (total - value) / 2;
    }
    
    return sum;
}