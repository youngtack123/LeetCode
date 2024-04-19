/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const map = new Map();
    const result = [];
    
    // Count the frequency of elements in arr1
    for (const num of arr1) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    // Add elements from arr1 that appear in arr2 according to their relative order
    for (const num of arr2) {
        const count = map.get(num);
        for (let i = 0; i < count; i++) {
            result.push(num);
        }
        map.delete(num); // Remove the element from the map
    }
        
    // Add remaining elements from arr1 in ascending order
    const remaining = [...map.keys()].sort((a, b) => a - b);
    for (const num of remaining) {
        const count = map.get(num);
        for (let i = 0; i < count; i++) {
            result.push(num);
        }
    }
    
    return result;
};
