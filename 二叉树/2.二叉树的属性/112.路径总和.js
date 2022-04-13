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
//# 递归
var hasPathSum = function(root, targetSum) {
  const traversal = function(node,cnt) {
    //如果总和此时已经凑成，并且遇到叶子节点
    if(cnt === 0 && !node.left && !node.right) {
      return true;
    }
    //遇到叶子节点，但值未凑够
    if(!node.left && !node.right) {
      return false;
    }
    if(node.left && traversal(node.left,cnt-node.left.val)) {
      return true;
    }
    if(node.right && traversal(node.right,cnt-node.right.val)) {
      return true;
    }
    return false;
  }
  if(!root) {
    return false;
  }
  return traversal(root,targetSum - root.val);
};