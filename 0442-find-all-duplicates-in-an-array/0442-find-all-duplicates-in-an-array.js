/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    
    let obj = {}
    
    for(let num of nums) {
        if(!obj[num]) {
            obj[num] = 1
        } else {
            obj[num]++
        }
    }
    
    let answer = []
    
    Object.entries(obj).map(el => {
        if(el[1] == 2) {
            answer.push(Number(el[0]))
        }
    })
    
    return answer
};