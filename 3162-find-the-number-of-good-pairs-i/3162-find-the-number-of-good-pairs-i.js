/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let count = 0 
   for(j=0;j<nums2.length;j++){
    for(i=0;i<nums1.length;i++){
        let f = nums2[j]*k
if(nums1[i]%f==0){
    count++
}

    }}
    return count
};