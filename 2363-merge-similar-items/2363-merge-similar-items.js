/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    
    let map = new Map()
    
    const tmp = [...items1, ...items2]
    
    for(let i = 0 ; i < tmp.length ; i++) {
        
        if(map.get(tmp[i][0])) {
            map.set(tmp[i][0], map.get(tmp[i][0]) + tmp[i][1])
        } else {
            map.set(tmp[i][0], tmp[i][1])   
        }
    }
    
    let sortedArray = Array.from(map).sort((a, b) => {
        if (a[0] < b[0]) return -1; // 오름차순 정렬
        if (a[0] > b[0]) return 1;
        return 0;
    });
    
    return sortedArray
};