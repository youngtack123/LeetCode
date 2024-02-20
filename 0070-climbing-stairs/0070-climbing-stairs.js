/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = []) {
    if (n <= 2) {
        return n;
    }

    if (memo[n] !== undefined) {
        return memo[n];
    }

    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};
