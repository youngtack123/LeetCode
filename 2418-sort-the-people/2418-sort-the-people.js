/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const heightMap=new Map()
    for(let i=0; i<names.length ;i++){
        heightMap.set(heights[i],names[i])
    }
    
    return [...heightMap.entries()].sort((a,b)=>b[0]-a[0]).map(v=>v[1])
};