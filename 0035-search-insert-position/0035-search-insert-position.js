/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let left = 0
    let mid = 0
    let right = nums.length - 1
    
    while(left <= right) {
        // 중간값을 찾는다
        mid = Math.floor((right + left) / 2)
        
        // 중간값이 target과 일치하는지 확인한다.
        if(nums[mid] === target) return mid
        
        // 중간값 < target (target이 중간값보다 큰 경우) -> left를 현 중간값의 index로 움직인다
        else if(nums[mid] < target) {
            left = mid + 1
        } 
        // target < 중간값 (중간값이 target보다 큰 경우) -> right를 현 중간값의 index로 움직인다
        else {
            right = mid - 1
        }
    }
    
    if(nums[mid] < target) return mid + 1
    if(nums[mid] > target) return mid
};