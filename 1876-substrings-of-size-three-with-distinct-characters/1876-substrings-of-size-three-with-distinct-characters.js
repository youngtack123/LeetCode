/**
 * @param {string} s
 * @return {number}
 */
// var countGoodSubstrings = function(s) {
//     let good = 0;
    
// 	// Sliding window of fixed size 3, starting from beginning of string
//     for(let left = 0; left < s.length - 2; left++) {
// 		// Put characters from window into a Set
//         const window = [s[left], s[left + 1], s[left + 2]];
//         const chars = new Set(window);

// 		// If each character is distinct, then the Set should be size 3,
// 		// which would make it a good substring
//         if(chars.size === 3) good++;
//     }
//     return good;
// };

var countGoodSubstrings = function(s) {
    let good = 0
    
    for(let i = 0 ; i < s.length - 2 ; i++) {
        const first = s[i]
        const second = s[i + 1]
        const third = s[i + 2]
        
        if(first !== second && first !== third && second !== third) {
            good++
        }
    }
    
    return good
};