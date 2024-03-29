/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    
    let one = []
    let two = []
    
    for(let i = 0 ; i < nums1.length ; i++) {
        if(!nums2.includes(nums1[i])) {
            one.push(nums1[i])
        }
    }
    
    for(let i = 0 ; i < nums2.length ; i++) {        
        if(!nums1.includes(nums2[i])) {
            two.push(nums2[i])
        }
    }
    
    const filteredOne = one.filter((element, index) => {
        return one.indexOf(element) === index;
    });
    
    const filteredTwo = two.filter((element, index) => {
        return two.indexOf(element) === index;
    });
    
    return [filteredOne, filteredTwo]
};