/**
 * @param {string[]} words
 * @return {number}
 */

var similarPairs = function ( words ) {
    // Set을 활용해서 중복되는 문자열을 제거하고, 정렬후에, 배열의 형태에서 문자열 형태로 합친다
    words = words.map(w => [...new Set(w)].sort().join(""))    

    let count = 0
    
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i] === words[j]) {
                count++
            }
        }
    }
    return count
}
