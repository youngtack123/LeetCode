/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => b - a); // Sort the array in descending order
    
    let distinctMax = []; // Array to store distinct maximums
    
    for (const num of nums) {
        if (!distinctMax.includes(num)) { // Check if the number is not already in distinctMax
            distinctMax.push(num); // Add the number to distinctMax if it's not a duplicate
        }
        if (distinctMax.length === 3) { // If we have found the third distinct maximum, return it
            return distinctMax[2];
        }
    }
    
    // If there are fewer than 3 distinct maximums, return the maximum number
    return distinctMax[0];
};
