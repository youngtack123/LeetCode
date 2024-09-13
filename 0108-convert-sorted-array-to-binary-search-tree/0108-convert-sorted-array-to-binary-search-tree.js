/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length == 0) return null;
    // build the actual tree
    let build = (l = 0, r = nums.length) => {
        if (r <= l) return null;
        // build current node
        let m = Math.trunc((l + r) / 2);
        let node = new TreeNode(nums[m], null, null);
        // divide & conquer
        [node.left, node.right] = [build(l, m), build(m+1, r)];
        return node;
    }
    return build();
};