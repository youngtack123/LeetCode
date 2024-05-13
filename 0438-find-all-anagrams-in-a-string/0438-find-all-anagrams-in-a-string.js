/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// var findAnagrams = function(s, p) {
    
//     let left = 0
//     let current = ''
//     let answer = []
    
//     for(let right = 0 ; right < s.length ; right++) {
        
//         current += s[right]
        
//         if(right - left + 1 === p.length) {
//             const currentAnagram = current.split('').sort().join('')
//             const pAnagram = p.split('').sort().join('')
            
//             if(currentAnagram === pAnagram) {
//                 answer.push(left)
//             }
//             current = current.slice(1)
//             left++
//         }
//     }
    
//     return answer
// };

const findAnagrams = (s, p) => {
    
    const output = [];
    const neededChars = {};
    
    for (let char of p) {
        if (char in neededChars) {
            neededChars[char]++
        } else neededChars[char] = 1
    }
    
    let left = 0;
    let right = 0; 
    let count = p.length 
    
    while (right < s.length) {
        
        if (neededChars[s[right]] > 0) count--;
        
        neededChars[s[right]]--;
        right++;
        
        if (count === 0) output.push(left);
        
        if (right - left == p.length) {
            if (neededChars[s[left]] >= 0) count++;
            
            neededChars[s[left]]++;
            left++;
        }
    }
    return output;
};