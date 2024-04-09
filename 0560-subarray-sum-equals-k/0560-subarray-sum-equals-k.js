// Define a function named subarraySum that takes an array of numbers (nums) and a target sum (k) as parameters
var subarraySum = function(nums, k) {
    // Create a Map to store the cumulative sum and its frequency
    const map = new Map();

    // Initialize the map with the base case where the cumulative sum is 0 and its frequency is 1
    map.set(0, 1);

    // Initialize variables to keep track of the cumulative sum and the count of subarrays with the target sum
    let sum = 0;
    let count = 0;

    // Iterate through each element in the input array nums
    nums.forEach((num) => {
        // Update the cumulative sum by adding the current element
        sum += num;

        // Check if there exists a subarray with the target sum (sum-k)
        if(map.has(sum - k))
            // If yes, update the count by adding the frequency of the cumulative sum (sum-k) in the map
            count += map.get(sum - k);

        // Update the map with the current cumulative sum and its frequency
        map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
    });

    // Return the final count of subarrays with the target sum
    return count;
};