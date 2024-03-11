/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    
    let map = new Map()
    let destinations = []
    
    
    for(let i = 0 ; i < paths.length ; i++) {
        map.set(paths[i][0], paths[i][1])
        destinations.push(paths[i][1])
    }
    
    let answerMap = new Map()
    
    destinations.forEach(destination => {
        if(map.get(destination)) {
            answerMap.set(destination, true)
        } else {
            answerMap.set(destination, false)
        }
    })
    
    const res = Array.from(answerMap)
    
    let tmp = ''
    
    res.forEach(el => {
        if(el[1] === false) {
            tmp = el[0]
        }
    })
    
    return tmp
};