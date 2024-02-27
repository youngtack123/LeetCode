/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    
    let map = new Map()
    
    nums.forEach(num => {
        if(map.get(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    })
    
    const sortedMap = new Map([...map.entries()].sort((a, b) => {
      if (a[1] === b[1]) {
        return b[0] - a[0];
      } else {
        return a[1] - b[1];
      }
    }));

    const result = [];

    for (let [num, freq] of sortedMap) {
      for (let i = 0; i < freq; i++) {
        result.push(num);
      }
    }
    
    return result
    
};