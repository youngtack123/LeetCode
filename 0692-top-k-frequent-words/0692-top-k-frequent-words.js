/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    
    let map = new Map()
    
    for(let word of words) {
        map.set(word, (map.get(word) || 0) + 1)
    }
    
    const mapArr = Array.from(map)
    
    mapArr.sort((a, b) => {
        if (b[1] === a[1]) {
            return a[0].localeCompare(b[0])
        } else {
            return b[1] - a[1]
        }
    })
    
    let answer = []
    
    for(let i = 0 ; i < k ; i++) {
        answer.push(mapArr[i][0])
    }
    
    return answer
};