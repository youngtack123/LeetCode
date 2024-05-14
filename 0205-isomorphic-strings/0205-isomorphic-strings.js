/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isIsomorphic = function(s, t) {
    
//     let map = new Map()
    
//     for(let i = 0 ; i < s.length ; i++) {
        
//         if(map.has(s[i])) {
//             if(map.get(s[i]) !== t[i]) {
//                 return false
//             }
//         } else {
//             if(map.size < 1) {
//                 map.set(s[i], t[i])
//             } else {
//                 const alreadyThere = [...map.values()].some(value => value === t[i]);
//                 if(alreadyThere) return false
//             }
//         }
//     }
    
//     return true
// };
var isIsomorphic = function(s, t) {
    let map = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            if (map.get(s[i]) !== t[i]) {
                return false;
            }
        } else {
            // t[i]가 이미 다른 문자에 매핑되어 있는지 확인
            if (Array.from(map.values()).includes(t[i])) {
                return false;
            }
            map.set(s[i], t[i]);
        }
    }
    
    return true;
};
