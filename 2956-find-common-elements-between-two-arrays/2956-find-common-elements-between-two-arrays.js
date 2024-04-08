/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    
    let answer = []
    
    let nums1Count = 0
    
    for(let i = 0 ; i < nums1.length ; i++) {
                
        if(nums2.includes(nums1[i])) {
            nums1Count++
        }
    }
    
    let nums2Count = 0
    
    for(let i = 0 ; i < nums2.length ; i++) {
                
        if(nums1.includes(nums2[i])) {
            nums2Count++
        }
    }
    
    return [nums1Count, nums2Count]
};