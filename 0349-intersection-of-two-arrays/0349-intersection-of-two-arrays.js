/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    let answer = []
    
    const set1 = new Set([...nums1])
    const set2 = new Set([...nums2])
    
    for(let el of set1) {
        if(set2.has(el)) {
            answer.push(el)
        }
    }
    
    return answer
}