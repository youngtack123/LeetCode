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

var findAnagrams = function(s, p) {

    let map = new Map();
    let left = 0;
    let right = 0;
    let count = p.length;

    let Arr = new Array();

    for (let i=0; i<p.length; i++) {
        map.set(p[i], (map.get(p[i]) || 0) + 1);
    }

    while (right < s.length) {
        
        if (map.get(s[right]) > 0) {
            count--;
        }
        
        map.set(s[right], (map.get(s[right]) || 0) - 1);

        if (count === 0) Arr.push(left);

        if((right - left + 1) >= p.length) {
            if (map.get(s[left]) >= 0) {
                count++;
            }
            
            map.set(s[left], (map.get(s[left]) || 0) + 1);
            left++;
        }

        right++;
    }
    return Arr;
};