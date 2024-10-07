/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    return dfs(root, 0, sum);
};

var dfs = function(curr, currentSum, targetSum) {
    if(!curr) {
        return false;
    }
    
    currentSum += curr.val
    
    // leaf node에 도달했을때
    if(curr.left == null && curr.right == null) {
        return currentSum == targetSum
    }
    
    return dfs(curr.left, currentSum, targetSum) || dfs(curr.right, currentSum, targetSum)
}