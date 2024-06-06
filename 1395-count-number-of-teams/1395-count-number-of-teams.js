/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(ratings) {
    let n = ratings.length;
    let count = 0;
    // Arrays to store the counts of elements smaller and larger than the current element
    let smallerLeft = new Array(n).fill(0);
    let largerLeft = new Array(n).fill(0);
    // Count smaller elements on the left
    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (ratings[i] > ratings[j]) {
                smallerLeft[i]++;
                count += smallerLeft[j]; // Count the teams (i, j, k) where i > j
            }
        }
    }
    // Reset arrays for counting on the right
    smallerLeft.fill(0);
    // Count larger elements on the left
    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (ratings[i] < ratings[j]) {
                smallerLeft[i]++;
                count += smallerLeft[j]; // Count the teams (i, j, k) where i < j
            }
        }
    }

    return count;
};