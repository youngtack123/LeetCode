/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    let map = new Map()
    
    for(const word of strs) {
        const sortedWord = [...word].sort().join('')
        
        if(!map.has(sortedWord)) {
            map.set(sortedWord, [])
        }
        
        map.get(sortedWord).push(word)
    }
    
    return Array.from(map.values())
}