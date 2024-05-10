/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let maxSubLength = 0;
    const hashSet = new Set()
    
    while(right < s.length){
        // 중복되지 않는 경우
        if(!hashSet.has(s[right])){
            hashSet.add(s[right]);
            maxSubLength = Math.max(maxSubLength, right - left + 1);
            right++;
        }
        else{
            hashSet.delete(s[left]);
            left++
        }
    }
    return maxSubLength;
};