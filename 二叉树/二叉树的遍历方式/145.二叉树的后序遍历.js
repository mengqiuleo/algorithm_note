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
 * @return {number[]}
 */

var postorderTraversal = function(root) {
  let res = [];
  const dfs = function(root) {
    if(root === null) {
      return;
    }
    dfs(root.left);
    dfs(root.right);
    res.push(root.val);
  }
  dfs(root);
  return res;
};