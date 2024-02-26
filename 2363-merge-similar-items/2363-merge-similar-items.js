/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    
    let map = new Map()
    const tmp = [...items1, ...items2]
    
    for(let i = 0 ; i < tmp.length ; i++) {
        
        let ithKey = tmp[i][0]
        let ithValue = tmp[i][1]
        let currValue = map.get(tmp[i][0])
        
        if(currValue) {
            map.set(ithKey, currValue + ithValue)
        } else {
            map.set(ithKey, ithValue)   
        }
    }
    
    let sortedArray = Array.from(map).sort((a, b) => {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
    });
    
    return sortedArray
};