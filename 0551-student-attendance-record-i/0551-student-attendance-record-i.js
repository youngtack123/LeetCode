/**
 * @param {string} s
 * @return {boolean}
 */
// var checkRecord = function(s) {
//     const arr = [...s]
    
//     let aCount = 0
//     let lCount = 0

    
//     for(let i = 0 ; i < arr.length ; i++) {
//         if(arr[i] === 'A') {
//             aCount++;
//         }
        
//         if(arr[i] === 'L' && arr[i + 1] === 'L' && arr[i + 2] === 'L') {
//             lCount++
//         }
//     }
    
//     return aCount < 2 && lCount === 0
// };

var checkRecord = function (s) {
    let absent = s.split("").filter((val) => val == "A");
    
    if(absent.length >= 2) {
        return false  
    }
    
    if(s.includes("LLL")) {
        return false   
    }
    
    return true
};