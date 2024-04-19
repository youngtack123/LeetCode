/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    
    let tmp1 = []
    
    for(let i = 0 ; i < arr2.length ; i++) {
        for(let j = 0 ; j < arr1.length ; j++) {
            const target = arr2[i]
            const element = arr1[j]
            
            if(element === target) {
                tmp1.push(element)
            }
        }
    }
    
    const filtered = arr1.filter(el => !arr2.includes(el)).sort((a, b) => a - b)
    
    return tmp1.concat(filtered)
};