/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    let answer = []
    
    for(let el of nums1) {
        if(nums2.includes(el)) {
            answer.push(el)
            const idx = nums2.indexOf(el)
            nums2.splice(idx, 1)
        }
    }
    
    return answer
};